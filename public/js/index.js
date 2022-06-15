// Verificar se o email foi preenchdo
const verificaCampoPreenchido = (evento) =>{


  if(evento.target.value == ''){
    evento.target.style.outline = '2px solid #991300';
    evento.target.setAttribute('placeholder', `Peencha o campo ${evento.target.name}`);
  } else {
    evento.target.style.outline = 'none';
    evento.target.setAttribute('placeholder', '')
  }
}

const onFileChange = evento => {
  let img = document.getElementById('output');
  img.src = URL.createObjectURL(evento.target.files[0])
}

// 1 - Capturar os elementos do HTML para JS
let inputNome = document.getElementById('nome')
let inputEmail = document.querySelector('#registro > form input[type=email]');
let inputSenha = document.querySelector('#registro > form input[type=password]');
let inputConfirmacao = document.querySelector('#registro > form input[name=confirmacao]');
let inputFile = document.querySelector('#registro > form input[type=file]');
let form = document.getElementById('formularioCadastro');

// 2 - Associar ao evento "perdeu o foco" uma função
// 3 - A função vai avisar ao usuário que o campo de
//     email foi deixado em branco
inputNome.addEventListener('blur', verificaCampoPreenchido);
inputEmail.addEventListener('blur', verificaCampoPreenchido);
inputSenha.addEventListener('blur', verificaCampoPreenchido);
inputFile.addEventListener('change', onFileChange);
form.addEventListener(
  'submit',
  (evt)=>{
    // impedir o formulario de ser enviados
      evt.preventDefault();

      //levantando os dados do formulario
      let formData = new FormData(form);
      //JSON.stringify(formData);
      
      // let corpoDaRequisicao =  {
      //   nome: inputNome.value,
      //   email: inputEmail.value,
      //   senha: inputSenha.value
      // }

      // fetch
      fetch(
        'http://localhost:3000/api/v1/usuarios',
        {
          method: 'POST',
          body: formData,
          //headers: {'Content-Type': 'multipart/form-data'}
        }
        );

    }
  );


















//criar um arrey de Amigos
let amigos =[
  {
    id: 1,
    nome: "Wendel Cultrim",
    email: "wendel@digitalhouse.com",
    foto: `http://lorempixel.com.br/500/500/?1`
},
{
    id: 2,
    nome: "Sérgio Moura",
    email: "ssiqueira@digitalhouse.com",
    foto: `http://lorempixel.com.br/500/500/?2`
},
{
    id: 3,
    nome: "Silvia Fiacador",
    email: "silvia@digitalhouse.com",
    foto: `http://lorempixel.com.br/500/500/?3`
}
]   


// localizae/carregar elementos do HTML aqui no JS
//ex: carregar elemento que mostra lista de amigos 
let listaDeAmigos = document.getElementById("listaDeAmigos");

// document.querySelector('SELETOR CSS');
//console.log(document.querySelector('listaDeAmigos > article'));
// document.querySelectorAll
//console.log(document.querySelectorAll('listaDeAmigos > article'));

//console.log(listaDeAmigos); 

//criar uma string com a estrutura que exibe usuario 
let string = '';
for (let i = 0; i < amigos.length; i++) {
  const amigo = amigos[i];
  string += `
  <article onclick="alert('clicou em ${amigo.nome}')">
          <img src="${amigo.foto}" alt="Foto de ${amigo.nome}">
          <span>${amigo.nome}</span>
          <a href="mailto:${amigo.email}">${amigo.email}</a>
        </article> 
  `
}

// injetar essa string no elemento  listaDeAmigos
listaDeAmigos.innerHTML += string;

// alterar elementos  
// ex1: Sumindo com o corpo da pagina
//document.body.innerHTML = 'essa pagina foi hackeada!!!'

// remover elementos

// criar elementos 