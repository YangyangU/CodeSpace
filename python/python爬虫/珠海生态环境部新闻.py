import requests
import pandas as pd
import os
from bs4 import BeautifulSoup

headers ={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 Edg/117.0.2045.60'}

for i in range(1,21):
    items=[]
    if i==1:
        url='http://ssthjj.zhuhai.gov.cn/hbxw/index.html'
    else:
        url =f'http://ssthjj.zhuhai.gov.cn/hbxw/index_{i}.html'
    r = requests.get(url=url,headers=headers)
    text=r.text
    soup =BeautifulSoup(text,'html.parser')
    all_titles=soup.findAll("div",attrs={"class":"wendangListC"})
    for title in all_titles:
        all_links = title.findAll("a")
        for link in all_links:
            href=link.get('href')
            title1=link.string
            all_days = title.findAll("strong")
            for day in all_days:
                day1=day.string
                item = [title1, href, day1]
            items.append(item)
        df=pd.DataFrame(items,columns=['标题','网址','日期'])
        if not os.path.exists('珠海生态环境部新闻.csv'):
            df.to_csv(r'珠海生态环境部新闻.csv', encoding='utf_8_sig', mode='a', sep=',', index=False)
        else:
            df.to_csv(r'珠海生态环境部新闻.csv', encoding='utf_8_sig', mode='a', header=False, sep=',', index=False)
