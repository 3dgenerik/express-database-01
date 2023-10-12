import client from "../database";

export type Weapon = {
    id: number;
    name: string;
    type: string;
    weight: number;
}

//this is our representation of database
export class MythicalWorldsStore{
    async index(): Promise<Weapon[]>{
        try{
            const con = await client.connect()
            const sql = 'SELECT * FROM mythical_weapons;'
            const result = await con.query(sql)
            con.release()
            return result.rows;
        }catch(err){
            throw new Error(`Cannot get weapons ${err}`)
        }
    }
}