//importando o express
import express from "express";
import Ferrari from "../models/Ferrari.js";
const rota = express.Router();

rota.get("/ferrari", (req,res) => {
    Ferrari.findAll().then((ferrari)=>{
        res.render("ferrari", {
        ferrari:ferrari
        });
    }).catch((error)=>{
        console.log(`Ocorreu um erro ao listar os integrantes. Erro: ${error}`);
    });
});

//ROTA DE CADASTRO DA FERRARI
rota.post("/ferrari/cadastrar", (req, res) => {
  const nome = req.body.nome;
  const funcao = req.body.funcao;
  const idade = req.body.idade;
  const nacionalidade = req.body.nacionalidade;
  Ferrari.create({
    nome: nome,
    funcao:funcao,
    idade:idade,
    nacionalidade:nacionalidade,
  })
    .then(() => {
      res.redirect("/ferrari");
    })
    .catch((error) => {
    console.log(`Ocorreu um erro ao cadastrar o integrante. Erro: ${error}`);
    });
});    

//ROTA PARA EXCLUIR UM INTEGRANTE
rota.get("/ferrari/excluir/:id", (req, res) => {
  const id = req.params.id;
  Ferrari.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/ferrari");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao excluir o cliente. Erro: ${error}`);
    });
});

//ROTA DE EDIÇÃO DO INTEGRANTE
rota.get("/ferrari/editar/:id", (req, res) => {
  const id = req.params.id;
  Ferrari.findByPk(id)
    .then((ferrari) => {
      res.render("ferrariEditar", {
       ferrari:ferrari,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao buscar o cliente.Erro: ${error}`);
    });
});

//ROTA QUE ALTERA O Integrante NO BANCO DE DADOS
rota.post("/ferrari/alterar", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const funcao = req.body.funcao;
  const idade = req.body.idade;
  const nacionalidade = req.body.nacionalidade;
  Ferrari.update(
    {
      nome: nome,
      funcao: funcao,
      idade: idade,
      nacionalidade: nacionalidade,
    },
    {
      where: { id: id },
    },
  )
    .then(() => {
      res.redirect("/ferrari");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao alterar o integrante. Erro: ${error}`);
    });
});


export default rota;