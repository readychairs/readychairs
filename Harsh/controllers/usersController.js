const path = require('path');
const fs = require('fs');

exports.getUsers = (req, res, next) => {
  const filePath = path.join(__dirname, '..', 'data', 'users.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      const error = new Error('Failed to read users data');
      error.statusCode = 500;
      error.cause= err;     
      return next(err);
     } // Pass errors to global handler


     try{

    const users = JSON.parse(data);
    res.json(users);
     } catch(parseErr){
      const error = new Error('Failed to parse users data');
      error.statusCode = 500;
      error.cause= parseErr;     
      return next(error);
     }
  });
};