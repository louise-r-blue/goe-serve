exports.up = function(knex, Promise) {

  console.log('create table my_messages')

  return knex.schema.createTableIfNotExists('my_messages', function(table) {
      table.increments('id')
      table.string('user_name')
      table.text('messages')
      table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('my_messages').then(function () {
    console.log('my_messages table was dropped')
  })
};
