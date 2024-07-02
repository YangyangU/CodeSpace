import { PageContainer } from '@/components';
import { Button, Input } from 'antd';
import image1 from '@/assets/images/404.png';

// export async function loader({ request }) {
//     console.log(request);
//     return 1;
// }

const View = () => {
  const footerList = [
    {
      name: '小米商城',
      link: 'https://www.baidu.com'
    },
    {
      name: 'MIUI',
      link: 'https://www.baidu.com'
    },
    {
      name: '云服务',
      link: 'https://www.baidu.com'
    },
    {
      name: '米家',
      link: 'https://www.baidu.com'
    },
    {
      name: '有品',
      link: 'https://www.baidu.com'
    },
    {
      name: '游戏',
      link: 'https://www.baidu.com'
    },
    {
      name: '金融',
      link: 'https://www.baidu.com'
    },
    {
      name: '路由器',
      link: 'https://www.baidu.com'
    }
  ];

  return (
    <PageContainer>
      <div className="w-full h-full">
        <div className="bg-[#202332] h-[40px] text-[#808080] flex justify-center">
          <div className="w-[1200px] flex justify-between items-center">nav</div>
        </div>
        <div className="bg-[#fff] flex justify-center h-[100px]">
          <div className="flex items-center justify-between w-[1200px]">
            <img className="w-[418.25px] h-[100px]" src={image1} alt="" />
            <div className="w-[440px]">
              <Input />
            </div>
          </div>
        </div>
        <div className="flex justify-center h-[348.98px]">
          <div className="flex items-center justify-center mx-[250px] mt-[20px] w-[1200px]">
            <img className="w-[600px] h-[328.98px]" src={image1} alt="" />
            <div className="w-[300px] h-[202px]">
              <div className="text-[32px] text-[#1482f0] mb-5 font-bold h-[40px]">OOPS!</div>
              <div className="text-[20px] text-[#1482f0] mb-2.5 h-[24px]">
                雷大大说这个页面你不能进……
              </div>
              <div className="mb-[30px] text-[13px] text-[#808080] h-[42px]">
                请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告
              </div>
              <Button type="primary">返回首页</Button>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] w-full h-[283px] flex justify-center">
          <div className="flex justify-center w-[1200px] py-[40px]">
            <div>
              <div></div>
              <div></div>
            </div>
            <div>right</div>
          </div>
        </div>
        <div className="bg-[#fff] h-[100px] flex justify-center flex-col items-center">
          <ul className="flex justify-center items-center">
            {footerList.map((item, index) => {
              return (
                <>
                  <li
                    key={item.name}
                    className="text-[#333] opacity-[0.6] text-[12px] px-[10px] h-[21px] flex items-center justify-center"
                  >
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.name}
                    </a>
                  </li>
                  {index < footerList.length - 1 && (
                    <li className="bg-[#333] w-[1px] h-[10px] opacity-[0.15]"></li>
                  )}
                </>
              );
            })}
          </ul>
          <div className="mt-[10px]">
            <h3 className="text-[12px] opacity-[0.3]">️© XIAOMI</h3>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

View.displayName = 'NotFindPage';
export { View as Component };
