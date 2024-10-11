// app.js
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get('/sse', (req, res) => {
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  setInterval(() => {
    const message = `Current time is ${new Date().toLocaleTimeString()}`
    res.write(`data: ${message}\n\n`);
  }, 1000);
});

app.listen(3006, () => {
  console.log("Server listening on port http://localhost:3006");
});
