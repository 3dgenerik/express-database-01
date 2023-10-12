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
exports.BooksStore = void 0;
const database_1 = __importDefault(require("../database"));
class BooksStore {
    constructor() {
        this.booksTable = 'books';
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const con = yield database_1.default.connect();
                const sql = 'SELECT * FROM books';
                const result = yield con.query(sql);
                con.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Cannot get books ${err}`);
            }
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const con = yield database_1.default.connect();
                const sql = 'SELECT * FROM books WHERE id=($1)';
                const result = yield con.query(sql, [id]);
                con.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Couldn't find books ${err}`);
            }
        });
    }
    create(book) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const con = yield database_1.default.connect();
                const sql = 'INSERT INTO books (title, author, total_pages, summary) VALUES($1, $2, $3, $4) RETURNING *';
                const result = yield con.query(sql, [book.title, book.author, book.totalPages, book.summary]);
                con.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Couldn't create book ${err}`);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const con = yield database_1.default.connect();
                const sql = 'DELETE FROM books WHERE id = ($1) RETURNING *';
                const result = yield con.query(sql, [id]);
                con.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Couldn't delete book ${err}`);
            }
        });
    }
}
exports.BooksStore = BooksStore;
