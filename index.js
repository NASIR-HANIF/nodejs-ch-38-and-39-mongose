const express = require("express");
const server = new express();
const bodyparser = require("body-parser");
const database = require("./database/db");
const urlEncoder = bodyparser.urlencoded({ extended: false });
const jsonEncoder = bodyparser.json();
server.use(urlEncoder);
server.use(jsonEncoder);
server.listen(8080);

// routing code
//---------------------------------------------------
//  pppppppppppooooooooooossssssstttttt



// post user data
server.post("/users", (request, response) => {
  database.storeData(request, response);
});

//----------------------------------------------------
//ffffffffffffiiiiiiiiiiiiiiiiinnnnnnnnnnnndddddddddddddd

// get all user data use find() methood
/*
server.get("/users", (request, response) => {
  database.featchData(request, response);
});*/




// get one user data use findOne() methood
/*
server.get("/users", (request, response) => {
  database.findOne(request, response);
});*/





// get one user data use findByQuery methood

server.get("/users", (request, response) => {
  database.findByQuery(request, response);
});



// find by id access 1 data
server.get("/users/:id", (request, response) => {
  database.featchDataById(request, response);
});




//-----------------------------------------------------------
//   uuuuuuuuuuppppppppppdddddddaaaaaaaaaaattttttttttt


//find 1 data and  update data 1 id
/*
server.put("/users/:id", (request, response) => {
  database.updateDataBtId(request, response);
});*/



// 
server.put("/users/:id", (request, response) => {
  database.findByIdAndUpdate(request, response);
});
//-------------------------------------------------
// dddddddddddddeeeeeellllllllleeeeeeeeeettttttttttt


//delet request delet by id

// server.delete("/users/:id", (request, response) => {
//   database.deleteById(request, response);
// });



// find id and delete return delete object
/*
server.delete("/users/:id", (request, response) => {
  database.findByIdandDelete(request, response);
});*/




// findOneAndDelete 
server.delete("/users", (request, response) => {
  database.findOneAndDelete(request, response);
});





