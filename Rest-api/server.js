const express = require("express");
const Joi = require("joi");
const app = express();

app.use(express.json());

const courses =[
    {id:1, name:"course1"},
    {id:2, name:"course2"},
    {id:3, name:"course3"},
];



app.get("/",(req, res)=>{
    res.send("Hello All");
});
app.get("/api/courses",(req, res)=>{
    res.send(courses);
});

app.get("/api/courses/:id", (req, res)=>{
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course) res.status(404).send("The Course with the Given id was not found!")
   res.send(course)
});

app.post("/api/courses",(req, res)=>{
    const schema ={
        name:Joi.string().min(3).required()
    };
    const result = Joi.valid(req.body, schema);
    console.log(result);
    
    // if(!req.body.name || req.body.length < 3){
    //     res.status(400).send("Name is required and should be greater than 3 characters");
    // }
    const course = {
        id:courses.length+1, 
        name:req.body.name,
    };

    courses.push(course);
    res.send(course);
});

const port=process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(`Server is Running Successfully!!! in PORT ${port}`);
});
