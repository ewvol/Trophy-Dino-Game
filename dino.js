var character = document.getElementById("character");
var block = document.getElementById("block");
var game = document.getElementById("game");
var gameOver = false
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate")
        setTimeout(function(){
            character.classList.remove("animate")
        }, 600)
} }

function setupGameReset(){
    if(gameOver){
        setTimeout(function(){ game.addEventListener("click", reset);
        ;}, 100)
    }
}

function reset(){
     block.style.display="block";
    block.style.animation="slide 1s infinite linear"

    gameOver= false;
    console.log("reset")
}

var checkDeath=setInterval(function(){
   var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
   var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
   if(blockLeft<40 && blockLeft>0 && characterTop>=120){
    block.style.animation = "none";
    block.style.display= "none"
    alert("You dide..")
    gameOver= true;
    setupGameReset()
   }
},10)




