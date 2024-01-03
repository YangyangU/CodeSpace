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
            pool.getConnection((err,connection)=>{
                if(err) {
                    reject(err);//失败捕捉
                }else{
                    //执行sql语句
                    connection.query(sql,values,(err,rows)=>{//跟上面query不一样
                        if(err){
                            reject(err);//执行sql语句出错
                        }else{
                            resolve(rows);//resolve出去给.then执行业务逻辑
                        }
                        connection.release()//释放连接  mysql你连上了就一直在
                    })
                }
            })
        })
    }
}


//登录的功能
const userLogin = (username, password) => {
    //定义sql语句
    let _sql = `SELECT * FROM USERS WHERE USERNAME = "${username}" AND PASSWORD = "${password}";`
    
}