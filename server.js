const express = require("express");
const { ppid } = require("process");
const app = express();
const port = 3000;
const budgets = require("./models/budget")

///////////////////////////
// Middleware
///////////////////////////
app.use(express.static("public"))


///////////////////////////
// Routes
///////////////////////////

// INDEX ROUTE
app.get("/budgets", (req, res)=>{
    res.render("index.ejs", {allBudgets: budgets})
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