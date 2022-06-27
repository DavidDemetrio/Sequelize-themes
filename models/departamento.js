import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";

class Departamento extends Model{};

Departamento.init({
    departamento_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    departamento_nombre: { type: DataTypes.STRING },
    area_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Area,
            key: 'area_id'
        }
    },
    departamento_status: { type: DataTypes.STRING }
},{ sequelize, freezeTableName: true });

export default Departamento;