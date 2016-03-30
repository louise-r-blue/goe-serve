var Knex = require('knex');
var knexConfig = require('../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function all() {
  //return knex.select().table('my_messages')
  return knex.select('user_name', 'messages').from('my_messages')
}

function insertMsg(user_name, messages){
  return knex('my_messages').insert({user_name: 'user_name'}, {messages: 'messages'})
}

module.exports = {
  all: all,
  insertMsg: insertMsg
}
