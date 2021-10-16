var dataPath = require("../models/DB.json"); //import model(Database)
const fs = require("fs"); //include the File System module for CRUD
const account = dataPath;

class logic {
  info() {
    const jsonData = fs.readFileSync(dataPath);
    const data = JSON.parse(jsonData);
    let msg = {
      //message for respond
      StatusCode: 200,
      Data: data,
    };
    return msg;
  }

  findUser(email, password) {
    for (let i = 0; i < account.length; i++) {
      if (email == account[i].email && password == account[i].password) {
        return account[i].account;
      }
    }
    return null;
  }
}
module.exports = logic;
