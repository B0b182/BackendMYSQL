// 4 llamar la base de datos
import { Sequelize } from "sequelize";
const ConectarBD = new Sequelize('citasbd','root','',{
    host: 'localhost',
    dialect: 'mysql'

})

export default ConectarBD;


