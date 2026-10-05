//importando o express
import express from"express";
const rota = express.Router();

//Rota Mercedes
rota.get("/mercedes", (req,res) => {
    const mercedes = [
        {img: "/images/kimi.jpg", nome:"Kimi Antoneli", funcao:"Piloto", idade:"19 anos", nacionalidade:"Italiano"},
        {img: "/images/russel.jpg", nome:"George Russel", funcao:"Piloto", idade:"28 anos", nacionalidade:"Britânico"},
        {img: "/images/frederik.jpg", nome:"Frederik Vesti", funcao:"Piloto Reserva", idade:"24 anos", nacionalidade:"Dinamarquês"},
        {img: "/images/doriane.webp", nome:"Doriane Pin", funcao:"Piloto de testes", idade:"22 anos", nacionalidade:"Francesa"},
        {img: "/images/toto.jpg", nome:"Toto wolff", funcao:"Chefe de Equipe", idade:"54 anos", nacionalidade:"Austríaco"},
    ];

    res.render("mercedes", {
        mercedes : mercedes
    });
});

export default rota;