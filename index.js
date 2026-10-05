import express from "express"; //importação do express
const app = express(); //Iniciando express

import mercedesController from "./controllers/MercedesController.js"; //importando a rota mercedes
import indexController from "./controllers/IndexController.js"; // importando a rota index
import redbullController from "./controllers/RedbullController.js"; // importando a rota red bull
import ferrariController from "./controllers/FerrariController.js"; // importando a rota ferrari
import maclarenController from "./controllers/MaclarenController.js"; // importando a rota maclaren

app.set("view engine", "ejs"); // ejs renderizando páginas 
app.use(express.static('public')); //usando pasta public

app.use("/", mercedesController); //chamando a rota mercedes
app.use("/", indexController); //chamando a rota index
app.use("/", redbullController);//chamando a rota red bull
app.use("/", ferrariController);// chamando a rota ferrari
app.use("/", maclarenController);// chamando a rota maclaren

app.listen(8080, erro=>{
    if(erro){
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})