"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mythicalWeapons_1 = require("../mythicalWeapons");
const store = new mythicalWeapons_1.MythicalWorldsStore();
describe('testing database', () => {
    it('testing', () => __awaiter(void 0, void 0, void 0, function* () {
        const index = yield store.index();
        console.log('WEAPONS: ', index);
        // this checking that method actually exists
        expect(index).toBeDefined();
    }));
});
