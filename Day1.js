// Problem of Day1:- File Reader

// Problem Statement:-
// Create a function `readFileContent(filePath)` that takes the path to a file as input and reads its content asynchronously using the `fs` module. The function should print the content to the console.

// Solution:-
  
const fs = require("fs");

function readFileContent(filePath) {
    fs.readFile(filePath,'utf-8',(err,data)=> {
        if(err) {
            console.log(err);
        }
        else {
            console.log("File Content : \n" +data);
        }
    });
}
readFileContent("text3.txt");
readFileContent("text2.txt");
readFileContent("text1.txt");
