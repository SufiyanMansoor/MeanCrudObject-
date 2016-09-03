/**
 * Created by Sufiyan on 9/3/2016.
 */
var express=require('express');
var bodyparser=require('body-parser');
var MongoClient=require('mongoose').MongoClient
var app=express();

app.use(bodyparser.urlencoded({extended:true}))

var db;
MongoClient.connect('mongodb://crudobject:shoot1256@ds147965.mlab.com:47965/goalprogressapp',function(err,database){
    if (err) return console.log(err)
    db = database
    app.listen(5000,function(){
        console.log("server is listening on 5000 port")

    })



})



app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
});
app.post('/quotes',function(req,res){
    db.collection('quotes').save(req.body, function(err, result)  {
        if (err) return console.log(err)

        console.log('saved to database')
    res.redirect('/')
})});





