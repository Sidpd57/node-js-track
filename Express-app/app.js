const express = require('express');

//express

const app = express();

// listen for request 
app.listen(3000);

// app.get('/',(req,res) => {
//      res.send();  //used for single line auto setup of header and status code

// });


app.get('/',(req,res) => {
    res.sendFile('./views/index.html', { root: __dirname});
});

app.get('/about',(req,res) => {
    res.sendFile('./views/about.html', { root: __dirname});
});

app.get('/contact',(req,res) => {
    res.sendFile('./views/contact.html', { root: __dirname});
});

app.get('/about-us',(req,res) => {
    res.redirect('/about');
});

app.use((req,res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});