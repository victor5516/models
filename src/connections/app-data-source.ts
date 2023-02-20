import { DataSource } from "typeorm"



export  const connectToDB = async (dbConfig: any) => {


const myDataSource = new DataSource({
    type: dbConfig.type,
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    entities: [__dirname + "/../entity/*.entity.js"],
    logging: true,
    synchronize: true,
})
const connection = await myDataSource.initialize()
return connection
}

export const setupTestDB = async () => {
    const myDataSource = new DataSource({
        type: 'better-sqlite3',
        database: ':memory:',
        entities: [__dirname + "/../entity/*.entity.js"],
        synchronize: true
    })
    const connection = await myDataSource.initialize()
    return connection
}

