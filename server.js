const express = require("express");
const { ppid } = require("process");
const app = express();
const port = 3000;
const budgets = require("./models/budget")

///////////////////////////
// Middleware
///////////////////////////
app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))

///////////////////////////
// Routes
///////////////////////////

// INDEX ROUTE
app.get("/budgets", (req, res)=>{
    res.render("index.ejs", {allBudgets: budgets})
})

// NEW ROUTE
app.get("/budgets/new", (req, res)=>{
    res.render("new.ejs")
})

// CREATE ROUTE
app.post("/budgets", (req, res)=>{

})

// SHOW ROUTE
app.get("/budgets/:index", (req, res)=>{
    res.render("show.ejs", {budget: budgets[req.params.index]})
})



app.listen(port);