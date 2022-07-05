var express=require('express');
var app=express();
var sql=require('mssql');
var Sequelize=require('sequelize');

var config ={
    user:'sa',
    password:'sa',
    server:'localhost\\SQLEXPRESS',   //這邊要注意一下!!
    database:'Booker'
}

function Addtional(){

}

app.get('/',function(req,res){  
    //connect to your database

    new sql.Request().query(`select Name,Train from TestBook.Booked`,function(err,recordset){
        if(err){
            console.log("yes")
            console.log(err)
            return
        }
        res.send(recordset);
    });

    
});

sql.connect('server=localhost;port=1433;database=Booker;User Id=sa;Password=sa;trustServerCertificate=true;',function(err){
    if(err) console.log("yes");

});
var server=app.listen(5050,function(){
    console.log('Server is running!');
});