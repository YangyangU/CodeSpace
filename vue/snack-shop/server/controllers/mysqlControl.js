const mysql = require('mysql2');
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
        return new Promise((resolve, reject) =>{
            pool.getConnection((err,connection)=>{
                if(err) {
                    reject(err);
                }else{
                    connection.query(sql,values,(err,rows)=>{
                        if(err){
                            reject(err);
                        }else{
                            resolve(rows);
                        }
                        connection.release()
                    })
                }
            })
        })
    }
}


//登录的功能
const userLogin = (username, password) => {
    let _sql = `SELECT * FROM USERS WHERE USERNAME="${username}" AND PASSWORD="${password}";`
    return allService.query(_sql)
}

//校验
const userFind = (username) => {
    let _sql = `SELECT * FROM USERS WHERE USERNAME="${username}";`
    return allService.query(_sql)
}

//注册功能
const userRegister = (values) => {
    let _sql = `INSERT INTO USERS set USERNAME=?,PASSWORD=?,NICKNAME=?;`
    return allService.query(_sql,values)
}

module.exports ={
    userLogin,
    userFind,
    userRegister,
}