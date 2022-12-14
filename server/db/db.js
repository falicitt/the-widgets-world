const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  addWidget,
  deleteWidget,
  updateWidget
}

function getWidgets(db = connection) {
  return db('widgets').select()
}

function addWidget(newWidget, db = connection){
  return db('widgets').insert(newWidget)
}

function deleteWidget(id, db = connection) {
  return db('widgets')
  .where('id', id)
  .delete()
}

function updateWidget(id, details, db = connection) {
  return db('widgets')
  .update(details)
  .where('id', id)
}
