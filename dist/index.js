"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntities = exports.connectToDB = void 0;
var app_data_source_1 = require("./src/connections/app-data-source");
Object.defineProperty(exports, "connectToDB", { enumerable: true, get: function () { return app_data_source_1.connectToDB; } });
var index_1 = require("./src/entity/index");
Object.defineProperty(exports, "getEntities", { enumerable: true, get: function () { return index_1.getEntities; } });
