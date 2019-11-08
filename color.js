var colors = generateRandomColors(6);

/*[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]*/

function generateRandomColors(numberOfSquares){
    var array = [];
    for(var i=0; i<numberOfSquares; i++){
        array[i] = getRandomRGB();
    }
    return array;

    function getRandomRGB(){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" +r+ ", " +g+ ", " +b+ ")"
    }
}


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var newColorsBtn = document.getElementById("newColors");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");

})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(3)
    pickedColor = pickColor()
})


newColorsBtn.addEventListener("click", function(){
    colors = generateRandomColors(6);
    for(var i=0; i<squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
        //resets the message bar colors
    }
    h1.style.backgroundColor = "#232323";
    messageDisplay.textContent = "";
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
})

for(var i=0; i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor==pickedColor){
            messageDisplay.textContent = "Correct!";
            changecColors(clickedColor);
            h1.style.backgroundColor  = pickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";

        }
    });
}

function changecColors(color){
    //loop through squares to match given color
    for(var i=0; i<colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var colorPicked = colors[Math.floor(Math.random() * colors.length)];
   return colorPicked;
}