// Update with your config settings.
require('dotenv').config();

const get = name => process.env[name];

const DATABASE_HOST = get('DATABASE_HOST');
const DATABASE_NAME = get('DATABASE_NAME');
const DATABASE_USERNAME = get('DATABASE_USERNAME');
const DATABASE_PASSWORD = get('DATABASE_PASSWORD');
const DATABASE_DIALECT = get('DATABASE_DIALECT');
const DATABASE_PORT = parseInt(get('DATABASE_PORT'));
const DATABASE_CONN_MAX = parseInt(get('DATABASE_CONN_MAX'));
const DATABASE_CONN_MIN = parseInt(get('DATABASE_CONN_MIN'));

const connectionProperties = {
  client: DATABASE_DIALECT,
  connection: {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    user: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
  },
  pool: {
    min: DATABASE_CONN_MIN,
    max: DATABASE_CONN_MAX,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/app/database/migrations',
  },
  seeds: {
    directory: './src/app/database/seeds',
  },
};

module.exports = {
  development: {
    ...connectionProperties,
  },

  staging: {
    ...connectionProperties,
  },

  production: {
    ...connectionProperties,
  },
};
