//importando o express
import express from "express";
const rota = express.Router();

//Rota Red Bull
rota.get("/redbull", (req,res) => {
    const redbull = [
        {img: "/images/max.jpg", nome:"Max Verstappen", funcao:"Piloto", idade:"28 anos", nacionalidade:"Neerlandês"},
        {img: "/images/isack.jpg", nome:"Isack Hadjar", funcao:"Piloto", idade:"21 anos", nacionalidade:"Francês"},
        {img: "/images/yuki.jpg", nome:"Yuki Tsunoda", funcao:"Piloto Reserva", idade:"26 anos", nacionalidade:"Japonês"},
        {img: "/images/ayumu.jpg", nome:"Ayumu Iwasa", funcao:"Piloto de testes", idade:"26 anos", nacionalidade:"Japonês"},
        {img: "/images/laurent.jpg", nome:"Laurent Mekies", funcao:"Chefe de Equipe", idade:"49 anos", nacionalidade:"Francês"}
    ]

    res.render("redbull", {
        redbull : redbull
    })
})

export default rota;