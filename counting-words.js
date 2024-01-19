const fs = require('fs').promises;
const path = require('path');

function countingWords(fileName){
    return fs.readFile(fileName, 'utf-8')
    .then(data =>{
        const words = data.split(/\s+/).filter(Boolean);
        return words.length;
    })
    .catch(err =>{
        throw new Error(`Unable to read ${fileName}`);
    })
}

async function countingwordsInFiles(){
    const files = ['file.txt', 'file2.txt', 'file3.txt'];

    try{
        let totalWords = 0;

        for (const file of files){
            const words = await countingWords(file);
            console.log(`words in ${file}: ${words}`);
            totalWords += words;
        }

        console.log(`Total wordsin all files is: ${totalWords}`);
    } catch(err){
        console.log(err);
    }
}

countingwordsInFiles();