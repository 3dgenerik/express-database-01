import { MythicalWorldsStore } from "../mythicalWeapons"
import { BooksStore } from "../books"

const store  = new BooksStore()


describe('testing database', ()=>{
    it('testing', async ()=>{
        const index = await store.index()
        console.log('WEAPONS: ', index);
        expect(index).toBeDefined()
    })
})