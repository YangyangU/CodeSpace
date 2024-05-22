const Router = require('@koa/router')
const router = new Router()
const {findNoteListByType,findNoteDetailById,notePublish} = require('../controllers/mysqlControl.js')
const {formateDate} = require('../config/utils.js')
const { verify } = require('../config/jwt.js')

router.post('/findNoteListByType',async ctx=>{
    const {note_type} = ctx.request.body
    // console.log(note_type);
    try {
        const result = await findNoteListByType(note_type)
        // console.log(result);
        ctx.body = {
            code:'8000',
            msg:'查询成功',
            data:result
        }
        //没找到返回空数组
        

    } catch (error) {
        ctx.body = {
            code:'8005',
            msg:'服务器异常',
            data:error
        }   
    }
})

router.post('/findNoteDetailById',async ctx=>{
    const {id} = ctx.request.body
    try {
        const result = await findNoteDetailById(id)
        // console.log(result);
        if(result.length) {
            ctx.body = {
                code:'8000',
                data:result[0],//返回这个对象有且只有一个
                msg:'查询成功',
            }
        }else{
            ctx.body = {
                code:'8004',
                data:{},
                msg:'查找失败'
            }
        }
    } catch (error) {
        ctx.body = {
            code:'8005',
            msg:'服务器异常',
            data:error
        }   
    }
})

router.post('/publish',async (ctx)=>{
    console.log(111);
    const {note_content,title,head_img,note_type,nickname,userId} =ctx.request.body
    const c_time = formateDate(new Date())
    const m_time = formateDate(new Date())
    try {
        const result = await notePublish([note_content,title,head_img,note_type,nickname,userId,c_time,m_time])
        if(result.affectedRows !==0){
            ctx.body = {
                code:'8000',
                data:'success',
                msg:'发布成功'
            }
        }else{
            ctx.body = {//逻辑错误
                code:'8004',
                data:'error',
                msg:'发布失败'
            }
        }
    } catch (error) {//程序错误
        ctx.body = {
            code:'8005',
            data:'error',
            msg:'服务器异常'
        }
    }
})

module.exports =  router