import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";

class User extends Model {};

User.init({
    usuario_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    usuario_usuario: { type: DataTypes.STRING },
    usuario_cargo: { type: DataTypes.STRING },
    usuario_nombres: { type: DataTypes.STRING },
    usuario_apellido_p: { type: DataTypes.STRING },
    usuario_apellido_m: { type: DataTypes.STRING },
    usuario_fecha_nacimiento: { type: DataTypes.DATE },
    usuario_rfc: { type: DataTypes.STRING },
    usuario_curp: { type: DataTypes.STRING },
    usuario_correo: { type: DataTypes.STRING },
    usuario_password: { type: DataTypes.STRING },
    grupo_usuario_id: {
        type: DataTypes.TINYINT,
        references: {
            model: Grupo_usuario,
            key: 'grupo_usuario_id'
        }
    },
    usuario_status: { type: DataTypes.STRING }
}, { sequelize, freezeTableName: true });

export default User;