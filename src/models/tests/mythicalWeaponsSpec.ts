import { MythicalWorldsStore } from "../mythicalWeapons"

const store  = new MythicalWorldsStore()


describe('testing database', ()=>{
    it('testing', async ()=>{
        const index = await store.index()
        console.log('WEAPONS: ', index);
        // this checking that method actually exists
        expect(index).toBeDefined()
    })
})