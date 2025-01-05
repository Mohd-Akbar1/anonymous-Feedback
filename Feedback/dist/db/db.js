"use strict";
// import { drizzle } from "drizzle-orm/node-postgres";
// import { Client } from "pg";
// import * as schema from "../model/model"
Object.defineProperty(exports, "__esModule", { value: true });
// export const client=new Client(process.env.DATABASE_URL)
// client.connect().then(()=>{
// }).catch((err:any)=>{
//  console.error("Error connecting DB : ",err)
// });
// const postgresdb = drizzle(client,{schema:{...schema}});
// export default postgresdb
require("dotenv/config");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const db = (0, node_postgres_1.drizzle)(process.env.DATABASE_URL);
exports.default = db;
//# sourceMappingURL=db.js.map