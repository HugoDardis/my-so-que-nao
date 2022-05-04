// 1 - Importar o sequelize
const sequelize = require('sequelize');

// 2 - Elencar os dados para conexão com o BD (usuario, senha, porta, endereco...)
const config = {
  "username":"root",
  "password":"#",
  "host":"localhost",
  "port":"3306",
  "dialect":"mysql",
  "database":"escola"
}

// 3 - Criar a conexão com o banco de dados
const conexao = new sequelize(config);

// 4 - Levantando alunos do BD (SELECT * FROM alunos);
const promiseAlunos = conexao.query(
  'SELECT * FROM alunos',
  sequelize.QueryTypes.SELECT
);

// 5 - levantar turmas
const promiseTurmas = conexao.query(
  'SELECT * FROM turmas',
  sequelize.QueryTypes.SELECT
);

// 6 - criando uma promessa de que todas as promessas seram cumpridas
const promiseTotal = Promise.all([promiseAlunos, promiseTurmas]);

promiseTotal.then(
  dados => {
    console.log(dados[0], dados[1]);
    conexao.close();
  }  
);

// - 4.1 - Quando a promise for cumprida, executar a função para .then; 
// promiseAlunos.then(
//   (dados) => {
//   console.log("cumpriu a promise");
//   console.log(dados);
//   conexao.close();
//   }
// );
// promiseTurmas.then(
//   (dados) => {
//   console.log(dados);
//   conexao.close();
//   }
// );

// - 4.2 - Quando a promise falhar executar a função para .catch;
// promise.catch(
//   () => {
//   console.log("Algo de errado nao esta certo")
//   conexao.close();
//   }
// );

// x - Fechando conexão com o BD
//conexao.close();