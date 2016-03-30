var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var fsa = Promise.promisifyAll(require('fs'));
var fs = require('fs');

var messages = require('../../models/messages.js')

/* GET messages page */
router.get('/', function(req, res, next){
  messages.all()
      .then(function(messages){
        res.json(messages);
      })
});

/* GET users messages. mme dont think so */
router.get('/', function(req, res, next) {
  var data = '/../../data/myMessages.json'
  var messages = JSON.parse( fs.readFileSync(__dirname + data, "utf8"))
  res.json(messages);
});

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
//this needs replacing with data base code
router.post('/', function(req, res, next) {
  var newMessage = req.body
  console.log("newMessage :", newMessage)
  if (validate(newMessage) == false){
    res.status(400).send('String values required in all fields')
  }
  newMessage["id"] = messages.messages.length + 1
  messages.messages.push(newMessage)
  res.json(messages);
});

function validate(message) {
  for (var property in message) {
    if (typeof message[property] != 'string' || message[property] == '') {
      return false
    }
  }
  return true
}

module.exports = router;
