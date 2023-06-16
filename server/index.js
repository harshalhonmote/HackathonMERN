import express from 'express';
import cors from 'cors';
import {route as empRoute} from './routes/emp.js'

const app = express();

app.use(cors({origin:'*'}))
app.use(express.json());


app.use("/emp", empRoute);



app.listen(process.env.port, () => {
    console.log("Server Started....")
});