/*
function randomLine(){
    var lines1 = ["Do a cartwheel","Do a pushup", "Perform Shakespeare", "Reenact a movie scene", "Jump up and down"];
    var line1=lines1[Math.floor(Math.random() * lines1.length)];

    document.getElementById("firstIdea").innerHTML = line1;
    console.log(line1);
    
    var lines2 = ["eating a spoon full of sugar", "calculating the area of the room", "balancing on one foot"];
    var line2 = lines2[Math.floor(Math.random() * lines2.length)];

    document.getElementById("secondIdea").innerHTML = line2;

    var lines3 = ["eating a spoon full of sugar", "calculating the area of the room", "balancing on one foot"];
    var line3 = lines3[Math.floor(Math.random() * lines3.length)];

    document.getElementById("thirdIdea").innerHTML = line3;
}
*/

function surpriseMe(){
    var selection = document.getElementById('stateSelect');
    var max = selection.getElementsByTagName('option').length - 1;

    var num = Math.floor(Math.random() * (max)) + 1;

    selection.value = num;
}