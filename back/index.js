var express = require('express')
var multer = require('multer')
var fs = require('fs')
var date = new Date()
var app = express()
var cors = require('cors')

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.split('.')[0] + '_' + file.originalname.split('.')[1] + '_' + date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + '_' + req.headers['assignees'])
  }
})

var upload = multer({ storage: storage });

app.post('/upload', upload.array('file'), (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.send(fs.readdirSync('./uploads/'))
})

app.get('/files', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.send(fs.readdirSync('./uploads/'))
})

app.post('/delete', (req, res) => {
  fs.unlinkSync('./uploads/'+req.headers['file'], (err => console.log(err)))
  res.header('Access-Control-Allow-Origin', '*')
  res.send(fs.readdirSync('./uploads/'))
})

app.use(cors())

app.listen(3001, () => {
  console.log('Example app listening at 3001')
})