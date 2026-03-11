var character = document.getElementById("character");
var block = document.getElementById("block");
var game = document.getElementById("game");
var score= document.getElementById("score")
var gameOver = false
var counter = 0

var raiseScore = setInterval(function(){
    if(gameOver==false){
        counter = counter+1;
        score.innerHTML = counter;
    }
}, 100)


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
        counter=0;
    }
}

function reset(){
    block.style.display="block";
    block.style.animation="slide 1s infinite linear";
    gameOver= false;
}

var checkDeath=setInterval(function(){
   var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
   var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
   if(blockLeft<40 && blockLeft>0 && characterTop>=120){
    block.style.animation = "none";
    block.style.display= "none"
    gameOver= true;
    setupGameReset()

   }
},10)





