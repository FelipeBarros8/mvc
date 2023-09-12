import express, {json} from 'express';
import index from './routes/index.js';


const app = express ();


app.use(json());
app.use("/", index);


export default app; 