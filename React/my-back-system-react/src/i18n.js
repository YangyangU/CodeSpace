// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend) // 按需加载语言文件
    .use(LanguageDetector) // 自动检测浏览器语言
    .use(initReactI18next) // 绑定 React
    .init({
        fallbackLng: 'zh', // 默认中文（现有项目语言）
        debug: false, // 生产环境关闭调试
        interpolation: {
            escapeValue: false, // React 已处理转义
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // 语言文件路径
        },
        detection: {
            order: ['localStorage', 'navigator'], // 优先从 localStorage 读取语言
            caches: ['localStorage'], // 缓存到 localStorage
        },
    });

export default i18n;
