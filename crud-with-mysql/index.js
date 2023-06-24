const express = require("express");
const mysql=require("mysql");
const bodyparser = require("body-parser");


const app=express();
app.use(bodyparser.json());

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud-mysql",
    multipleStatements:true
})

con.connect((err)=>{
    if(!err){
        console.log("Connection Estabilished Successfully!")
    }else{
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    }
});

// Creating GET router to fetch all results/learners
app.get("/results",(req, res)=>{
    con.query("SELECT * FROM result", (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err)
        }
    });
});


//Router to GET specific result/learner detail from the Mysql database
app.get("/results/:id", (req, res)=>{
    con.query("SELECT * FROM result WHERE id=?",[req.params.id],(err, row, fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    })
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}..`));