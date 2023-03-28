const fs = require('fs');

function readFilesNames(folder) {
    var arr = [];
    var files = fs.readdirSync(folder);

    files.forEach(file => {
        let fileStat = fs.statSync(folder + '/' + file).isDirectory();
        if (!fileStat) {
            arr.push(file);
        }
    });

    return arr;
}

console.log(readFilesNames('./'))
