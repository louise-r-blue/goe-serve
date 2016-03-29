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
        res.json(cats);
      })
});

/* GET users messages. */
router.get('/', function(req, res, next) {
  var data = '/../../data/myMessages.json'
  var messages = JSON.parse( fs.readFileSync(__dirname + data, "utf8"))
  res.json(messages);
});

//this needs replacing???
router.post('/', function(req, res, next) {
  var newMessage = req.body
  console.log("newMessage :", newMessage)
  if (validate(newMessage) == false){
    res.status(400).send('String values required in all fields')
  }
  //newMessage["id"] = data.messages.messages.length + 1
  //messages.messages.push(newMessage)
  //res.json(messages);
  var data = '/../../data/myMessages.json'
  fsa.readFileAsync(__dirname + data, "utf8")//need a data dir and data.json
  .then(function(contents){
      //var data = '/../../data/myMessages.json'
      var idMessage = JSON.parse(contents)
      console.log("idMessage", idMessage)
      newMessage["id"] = data.messages["message"].length + 1
      console.log("message :", message)
      //.then(function(res){
        return fsa.writeFileAsync(__dirname + data, JSON.stringify(), 'utf8')
      })
  .catch(function(error){
    console.log(error)
  })
})

function validate(message) {
  for (var property in message) {
    if (typeof message[property] != 'string' || message[property] == '') {
      return false
    }
  }
  return true
}

module.exports = router;
