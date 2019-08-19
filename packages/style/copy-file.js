/**
 * 拷贝文件
 */
const fs = require('fs');
const targetDir = './dist/';

function copyFile(target, fileName) {
    fs.copyFile(target, targetDir + fileName, err => {
        if (err) {
            throw err;
        }
        console.log(`${fileName}文件拷贝到目标件中...`);
    })
}

/**
 * 拷贝文件到dist文件夹中
 */
copyFile('./package.json', 'package.json');
copyFile('./README.md', 'README.md');