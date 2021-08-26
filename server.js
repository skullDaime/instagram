const express = require('express');
const request = require('request');
const path = require('path');
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

const server = require('http').createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.set('views', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

const host = '192.168.0.112';
const port = "3000";

console.log("Servidor rodando em http://"+host+":"+port);

server.listen(port);

app.get('/',(req, res)=>{
    res.render('index.ejs');
});
app.get('/config',(req, res)=>{
    res.render('config.ejs');
});
app.get('/mensseger',(req, res)=>{
    res.render('mensseger.ejs');
});
app.get('/profile',(req, res)=>{
    res.render('profile.ejs');
});
app.get('/post',(req, res)=>{
    res.render('post.ejs');
});
app.get('/followers',(req, res)=>{
    res.render('follor.ejs');
});
app.get('/following',(req, res)=>{
    res.render('follwing.ejs');
});
app.get('/upload',(req, res)=>{
    res.render('upload.ejs');
});
app.get('/discover',(req, res)=>{
    res.render('discover.ejs');
});

