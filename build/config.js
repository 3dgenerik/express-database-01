"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POSTGRES_PASSWORD = exports.POSTGRES_USER = exports.POSTGRES_DB_TEST = exports.POSTGRES_DB = exports.POSTGRES_HOST = exports.PORT = exports.ENV = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.ENV = process.env.ENV;
exports.PORT = process.env.PORT;
exports.POSTGRES_HOST = process.env.POSTGRES_HOST;
exports.POSTGRES_DB = process.env.POSTGRES_DB;
exports.POSTGRES_DB_TEST = process.env.POSTGRES_DB_TEST;
exports.POSTGRES_USER = process.env.POSTGRES_USER;
exports.POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
