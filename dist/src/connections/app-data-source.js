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
exports.setupTestDB = exports.connectToDB = void 0;
const typeorm_1 = require("typeorm");
const connectToDB = (dbConfig) => __awaiter(void 0, void 0, void 0, function* () {
    const myDataSource = new typeorm_1.DataSource({
        type: dbConfig.type,
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.database,
        entities: [__dirname + "/../entity/*.entity.js"],
        logging: true,
        synchronize: true,
    });
    const connection = yield myDataSource.initialize();
    return connection;
});
exports.connectToDB = connectToDB;
const setupTestDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const myDataSource = new typeorm_1.DataSource({
        type: 'better-sqlite3',
        database: ':memory:',
        entities: [__dirname + "/../entity/*.entity.js"],
        synchronize: true
    });
    const connection = yield myDataSource.initialize();
    return connection;
});
exports.setupTestDB = setupTestDB;
