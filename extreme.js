function randomLine(){
    
    var lines1 = ["Skydiving","White Water Rafting", "Surfing", "Mud Wrestling"];
    var line1=lines1[Math.floor(Math.random() * lines1.length)];

    document.getElementById("firstIdea").innerHTML = "Go to " + line1;
    console.log(line1);
    
    var lines2 = ["reciting miranda rights", "waving your arms", "do 10 pushups", "read a book"];
    var line2 = lines2[Math.floor(Math.random() * lines2.length)];

    document.getElementById("secondIdea").innerHTML = "and " + line2;

    var lines3 = ["eating a spoon full of sugar", "calculating the area of the room", "balancing on one foot"];
    var line3 = lines3[Math.floor(Math.random() * lines3.length)];

     document.getElementById("thirdIdea").innerHTML = "while " + line3;
  
    
}