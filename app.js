const { read } = require('fs');
const { syncBuiltinESMExports } = require('module');
var Sequelize=require('sequelize');
const { Op, DataTypes } = Sequelize;
const DISABLE_SEQUELIZE_DEFAULTS = {
    timestamps: false,
    freezeTableName: true,
};

const sequelize=new Sequelize('Booker','sa','sa',{
    host:'localhost',
    port:1433,
    dialect:'mssql',
    trustServerCertificate:false
});

const Booked = sequelize.define('TestBook.Booked',  {
    Id:{type:DataTypes.INTEGER},
    Name:{type:DataTypes.STRING},
    Train:{type:DataTypes.STRING}
    
},DISABLE_SEQUELIZE_DEFAULTS);

async function Read(){
    await sequelize
        .query('select * from TestBook.Booked')
        .then(rows=>{
            for (let row of rows) {
                console.log(row);
            }
        });
}

Read();
console.log('val');


// var express=require('express');
// var app=express();
// //var sql=require('mssql');
// var Sequelize=require('sequelize');
// const { Json } = require('sequelize/types/utils');

// var sequelize=new Sequelize({
//     database:'Booker',
//     username:'sa',
//     password:'sa',
//     host:'locahost',
//     port:1433,
//     dialect:'mssql'
// });

// const Book = sequelize.define('TestBook.Booked', {
//     // 定義 Model 屬性
//     Name: {     // 欄位名稱
//       type: Sequelize.STRING,  //  資料型態
//       allowNull: false// 能不能為空，預設是 true
//     },
//     Train: {
//       type: Sequelize.STRING,
//       allowNull: false// 能不能為空，預設是 true
//     }
//   }, {
//     // Other model options go here
//   });

// function Addtional(){

// };

// app.get('/',function(req,res){
//     console.log("yo")
// });

// var server=app.listen(5050,function(){
//     sequelize.sync().then(()=>{
//         Book.findAll.then(Books=>{
//             console.log("All users:", JSON.stringify(Books));
//         });
//     });
    
//     // const result = sequelize.query(
//     //     `select Name,Train from TestBook.Booked`
//     // )
//     // var oresult=Json.stringify(result)

//     console.log('Server is running!');
// });

/*
//app.get('/',function(req,res){  
//     //connect to your database
//     new sql.Request().query(`select Name,Train from TestBook.Booked`,function(err,recordset){
//         if(err){
//             console.log("yes")
//             console.log(err)
//             return
//         }
//         res.send(recordset);
//     });

    
// });

// sql.connect('server=localhost;port=1433;database=Booker;User Id=sa;Password=sa;trustServerCertificate=true;',function(err){
//     if(err) console.log("yes");

// });*/
