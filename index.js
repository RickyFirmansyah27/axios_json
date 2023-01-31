import express from "express";
import UserRoute from './router/UserRoute.js'
import { createUser, data } from "./Controller/data.js";
import router from "./router/UserRoute.js";
import axios from "axios";

const app = express();



app.use(UserRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000!');
});
