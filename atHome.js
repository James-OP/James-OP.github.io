const fs = require("fs");

$('.go').on('click',function(){
    var file = "atHome.txt";
    
    var randLineNum = Math.floor(Math.random() * lines.length);
    fs.readFile(file, "utf-8", function(err, data){
        if(err){
            throw err;
        }
        var lines = data.split("\n");
        var line=lines[randLineNum];

        document.getElementById("firstIdea").innerHTML = line;
    })
    
})