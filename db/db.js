const knex = require("knex")
const knexfile = require ("./knexfile")

// TODO in prod don't acces knexfile.development directly
// but decide with env vars which config to use
const db = knex(knexfile.development);

module.exports = db;