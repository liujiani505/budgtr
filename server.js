const express = require("express");
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
    res.render("index.ejs", {allBudgets: budgets, title: "Index Page"})
})

// NEW ROUTE
app.get("/budgets/new", (req, res)=>{
    res.render("new.ejs", {title: "New Page"})
})

// CREATE ROUTE
app.post("/budgets", (req, res)=>{
    budgets.push(req.body)
    res.redirect("/budgets")
})

// SHOW ROUTE
app.get("/budgets/:index", (req, res)=>{
    res.render("show.ejs", {budget: budgets[req.params.index], title: "Show Page"})
})


app.listen(port);