const fs = require('fs');
const path = require('path');

const BASE_COMPONENT_PATH = path.join('src', 'app', 'components');

fs.writeFile('messag.txt', 'fgffgfggg', err => {
    if(err){
        throw new Error(err);
    }
    return 'done';
});

async function scaffolder(module) {
    if(!module || module === null) {
        throw new Error('No module name passed.');
    }

    return true;

    const moduleFullPath = path.join(process.cwd(), BASE_COMPONENT_PATH, module);
    const isModuleExists = await checkIfModuleExists(moduleFullPath);

    if(isModuleExists) {
        throw new Error(`Cannot re-create module. ${capitalize(module)} module already exists.`)
    }

    await createDir(moduleFullPath);
    const moduleFiles = await createModuleFiles(module);

    return `\n${capitalize(module)} module created successfully at ${moduleFullPath}.\nAll files created successfully... \n${moduleFiles.join("\n")}\n`;
}


async function createModuleFiles(module) {
    const fileTypes = ['API', 'schema', 'interface', 'controller', 'service', 'repository'];
    const fileNames = [];

    await Promise.all([
        fileTypes.map(fileType => {
            const fileName = `${module}${capitalize(fileType)}.ts`;
            const filePath = path.join(process.cwd(), BASE_COMPONENT_PATH, module, fileName);
            fileNames.push(fileName);

            return createFile(filePath, 'testing o');
        })
    ]);

    return fileNames;
}

async function createModuleBarrelFile(module) {
    
}

async function createDir(dirPath) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, err => {
            err ? reject(err) : resolve(true);
        });
    });
}

async function createFile(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.appendFile(filePath, Buffer.from('hii'), 'utf8', err => {
            err ? reject(err) : resolve(true);
        });
    });
}

async function checkIfModuleExists(modulePath) {
    return new Promise((resolve, reject) => {
        fs.access(modulePath, fs.constants.F_OK, err => {
            resolve(err ? false : true);
        });
    });
}

function capitalize(word) {
    return word.split("")
        .map((char, index) => index === 0 ? char.toUpperCase() : char)
        .join("");
}

module.exports = {
    scaffolder
};