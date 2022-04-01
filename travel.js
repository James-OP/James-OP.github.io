
function randomLine(){
    var selection = document.getElementById('stateSelect');
    if(selection.value == "49"){
        var lines1 = ["House on the rock","Dr Evermore's Forevertron", "Devils Lake", "Lake Michigan", "Lake Superior", "the Mississippi River", "Lake Geneva", "Door County"];
        var line1=lines1[Math.floor(Math.random() * lines1.length)];

        document.getElementById("firstIdea").innerHTML = "Go to " + line1;
        console.log(line1);
    
        var lines2 = ["take a selfie", "leave Aidan behind", "do 10 pushups", "read a book"];
        var line2 = lines2[Math.floor(Math.random() * lines2.length)];

        document.getElementById("secondIdea").innerHTML = "and " + line2;

        var lines3 = ["eating a spoon full of sugar", "calculating the area of the room", "balancing on one foot"];
        var line3 = lines3[Math.floor(Math.random() * lines3.length)];

        document.getElementById("thirdIdea").innerHTML = "while " + line3;
    }
    
}


function surpriseMe(){
    var selection = document.getElementById('stateSelect');
    var max = selection.getElementsByTagName('option').length - 1;

    var num = Math.floor(Math.random() * (max)) + 1;

    selection.value = num;
}