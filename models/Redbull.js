import connection from "../config/sequelize-config.js";
import Sequelize  from "sequelize";

const Redbull = connection.define('redbull',{
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

Redbull.sync({forse:false});

export default Redbull;