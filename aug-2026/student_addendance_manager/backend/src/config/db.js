import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.db", (err)=>{
    if(err){
        console.error("Database fail to connect", err.message)
    }
    console.log("connected to sqlite3 ")
})

export default db