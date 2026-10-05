//importando o express
import express from "express";
const rota = express.Router();

rota.use("/maclaren", (req,res) => {
    const maclaren = [
        {img: "/images/oscar.jpg", nome:"Oscar Piastri", funcao:"Piloto", idade:"25 anos", nacionalidade:"Australiano"},
        {img: "/images/lando.jpg", nome:"Lando Norris", funcao:"Piloto", idade:"26 anos", nacionalidade:"Britânico"},
        {img: "/images/leonardo.jpg", nome:"Leonardo Fornaroli", funcao:"Piloto Reserva", idade:"21 anos", nacionalidade:"Italiano"},
        {img: "/images/pato.jpg", nome:"Pato O'Ward", funcao:"Piloto de Testes", idade:"27 anos", nacionalidade:"Mexicano"},
        {img: "/images/andrea.jpg", nome:"Andrea Stella", funcao:"Chefe de Equipe", idade:"55 anos", nacionalidade:"Italiano"}
    ]
    res.render("maclaren", {
        maclaren: maclaren
    })
})

export default rota;