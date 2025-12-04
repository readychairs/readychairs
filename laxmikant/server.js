const express = require("express");

const index = require("./routes/index");
const about = require("./routes/about");
const users = require("./routes/users");
const errorHandler = require("./Middleware/errorHandler.js");

const app = express();
const port = 4000;

app.use("/", index);
app.use("/about", about);
app.use("/users", users);

// use of custom express error handler
app.get("/test", (req, res, next) => {
    throw new errorHandler(404, "This page does not exist!");
    next();
});
app.use((err, req, res, next)=>{
    let {statusCode=500, message="something went is wrong"} = err;
    res.status(statusCode).send(message);
    
});

app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found" });
    next();
});

app.listen(port, (req,res)=>{
    console.log(`app started on port no ${port}`);
});