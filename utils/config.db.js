import postgres from "postgres"; 
import { database, host, password, port, username } from "./credentials.db.js";

export const sql = postgres(`postgres://${username}:${password}@${host}:${port}/${database}`,{
    username,            
    password,            
    host,           
    port,          
    database,            
}); 
