exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('my_messages').del(),

    // Inserts seed entries
    knex('my_messages').insert({id: 1, user_name: 'Summer', messages:'I hear there is another ice age imminent'}),
    knex('my_messages').insert({id: 2, user_name: 'Winter', messages: 'Ah maybe not. Those carbon emissions are
      heating things up quicker than I can cool them down. Glacial ice and polar caps melt deferring the next ice
      age for a few thousand years at least. Perhaps. Maybe'}),
    knex('my_messages').insert({id: 3, user_name: 'Spring', messages: 'Yes yes. Global warming, climate change, melting
      ice. It is all just hot air.'}),
    knex('my_messages').insert({id: 4, user_name: 'Autumn', messages: 'Mme. The irony in you words spring. You have
      seen the signs read the messages. Islands slowly drown, sea levels rise. Coast lines crumble. Low lying lands
      are being decimated as we write. Unseasonal...'})
  );
};
