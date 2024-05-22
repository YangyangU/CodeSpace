# 百度编程能力

- 文章
    AIGC
    热榜 -> 别人的文字 -> 找到主题
    费曼学习法 较别人学习是最好的自我学习
    再深入的主题 讲到尽可能小白能听懂


- openai 网络请求 怎么搞？
        openai 请求过程的图形化介绍
        postman请求制造工具
        模拟发送请求到openai
        openai.Completion.create()   代码层    运行所在？  本地调试 + 项目服务器
        运行    物理层
        LLM openai 的服务器集群
        协议 HTTPS  IP  Web的基础   openai   封装了 http   请求库  
        层次不一样  


        HTTP 状态码
        1XX   请求进行中
        2XX   成功
        3XX   跳转
        4XX   客户端错误
            401  UnAuthorized //未授权
        5XX   服务端错误

        HTTP 
            请求行  POST + url  短小
            头部    Key = val Authorization = api-key
            请求体
        
        model davince 请求者 400 Bad Request
        
