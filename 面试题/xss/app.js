const express = require('express')
const path = require('path')
const app = express()
const ejs = require('ejs');//模版

app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');


app.get('/', function (req, res) {
  res.render('index', {title:'express', xss: req.query.xss})
})


app.listen(3000, () => {
  console.log('listening on 3000');
})