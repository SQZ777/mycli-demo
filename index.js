#!/usr/bin/env node

var program = require('commander');
fs = require('fs');

program
  .version('0.1.0')
  .option('-s, --spicy', '要辣辣的, Add spicy')
  .option('-P, --no-parsley', '不要香菜, Remove parsley')
  .option('-t, --teatype [teatype]', '給我一杯 [紅茶]', '紅茶')
  .parse(process.argv);

console.log('you ordered:');
createFolder('ordered');
if (program.spicy) {
  createFile('要辣辣.txt', '真的要辣辣')
  console.log('要辣辣');
} else {

  createFile('不要辣辣.txt', '真的不要辣辣')
  console.log('不要辣辣');
}

if (program.parsley) {

  createFile('要香菜.txt', '真的要香菜')
  console.log('我要香菜');
} else {
  createFile('不要香菜.txt', '真的要不香菜')
  console.log('我不要香菜');
}
giveMeDrink = '給我一杯 ' + program.teatype;
createFile(giveMeDrink + ".txt", giveMeDrink)
console.log(giveMeDrink);

function createFolder(folderName) {
  fs.mkdir('./' + folderName, (err) => {
    if (err)
      console.log(err);
    else
      console.log('./' + folderName + ' has generated');
  });
}

function createFile(fileName, fileContent) {
  fs.writeFile('./ordered/' + fileName, fileContent, (err) => {
    if (err)
      console.log(err);
    else
      console.log('file:%s', fileName + ' has generated');
  });
}