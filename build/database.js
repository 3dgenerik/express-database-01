"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = require("./config");
const client = new pg_1.Pool({
    host: config_1.POSTGRES_HOST,
    database: config_1.POSTGRES_DB,
    user: config_1.POSTGRES_USER,
    password: config_1.POSTGRES_PASSWORD
});
exports.default = client;
