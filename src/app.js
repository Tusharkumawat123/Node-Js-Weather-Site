const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = 2000;

//Print static web site
const static_path = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const partial_path = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);

app.use(express.static(static_path));

//Routing
app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/about', (req,res) =>{
    res.render('about');
});

app.get('/weather', (req,res) =>{
    res.render('weather');
});

app.get('*', (req,res) =>{
    res.render('error',{
        error_msg:"Opps 404 Error Page is not found"
    });
});

app.listen(port, '127.0.0.5', ()=>{
    console.log(`start server ${port}`);
})