const express = require("express");
const { ppid } = require("process");
const app = express();
const port = 3000;

// INDEX ROUTE
app.get("/budgets", (req, res)=>{

})

// NEW ROUTE
app.get("/budgets/new", (req, res)=>{

})

// CREATE ROUTE
app.post("/budgets", (req, res)=>{
    
})

// SHOW ROUTE
app.get("/budgets/:index", (req, res)=>{

})

app.listen(port);