# 后端数据逻辑

- 查询
    - 数据库.collection(name).get()
    - where 条件
    - count
        注册 name + password
        {total} = await where({name}).count()
        if (total >= 0) {return}
    - limit 数量
        第5页 .offset