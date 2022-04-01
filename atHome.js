

//$('.go').on('click',function(){
/*function randomLine(){
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
*/

function randomLine(){
    var lines1 = ["Do a cartwheel","Do a pushup", "Perform Shakespeare", "Reenact a movie scene", "Jump up and down"];
    var line1=lines1[Math.floor(Math.random() * lines1.length)];

    document.getElementById("firstIdea").innerHTML = "You can be the first to " + line1;
    console.log(line1);
    
    var lines2 = ["eating a spoon full of sugar", "calculating the area of the room", "balancing on one foot"];
    var line2 = lines2[Math.floor(Math.random() * lines2.length)];

    document.getElementById("secondIdea").innerHTML = "while " + line2;

    var lines3 = ["eating a spoon full of sugar", "calculating the area of the room", "balancing on one foot"];
    var line3 = lines3[Math.floor(Math.random() * lines3.length)];

    document.getElementById("thirdIdea").innerHTML = "and " + line3;
}