const express = require('express');
const path    = require('path')


// Init App 
const app = express();

// Load View
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');



// Home Route
app.get('/', function(req,res){
   let articals = [
    {
        id:1,
        title:'Artical one',
        body:'this is articale one'
     },
     {
        id:2,
        title:'Artical 2',
        body:'this is articale 2'
     },
     {
        id:3,
        title:'Artical 3',
        body:'this is articale 3'
     }
];
    res.render('index',{
        title : 'Artical ',
        articales : articals  
    });
});

// Add Route
app.get('/articales/add', function(req,res){
    res.render('add',{
        title:'add Articales '
    });
});

// Start Server 
app.listen(3000,function(){
console.log('server started on port 3000 .....'); 
});
