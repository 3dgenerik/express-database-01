import express, { Request, Response } from 'express';
import { PORT } from './config';
import { BooksStore } from './models/books';
// import client from './database';
import { Book } from './models/books';


const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req: Request, res: Response)=>{
    res.send({message: 'Hello world.'})
})


app.listen(PORT, async ()=>{
    // try{
    //     await client.connect()
    //     console.log('Connected to database.');
    // }catch{
    //     console.log('Error connecting to the database.');
    // }
    // const b = new BooksStore()
    // const book1: Book = {
    //     title: "Tihi Don",
    //     author: "Cehov",
    //     totalPages: 560,
    //     summary: "Odlicna knjiga"
    // }
    // console.log(await b.create(book1))
    // console.log(await b.create(book1))
    // console.log(await b.create(book1))
    // // console.log(await b.index());
    // // console.log(await b.delete(1));

    console.log(`...listening port ${PORT}`);
})