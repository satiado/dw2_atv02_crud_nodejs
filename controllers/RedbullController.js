//importando o express
import express from "express";
import Redbull from "../models/Redbull.js"
const rota = express.Router();


rota.get("/redbull", (req,res) => {
    Redbull.findAll().then((redbull)=>{
        res.render("redbull", {
        redbull:redbull
        });
    }).catch((error)=>{
        console.log(`Ocorreu um erro ao listar os integrantes. Erro: ${error}`);
    });
});

//ROTA DE CADASTRO DA REDBULL
rota.post("/redbull/cadastrar", (req, res) => {
  const nome = req.body.nome;
  const funcao = req.body.funcao;
  const idade = req.body.idade;
  const nacionalidade = req.body.nacionalidade;
  Redbull.create({
    nome: nome,
    funcao:funcao,
    idade:idade,
    nacionalidade:nacionalidade,
  })
    .then(() => {
      res.redirect("/redbull");
    })
    .catch((error) => {
    console.log(`Ocorreu um erro ao cadastrar o integrante. Erro: ${error}`);
    });
});    

//ROTA PARA EXCLUIR UM INTEGRANTE
rota.get("/redbull/excluir/:id", (req, res) => {
  const id = req.params.id;
  Redbull.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/redbull");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao excluir o integrante. Erro: ${error}`);
    });
});

//ROTA DE EDIÇÃO DO INTEGRANTE
rota.get("/redbull/editar/:id", (req, res) => {
  const id = req.params.id;
  Redbull.findByPk(id)
    .then((redbull) => {
      res.render("redbullEditar", {
       redbull:redbull,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao buscar o integrante.Erro: ${error}`);
    });
});

//ROTA QUE ALTERA O Integrante NO BANCO DE DADOS
rota.post("/redbull/alterar", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const funcao = req.body.funcao;
  const idade = req.body.idade;
  const nacionalidade = req.body.nacionalidade;
  Redbull.update(
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