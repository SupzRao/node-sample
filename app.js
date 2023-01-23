const { response } = require('express');
var express=require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app=express();
app.set('view engine','ejs');

var fs=require('fs');
var readstream=fs.createReadStream(__dirname+'/readme.txt');
readstream.pipe(fs.createWriteStream(__dirname+'/write.txt'));



// blocks
// var fileread=fs.readFileSync(__dirname+'/readme.txt', 'utf8');
// console.log(fileread);

// unblocking
// var fileread=fs.readFile(__dirname+'/readme.txt', 'utf8',function(err,data){   
//     console.log(data);
//  });


console.log('hello world');

app.get('/',function(req,res){
    console.log(req.url);
    res.sendFile(__dirname+'/home.html');
});
// app.get('/home',function(req,res){
//     console.log(req.url);
//     res.sendFile(__dirname+'/home.html');
// });

app.get('/home',function(req,res){
    console.log(req.url);
    res.render('home',{name:'demo'});
});
app.post('/addcontact',urlencodedParser,function(req,res){
    console.log(req.body.name);
    res.send('welcome '+req.body.name);
});

app.get('/contact',function(req,res){
    var hobbies=['photography','driving','swimming'];
    console.log('Query is '+req.query.name);
    res.render('contact',{name:req.query.name, hobbies});
});

app.get('/contact/:id',function(req,res){
    console.log('id received is '+req.params.id);
    res.render('contact');
});

app.get('/abc',function(req,res){
    var hobbies=['acting','dancing','swimming'];
    console.log('Query is '+req.query.name);
    res.render('contact',{name:req.query.name, hobbies});
});

app.listen(3000);
