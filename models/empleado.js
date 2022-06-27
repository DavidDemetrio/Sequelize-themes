import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";

class Empleado extends Model{};

Empleado.init({
    empleado_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    empleado_numero: { type: DataTypes.STRING },
    usuario_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'usuario_id'
        }
    },
    departamento_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Departamento,
            key: 'departamento_id'
        }
    },
    empleado_fecha_alta: { type: DataTypes.DATE },
    empleado_fecha_baja: { type: DataTypes.DATE },
    empleado_status: { type: DataTypes.STRING }
}, { sequelize, freezeTableName: true });

export default Empleado;