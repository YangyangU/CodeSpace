const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// 创建 Express 应用
const app = express();
const port = 3000;

// 设置存储配置
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'uploads/';
        // 确保目录存在
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath);
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// 设置接收音频文件的路由
app.post('/upload', upload.single('file'), (req, res) => {
    try {
        // 音频文件保存成功
        res.status(200).json({ message: '上传成功', filePath: req.file.path });
    } catch (error) {
        res.status(500).json({ message: '上传失败', error: error.message });
    }
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});