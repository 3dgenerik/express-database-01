"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = require("./config");
let client;
console.log('---------', config_1.ENV);
if (config_1.ENV === 'dev') {
    client = new pg_1.Pool({
        host: config_1.POSTGRES_HOST,
        database: config_1.POSTGRES_DB,
        user: config_1.POSTGRES_USER,
        password: config_1.POSTGRES_PASSWORD
    });
}
if (config_1.ENV === 'test') {
    client = new pg_1.Pool({
        host: config_1.POSTGRES_HOST,
        database: config_1.POSTGRES_DB_TEST,
        user: config_1.POSTGRES_USER,
        password: config_1.POSTGRES_PASSWORD
    });
}
exports.default = client;
