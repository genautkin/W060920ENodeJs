const fs = require('fs');
const utils = require('./utils/utils');

console.log(utils.add(66,87))

// fs.writeFile('helloworld.txt', 'Hello World!',callBackWriteFile) ;

// function callBackWriteFile(err){
//     if (err) {
//         return console.log(err)
//     };
//      console.log('Hello World > helloworld.txt');
// }

// fs.readFile('helloworld.txt', 'utf8', function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
//     checkNameInString("22222",data)
//   });

//   function checkNameInString(stringToCheck,data){
//       console.log(data.includes(stringToCheck))
//   }