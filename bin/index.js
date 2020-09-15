const {program} = require('commander');
const chalk = require('chalk');
const fs = require('fs');
const { scaffolder } = require('./scaffolder');

fs.writeFile('messag.txt', 'fgffgfggg', err => {
    if(err){
        throw new Error(err);
    }
    return 'done';
});

program
    .command('make:module <module>')
    .description('creates a modules')
    .action(
        module => scaffolder(module)
            .then(res => console.log(chalk.green(res)))
            .catch(err => console.log(chalk.red(err.message)))
            .finally(process.exit)
    );

program.parse(process.argv);

