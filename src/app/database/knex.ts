import Knex from 'knex';

import { get } from '../../config';

const DATABASE_HOST = get('DATABASE_HOST');
const DATABASE_NAME = get('DATABASE_NAME');
const DATABASE_USERNAME = get('DATABASE_USERNAME');
const DATABASE_PASSWORD = get('DATABASE_PASSWORD');
const DATABASE_DIALECT = get('DATABASE_DIALECT');
const DATABASE_PORT = parseInt(get('DATABASE_PORT'));
const DATABASE_CONN_MAX = parseInt(get('DATABASE_CONN_MAX'));
const DATABASE_CONN_MIN = parseInt(get('DATABASE_CONN_MIN'));
const DATABASE_TIMEZONE = get('DATABASE_TIMEZONE');

export const knex = Knex({
  client: DATABASE_DIALECT,
  connection: {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    user: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    timezone: DATABASE_TIMEZONE,
  },
  debug: get('KNEX_DEBUG') == 'true',
  pool: { min: DATABASE_CONN_MIN, max: DATABASE_CONN_MAX },
});
