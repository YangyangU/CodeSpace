# 函数模版

def get_response(prompt, temperature=1.0):
  # Completion模块
  # 生成内容 同步的
  # 调用openai库的Completion模块，创建一个新的
  # 字典 等价于{key:value}
  completions = openai.Completion.create(
    engine = COMPLETION_MODEL,
    prompt = prompt,
    # 最大使用额度
    max_tokens = 1024,
    # 生成语句数量为1
    n = 1,
    # null True
    stop = None,
    temperature = temperature
  )
  # JSON choices txt
  print(completions)
  message = completions.choices[0].text
  return message


- transformers和openai
    - transformers是 Hugging Face LLM社区 sdk
        底层细节管控，训练或微调模型 为法律/金融/体育训练一个转述模型开导
    - openai 生成能力 哪些模块？
            Completion
            prompt 设计 设计数据表 开发工作的一部分 重要部分
            解决问题的prompt 设计者
    aigc 让新手变架构师 基础+AIGC
    得到了情感分析等NLP任务的prompt 用法
- low code 低代码
    openai 不用怎么写wa用怎么写代码，openai帮写
- prompt


# 分词
    LLM 怎么交流？

# 标注过的数据
    学习和训练  机器学习    人工干预
    无人驾驶    开车上路    不需要人工干预  无监督
