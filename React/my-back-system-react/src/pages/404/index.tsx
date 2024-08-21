import { Link } from 'react-router-dom';
import image404 from '@/assets/images/404.png';
import './index.css';

const View = () => {
    return (
        <div className="notfound-page">
            <img className="notfound-img" src={image404} alt="" />
            <div className="oops">OOPS!</div>
            <div className="out">页面走丢了......</div>
            <div className="right">
                请检查您输入的网址是否正确，请点击按钮返回主页
            </div>
            <Link to={'/'} className="linkto-home">
                返回主页
            </Link>
        </div>
    );
};

export default View;
