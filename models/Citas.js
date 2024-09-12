// 8 importamos la coleecion a la base de datos

import ConectarBD from "../config/db.js";

//9 importar Sequelize

import { DataTypes } from "sequelize";

const Citas = ConectarBD.define('citas', {

    n_medico:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    especialidad:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    fecha:
    {
        type: DataTypes.DATE,
    allowNull: false
    },

    duracion:
    {
        type: DataTypes.STRING,
        allowNull: false
    }

})

export default Citas;

