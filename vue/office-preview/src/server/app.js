const express = require('express')
const multer = require('multer')
const cors = require('cors')

const app = express()

app.use(cors)
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {

    console.log(storage, upload);
    
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const base64Data = req.file.buffer.toString('base64');

    res.send({ base64: base64Data });
});

app.listen(3000)