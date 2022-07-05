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