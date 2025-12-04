const express = require("express");

const index = require("./routes/index");
const about = require("./routes/about");
const users = require("./routes/users");

const app = express();
const port = 4000;

app.use("/", index);
app.use("/about", about);
app.use("/users", users);

app.listen(port, (req,res)=>{
    console.log(`app started on port no ${port}`);
});