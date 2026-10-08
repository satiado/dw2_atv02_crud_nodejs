//importando o express
import express from "express";
import Maclaren from "../models/Maclaren.js"
const rota = express.Router();


rota.get("/maclaren", (req,res) => {
    Maclaren.findAll().then((maclaren)=>{
        res.render("maclaren", {
        maclaren:maclaren
        });
    }).catch((error)=>{
        console.log(`Ocorreu um erro ao listar os integrantes. Erro: ${error}`);
    });
});

//ROTA DE CADASTRO DA MACLAREN
rota.post("/maclaren/cadastrar", (req, res) => {
  const nome = req.body.nome;
  const funcao = req.body.funcao;
  const idade = req.body.idade;
  const nacionalidade = req.body.nacionalidade;
  Maclaren.create({
    nome: nome,
    funcao:funcao,
    idade:idade,
    nacionalidade:nacionalidade,
  })
    .then(() => {
      res.redirect("/maclaren");
    })
    .catch((error) => {
    console.log(`Ocorreu um erro ao cadastrar o integrante. Erro: ${error}`);
    });
});    

//ROTA PARA EXCLUIR UM INTEGRANTE
rota.get("/maclaren/excluir/:id", (req, res) => {
  const id = req.params.id;
  Maclaren.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/maclaren");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao excluir o cliente. Erro: ${error}`);
    });
});

//ROTA DE EDIÇÃO DO INTEGRANTE
rota.get("/maclaren/editar/:id", (req, res) => {
  const id = req.params.id;
  Maclaren.findByPk(id)
    .then((maclaren) => {
      res.render("maclarenEditar", {
       maclaren:maclaren,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao buscar o cliente.Erro: ${error}`);
    });
});

//ROTA QUE ALTERA O Integrante NO BANCO DE DADOS
rota.post("/maclaren/alterar", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const funcao = req.body.funcao;
  const idade = req.body.idade;
  const nacionalidade = req.body.nacionalidade;
  Maclaren.update(
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
      res.redirect("/maclaren");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao alterar o integrante. Erro: ${error}`);
    });
});


export default rota;