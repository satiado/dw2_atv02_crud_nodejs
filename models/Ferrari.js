import connection from "../config/sequelize-config.js";
import Sequelize  from "sequelize";

const Ferrari = connection.define('ferrari',{
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

Ferrari.sync({forse:false});

export default Ferrari;