import { DataSource } from "typeorm";
export declare const connectToDB: (dbConfig: any) => Promise<DataSource>;
