import express from "express";
import 'dotenv/config';
// Import database
import sequelize from "./config/db.js";

// Create the server using express
const app = express();

// Connect database
sequelize.authenticate()
    .then(() => console.log("Base de datos conectada"))
    .catch(error => console.log(error));

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server actived in port ${port}`) });