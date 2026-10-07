import express from "express"; //importação do express
import connection from "./config/sequelize-config.js";//importando o seuqlize
const app = express(); //Iniciando express

import mercedesController from "./controllers/MercedesController.js"; //importando a rota mercedes
import indexController from "./controllers/IndexController.js"; // importando a rota index
import redbullController from "./controllers/RedbullController.js"; // importando a rota red bull
import ferrariController from "./controllers/FerrariController.js"; // importando a rota ferrari
import maclarenController from "./controllers/MaclarenController.js"; // importando a rota maclaren

app.use(express.urlencoded({ extended: false }));// permite dados através de formulários
app.set("view engine", "ejs"); // ejs renderizando páginas 
app.use(express.static('public')); //usando pasta public

//conexão com o banco
connection.authenticate().then(()=> {
    console.log("Conexão com o banco de dados realizado!");
}).catch((error)=>{
    console.log(`Erro ao conectar com o banco. Erro: ${error}`);
});

//criando tabela
const db_name = "f1";
connection.query(`create database if not exists ${db_name}`).then(()=>{
    console.log("Banco criado com sucesso!");
}).catch((error)=>{
    console.log(`Erro ao criar banco. Erro: ${error}`);
});

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