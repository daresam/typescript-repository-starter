// eslint-disable-next-line @typescript-eslint/no-var-requires
const { runSeed } = require('../runSeed');

const usersData = [
  {
    id: 1,
    uuid: '138272b5-0fac-4f40-a684-45d278e53d3c',
    first_name: 'Admin',
    last_name: 'Istrator',
    email: 'admin@admin.com',
    username: 'admin',
    active: 1,
    password: '$2a$10$0itrtJ6/nxAZZjYH23VqguQri3YcoApvfchZax.VqDMHTvg8CpTnS', // Default Password: password
  },
  {
    id: 2,
    uuid: '138272b5-0fac-4f40-a684-45d278e53d3g',
    first_name: 'Sisi',
    last_name: 'Seyi',
    email: 'sisi.seyi@admin.com',
    username: 'seyi',
    active: 1,
    password: '$2a$10$0itrtJ6/nxAZZjYH23VqguQri3YcoApvfchZax.VqDMHTvg8CpTnS', // Default Password: password
  },
];
exports.seed = runSeed('users', usersData);
