import client from "../database";

export type Book = {
    title: string;
    author: string;
    totalPages: number;
    summary: string;
}

export class BooksStore{
    private booksTable: string = 'books';

    async index():Promise<Book[]>{
        try{
            const con = await client.connect()
            const sql = 'SELECT * FROM books';
            const result = await con.query(sql)
            con.release();
            return result.rows;
        }
        catch(err){
            throw new Error(`Cannot get books ${err}`)
        }
    }
    
    async find(id: number):Promise<Book[]>{
        try{
            const con = await client.connect()
            const sql = 'SELECT * FROM books WHERE id=($1)'
            const result = await con.query(sql, [id])
            con.release()
            return result.rows
            
        }catch(err){
            throw new Error(`Couldn't find books ${err}`)
        }
    }
    
    async create(book: Book):Promise<Book>{
        try{
            const con = await client.connect()
            const sql = 'INSERT INTO books (title, author, total_pages, summary) VALUES($1, $2, $3, $4) RETURNING *'
            const result = await con.query(sql, [book.title, book.author, book.totalPages, book.summary])
            con.release()
            return result.rows[0]
        }catch(err){
            throw new Error(`Couldn't create book ${err}`)
        }
    }

    async delete(id: number):Promise<Book>{
        try{
            const con = await client.connect()
            const sql = 'DELETE FROM books WHERE id = ($1) RETURNING *';
            const result = await con.query(sql, [id])
            con.release()
            return result.rows[0]
        }catch(err){
            throw new Error(`Couldn't delete book ${err}`)
        }
    }
}