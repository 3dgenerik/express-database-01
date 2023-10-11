import express, { Request, Response } from 'express';
import dotenv from 'dotenv';


const app = express();
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req: Request, res: Response)=>{
    res.send({message: 'Hello world.'})
})

app.listen(3000, ()=>{
    console.log(process.env.PORT);
    console.log('...listening port 3000');
})