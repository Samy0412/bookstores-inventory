// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host:'localhost',
      database: 'bookstores',
      user:     'postgres',
      password: '0412'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


};
