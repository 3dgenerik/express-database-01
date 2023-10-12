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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send({ message: 'Hello world.' });
});
app.listen(config_1.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
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
    console.log(`...listening port ${config_1.PORT}`);
}));
