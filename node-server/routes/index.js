const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize')

router.get('/', (req, res, next) => {
  res.send('Bem-vindo ao servidor. Acesse o banco de dados a vontade!');
});

router.get('/database/:name', (req, res, next) => {

  const sequelize = new Sequelize(`${(req.params.name)}`, 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define :{
      freezeTableName: true
    }
  })
  
  const LIVROS = sequelize.define('LIVROS', {
    NOME_LIVRO: {type: Sequelize.STRING(30) },
    NOME_AUTOR: {type: Sequelize.STRING(30)},
    SEXO_AUTOR: {type: Sequelize.ENUM('M','F') },
    NUMERO_PAGINAS: {type: Sequelize.INTEGER(4) },
    NOME_EDITORA: {type: Sequelize.STRING(30)},
    PRECO: {type: Sequelize.FLOAT(5,2) },
    ESTADO_EDITORA: {type: Sequelize.STRING(2)},
    ANO_PUBLICACAO: {type: Sequelize.STRING(2)}
  })

  sequelize.authenticate()
    .then(() => {
      LIVROS.findAll({
        attributes: ['NOME_AUTOR']
      }).then(e => {
        const dataRes = e.map(e => e.dataValues.NOME_AUTOR)
        res.send(JSON.stringify(dataRes))
        res.end()
      })

      
    })
    .catch(err => {
      console.error(err.message)
      res.end()
    });

})

module.exports = router;
