const {Usuario} = require('../models');
const {Op} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = {
  registrar: async (req, res) => {
    try {
      //return res.json({body: req.body, file: req.file});
      // capturar dados
      const { nome, email, senha,} = req.body;
      // criptografa senha
      const hash = bcrypt.hashSync(senha, 10);
      // verifica se email ja e cadastrado 
      const verificarUsuarioCadastrado = await Usuario.findOne({where: {email: email}});

      if (verificarUsuarioCadastrado){
        return res.status(409).json({error: 'ususario cadastrado'});
      }

      const novoUsuario = await Usuario.create({
         nome,
         email,
         senha: hash,
         foto: req.file?.filename
       })      
       return res.status(201).json(novoUsuario);
    } catch (error) {
      console.log(error);
      return res.status(401).json({error})
    }
    
  },
  buscar: async (req, res) => {

    //capturar o trecho que esta sendo buscado
    let trechoBuscado = req.query.q;
        
    // Carregar os usuários que tenham o tracho buscado no nome            
    let usuarios = await Usuario.findAll(
      {
          where:{nome:{[Op.substring]:trechoBuscado}}
      }
    );
    
    //enviar para do cliente os usuarios levantados
    res.send(usuarios);
  }
}