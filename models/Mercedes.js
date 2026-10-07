import connection from "../config/sequelize-config.js";
import Sequelize  from "sequelize";

const Mercedes = connection.define('mercedes',{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    funcao:{
        type:Sequelize.STRING,
        alolowNull:false
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

Mercedes.sync({forse:false});

export default Mercedes;