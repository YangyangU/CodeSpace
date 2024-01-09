//和数据库连接的相关操作

//js不能脸上数据库

// npm i mysql
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
    let _sql = `SELECT * FROM USERS WHERE USERNAME="${username}" AND PASSWORD="${password}";`
    return allService.query(_sql)
}

//校验
const userFind = (username) => {
    let _sql = `SELECT * FROM USERS WHERE USERNAME="${username}";`
    return allService.query(_sql)
}

//注册功能

// const userRegister = (username, password, nickname) => {
//     let _sql = `INSERT INTO USERS (USERNAME,PASSWORD,NICKNAME) VALUES ("${username}","${password}","${nickname}");`
//     return allService.query(_sql)
// }
const userRegister = (values) => { //values == [username, password, nickname]
    let _sql = `INSERT INTO USERS set USERNAME=?,PASSWORD=?,NICKNAME=?;`
    return allService.query(_sql,values)//传数据对应问号
}

//根据类型查找笔记列表
const findNoteListByType = (note_type) =>{
    let _sql = `select * from note where note_type="${note_type}";`
    return allService.query(_sql)
}
//根据id查找笔记详情
const findNoteDetailById = (id) =>{
    let _sql = `select * from note where id="${id}";`
    return allService.query(_sql)
}

//发布笔记
const notePublish = (values)=>{
    let _sql = `insert into note set note_content=?,title=?,head_img=?,note_type=?,nickname=?,userId=?,c_time=?,m_time=?;`
    return allService.query(_sql,values)
}

module.exports ={
    userLogin,
    userFind,
    userRegister,
    findNoteListByType,
    findNoteDetailById,
    notePublish
}