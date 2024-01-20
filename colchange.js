var colorIndex = 0;
var colors = ["#294B29", "#E6A4B4"]; 
var colors2 = ['#DBE7C9', "#F5EEE6"]; 

function Magicchange() {
    const body = document.body;
    var leftSide = document.querySelector('.container .right_Side');
    var titlesec = document.querySelector('.titlesec');

    // Generate random RGB values for background color
    
    leftSide.style.backgroundColor = colors2[colorIndex];
    titlesec.style.color = 'black';


    body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    colorIndex = (colorIndex) % colors2.length;

   
   var element = document.getElementById("ChangeButton");
}