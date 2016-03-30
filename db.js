module.exports = function (knex){
  return {
    getAll: function (table, callback){
      knex.raw('select * from ' + table).then(function (resp){
        callback(null, resp)
      })
    },
    findOne: function(table, params, callback){
      callback()
    },
    delete: function (table,params, callback) {
      callback()
    }
  }
}
