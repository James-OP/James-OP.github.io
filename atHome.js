

//$('.go').on('click',function(){
function randomLine(){
    var file = "atHome.txt";
    const fs = require('fs');
    fs.readFile(file, "utf-8", function(err, data){
        if(err){
            throw err;
        }
        var lines = data.split("\n");
        var line=lines[Math.floor(Math.random() * lines.length)];

        document.getElementById("firstIdea").innerHTML = line;
        console.log(line);
    })
    
}