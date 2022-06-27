import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";

class Grupo_usuario extends Model {};

Grupo_usuario.init({
    grupo_usuario_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    grupo_usuario_nombre: { type: DataTypes.STRING },
    grupo_usuario_status: { type: DataTypes.STRING }
}, { sequelize, freezeTableName: true });

export default Grupo_usuario;