import { DataSource } from "typeorm";
export declare const connectToDB: (dbConfig: any) => Promise<DataSource>;
export declare const setupTestDB: () => Promise<DataSource>;
