import connection from "../config/sequelize-config.js";
import Sequelize  from "sequelize";

const Maclaren = connection.define('maclaren',{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    funcao:{
        type:Sequelize.STRING,
        allowNull:false
    },
    idade:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    nacionalidade:{
        type:Sequelize.STRING,
        allowNull:false
    },
});

Maclaren.sync({forse:false});

export default Maclaren;