# 机器学习任务
transformers huggingface 的核心库
- pipeline 分发任务
    pipeline(task,model)
- 数组和hashTable|Dict
    - 相同点
        数据容器 线性
    - 不同点
        数组,  Dict(O(1)) 和栈 队列 链
        表 连续和不连续 内存空间
        非线性 树 圆
        查找线性容器里5？
    - transformers 支持哪些nlp 任务
        SUPPORTED_TASKS 常量
        items 值是一个Dict JS JSON
        for in   for 计数循环
        图解HTTP 协议 
        计算机组成原理
    - 读/写 操作系统  I/O 操作 Iuput 内存 Output 硬盘
        同步代码 I/O 远程=> 内存|硬盘 网络传输
        for()  ms 结束 多进程切换 轮循
        阻塞 
    - 人生苦短，我用python
        - request 网络请求
            request.get(url,stream = True).raw
            http 请求的方法 get 明文请求 a
            post 提交表单
            - PIL库