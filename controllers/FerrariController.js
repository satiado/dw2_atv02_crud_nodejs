//importando o express
import express from "express";
const rota = express.Router();

rota.use("/ferrari", (req,res) => {
    const ferrari = [
        {img: "/images/leclerc.jpg", nome:"Charles Leclerc", funcao:"Piloto", idade:"28 anos", nacionalidade:"Monegasco"},
        {img: "/images/lewis.jpg", nome:"Lewis Hamilton", funcao:"Piloto", idade:"28 anos", nacionalidade:"Britânico"},
        {img: "/images/antonio.jpg", nome:"antonio giovinazi", funcao:"Piloto Reserva", idade:"32 anos", nacionalidade:"Italiano"},
        {img: "/images/rafael.jpg", nome:"Rafael Câmara", funcao:"Piloto de Testes", idade:"21 anos", nacionalidade:"Brasileiro"},
        {img: "/images/frederic.jpg", nome:"Frédéric Vasseur", funcao:"Chefe de Equipe", idade:"58 anos", nacionalidade:"Francês"},  
    ]
    res.render("ferrari", {
        ferrari:ferrari
    })
})

export default rota;