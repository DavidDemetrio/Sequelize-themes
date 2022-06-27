import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";

class Area extends Model {};

Area.init({
    area_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    area_nombre: { type: DataTypes.STRING },
    area_status: { type: DataTypes.STRING }    
}, { sequelize, freezeTableName: true });

export default Area;