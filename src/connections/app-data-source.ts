import { DataSource } from "typeorm"



export  const connectToDB = async (dbConfig: any) => {


const myDataSource = new DataSource({
    type: "postgres",
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

