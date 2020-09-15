# AFRICAN TRAVEL CLUB Backend API

this is the backend for the AFRICAN TRAVEL CLUB

### Prerequisites

```
you need to have nodejs and mysql installed on your machine.
```

## Built With

- [Nodejs](https://nodejs.org/) - The runtime platform
- [Typescript](https://www.typescriptlang.org/) - The language used
- [Expressjs](https://expressjs.com/) - Web framework
- [MySQL](https://www.mysql.com/) - Database
- [KNEX](http://knexjs.org/) - KNEX
- [OBJECTIONJS](https://vincit.github.io/objection.js/) - OBJECTIONJS

## Operations

Kindly cd into the base project root to run the commands below.

- node ./bin/ db:seed <seedFileName> - to run seed for a particular file - please check the [plans_seed.js] file to see how to create a seed file

```
e.g node ./bin/ db:seed plans_seed
```

- node ./bin/ make:module <moduleName> - to scaffold a module

```
e.g node ./bin make:module usersasd
```

### Checklist before you commit

- Ensure its only files you worked on you’re committing… if otherwise check them out
- Ensure you do not modify package-lock.json and package.json file, except you explicitly add a new dependency
- Ensure your commit message is friendly
