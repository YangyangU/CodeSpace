import { useEffect, useState } from 'react';
import Vditor from 'vditor';
import 'vditor/dist/index.css';

const View = () => {
    const [vd, setVd] = useState<Vditor>();
    useEffect(() => {
        const vditor = new Vditor('vditor', {
            after: () => {
                vditor.setValue(`    
## Hi there 👋

**My Skills:**

<a href="https://github.com/anuraghazra/convoychat">
  <img height=200 align="right" src="https://github-readme-stats.vercel.app/api/top-langs?username=YangyangU&layout=compact&hide=html&langs_count=8&card_width=320" />
</a>

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=vue,react,ts,nodejs,pinia,webpack,vite,tailwind,less,mysql&perline=6" />
  </a>
</p>

**Currently Learning:**

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=py,nextjs,nuxtjs,astro,docker&perline=6" />
  </a>
</p>

**Contact Me:**

<p>
  <a href="https://space.bilibili.com/1769275177"><img alt="Static Badge" src="https://img.shields.io/badge/bilibili-ColourCode?style=flat-square&logo=bilibili&color=%23fb7299"></a>
  <a href="https://github.com/YangyangU"><img alt="Static Badge" src="https://img.shields.io/badge/GitHub-ColourCode?style=flat-square&logo=GitHub&color=%23555555"></a>
</p>

**Activity：**

![Ashutosh's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=YangyangU&theme=react-dark)

`);
                setVd(vditor);
            },
        });
        return () => {
            vd?.destroy();
            setVd(undefined);
        };
    }, []);
    return (
        <div style={{ marginTop: '20px' }}>
            <div id="vditor" className="vditor" />
        </div>
    );
};

export default View;
