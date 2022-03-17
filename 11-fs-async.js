const {readFile, writeFile} = require("fs");

readFile("./Content/first.txt", "utf-8", (err, result)=>{
    if(err){
        console.log(err)
    }
    const first = result
    readFile("./Content/subfolder/test.txt", "utf-8", (err, result)=>{
        if(err){
            console.log(err)
        }
        const second = result
        writeFile("./Content/result-async.txt", `Here is the result:${first}, ${second}`,
    (error, result)=>{
        if(error){
            console.log(error)
        }
        console.log(result);
    })
    })
})