const fs = require('fs');



// fs.writeFile('helloworld.txt', 'Hello World!',callBackWriteFile) ;

// function callBackWriteFile(err){
//     if (err) {
//         return console.log(err)
//     };
//      console.log('Hello World > helloworld.txt');
// }

fs.readFile('helloworld.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    checkNameInString("22222",data)
  });

  function checkNameInString(stringToCheck,data){
      console.log(data.includes(stringToCheck))
  }