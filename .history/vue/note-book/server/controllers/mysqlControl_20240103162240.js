//和数据库连接的相关操作

//js不能脸上数据库

// npm i mysql
const mysql = require('mysql');
const config = require('../config');

//创建线程池
const pool = mysql.createPool({
    host:config.database.HOST,
    user:config.database.USERNAME,
    password:config.database.PASSWORD,
    database:config.database.DATABASE,
    port:config.database.PORT
})

//连接mysql
const allService = {
    query:function(sql,values){
        //pool 连接
        return new Promise((resolve, reject) =>{
            pool.getConnection((err,getConnection)=>{

            })
        })
    }
}