/*
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/subfolder/first.txt', 'utf-8');
const second = readFileSync('./content/subfolder/second.txt', 'utf-8');

console.log(first, second);

writeFileSync("./content/subfolder/results.txt",
 `Here is the result: ${first}, ${second}`, {flag: 'a'});*/

 //Asynchronous 
 const {readFile, writeFile} = require('fs')

 readFile('./content/subfolder/first.txt', 'utf-8', (err, res)=>{
     if(err){
         console.log(err)
         return;
     }
     const first = res;
     readFile('./content/subfolder/second.txt', 'utf-8', (err, res)=>{
         if(err){
             console.log(err)
         }
         const second = res;
         writeFile('./content/subfolder/results.txt', `Result: ${first} and also ${second}`, (err, res)=>{
             if(err){
                 console.log(err);
                 return;
             }
             console.log(res)
         })
     })
 })