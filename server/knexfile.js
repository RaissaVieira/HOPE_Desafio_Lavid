// Update with your config settings.

module.exports = {

  development: {
    client: 'postgres',
    connection: {
      host : '127.0.0.1',
      port: 5432,
      user : 'docker',
      password : 'docker',
      database : 'HOPE'
    },
    migrations: {
      directory: './src/database/migrations',
    },
    
    useNullAsDefault: true
  },

};
