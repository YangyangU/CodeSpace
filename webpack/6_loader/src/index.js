//直接将css引入到js中
import './style/index.css';

//引入图片
// import imgUrl from './assets/1.jpg';

document.body.insertAdjacentHTML('beforeend', '<h1>hello webpack</h1>');

// document.body.insertAdjacentHTML('beforeend', `<img src="${imgUrl}" alt="">`);