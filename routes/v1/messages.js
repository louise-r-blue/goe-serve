var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var fs = require('fs');
Promise.promisifyAll(fs);
// var Knex = require('knex');
// var knexConfig = require('../knexfile')

// var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

var message = require('../../models/messages')
var newWords = require('../../new-words')
var badWords = require('../../bad-words')

/* GET users messages. mme dont think so */

//back up
messages = {
  messages: [
  {
    "id": 1,
    "user_name": "Summer",
    "message": "I hear there is another ice age imminent"
  },
  {
    "id": 2,
    "user_name": "Winter",
    "message": "Ah maybe not. Those carbon emissions are heating things up quicker than I can cool them down. Glacial ice and polar caps melt deferring the next ice age for a few thousand years at least. Perhaps. Maybe"
  },
  {
    "id": 3,
    "user_name": "Summer",
    "message": "Yes yes. Global warming, climate change, melting ice. It is all just hot air."
  }
  ]
}
/* GET all old stored messages in database and render to browser */
router.get('/', function(req, res, next){
       console.log("data");
       message.all()
       .then(function(resp){
        console.log("msg :", resp)
        res.send(resp)
       })
})

router.post('/', function(req, res, next) {
  var newMessage = req.body
  console.log("newMessage :", newMessage)//prints newly message
  if (validate(newMessage) == false){
    res.status(400).send('String values required in all fields')
  }
});// add to database here
  // var user_name = ""
  // var messages = ""
  // newMessage.sender = user_name
  // newMessage.message = messages
  //message.insertMsg(user_name, messages)
//     .then(function(resp){
//       //console.log("new :", resp)
//      res.json({});
//     })


function validate(message) {
  for (var property in message) {
    if (typeof message[property] != 'string' || message[property] == '') {
      return false
    }
  }
  return true
}

module.exports = router;
