import express, { Request, Response } from 'express';
import { PORT } from './config';


const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req: Request, res: Response)=>{
    res.send({message: 'Hello world.'})
})

app.listen(PORT, ()=>{
    console.log(`...listening port ${PORT}`);
})