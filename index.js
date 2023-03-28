const fs = require('fs');

const path = './imagens/';

function readFilesNames(folder, filter = '') {
    var arr = [];
    var files = fs.readdirSync(folder);

    files.forEach(file => {
        let fileStat = fs.statSync(folder + '/' + file).isDirectory();
        if (!fileStat) {
            if (filter) {
                if (file.endsWith(filter)) {
                    arr.push(file);
                }
            } else {
                arr.push(file);
            }
        }
    });

    //return arr;
    writeJsonFile('array-img', arr)
}

// escrever os dados em um arquivo local (json)
function writeJsonFile(fileName, fileData){
    fs.writeFile(`${fileName}.json`, JSON.stringify(fileData, null, 2), err => {
      if(err) throw new Error('Erro: '+ err)
  
      console.log(`${fileName} Dados salvos com sucesso!`)
    })
}

readFilesNames(path);
//console.log(readFilesNames('./'))