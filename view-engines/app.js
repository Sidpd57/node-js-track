const express = require('express');
const morgan = require('morgan');
//express app
const app = express();

app.set('view engine', 'ejs')

// listen for request 
app.listen(3000);

// app.get('/',(req,res) => {
//      res.send();  //used for single line auto setup of header and status code

// });

// app.use((req,res,next) => {
//     console.log('new request made: ');
//     console.log('host: '+ req.hostname);
//     console.log('path: '+req.path);
//     console.log('method '+req.method);
//     next();
// });

app.use(morgan('dev'));

app.use((req,res,next) => {
    console.log('In the next middleware');
    next();
});

app.get('/',(req,res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: ',Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, obcaecati.'},
        {title: 'Yoshi finds eggs', snippet: ',Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, obcaecati.'},
        {title: 'Yoshi finds eggs', snippet: ',Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, obcaecati.'},
    ];
    // res.sendFile('./views/index.html', { root: __dirname});
    res.render('index', {title: 'Home', blogs});
});

app.get('/about',(req,res) => {
    // res.sendFile('./views/about.html', { root: __dirname});
    res.render('about' , {title: 'About'});
});

app.get('/blogs/create',(req,res) => {
    // res.sendFile('./views/about.html', { root: __dirname});
    res.render('create', {title: 'Create a new Blog'});
});

app.get('/about-us',(req,res) => {
    res.redirect('/about');
});

app.use((req,res) => {
    // res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: '404'});
});