const fs = require('fs').promises;

async function readFile(fileName){
    try{
        const content = await fs.readFile(fileName, 'utf-8');
        console.log(content);
    } catch (error){
        throw new error(`Error reading file: ${fileName}`)
    }
}

readFile('file.txt');

