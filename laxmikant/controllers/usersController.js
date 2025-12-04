const users = require("../data/users.json");
exports.getUsers = (req, res)=>{
    res.json(users);
}