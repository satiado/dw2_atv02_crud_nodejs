//importando o express
import Mercedes from "../models/Mercedes.js";
import express from"express";
const rota = express.Router();

//Rota Mercedes
rota.get("/mercedes", (req,res) => {

    Mercedes.findAll().then((mercedes)=>{
        res.render("mercedes", {
            mercedes:mercedes,
        });
    }).catch((error)=>{
        console.log(`Ocorreu um erro ao listar os integrantes. Erro: ${error}`);
    });
});

//ROTA DE CADASTRO DA MERCEDES
rota.post("/mercedes/cadastrar", (req, res) => {
  const nome = req.body.nome;
  const funcao = req.body.funcao;
  const idade = req.body.idade;
  const nacionalidade = req.body.nacionalidade;
  Mercedes.create({
    nome: nome,
    funcao:funcao,
    idade:idade,
    nacionalidade:nacionalidade,
  })
    .then(() => {
      res.redirect("/mercedes");
    })
    .catch((error) => {
    console.log(`Ocorreu um erro ao cadastrar o integrante. Erro: ${error}`);
    });
});

//ROTA PARA EXCLUIR UM INTEGRANTE
rota.get("/mercedes/excluir/:id", (req, res) => {
  const id = req.params.id;
  Mercedes.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/mercedes");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao excluir o cliente. Erro: ${error}`);
    });
});

//ROTA DE EDIÇÃO DO INTEGRANTE
rota.get("/mercedes/editar/:id", (req, res) => {
  const id = req.params.id;
  Mercedes.findByPk(id)
    .then((mercedes) => {
      res.render("mercedesEditar", {
       mercedes:mercedes,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao buscar o cliente.Erro: ${error}`);
    });
});

//ROTA QUE ALTERA O Integrante NO BANCO DE DADOS
rota.post("/mercedes/alterar", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const funcao = req.body.funcao;
  const idade = req.body.idade;
  const nacionalidade = req.body.nacionalidade;
  Mercedes.update(
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
      res.redirect("/mercedes");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao alterar o integrante. Erro: ${error}`);
    });
});

export default rota;