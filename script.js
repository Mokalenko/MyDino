const dino = document.getElementById("dino"),
      cactus = document.getElementById("cactus"),
      elHiScore = document.querySelector(".hiScore"),
      elScore = document.querySelector(".score");
let myScore = 0,
    hiScore = localStorage.getItem("hiScore");
    if (hiScore===undefined){
        hiScore = 0;
        localStorage.setItem("hiScore",0);
    }
    
elHiScore.textContent = hiScore; 

document.addEventListener('keydown', function(){
    jump();
});

function jump(){
     dino.classList.toggle("jump");
    // if(dino.classList != 'jump'){
    //     dino.classList.add('jump');
    // }
    setTimeout( function(){
        dino.classList.remove('jump');
    },300);
}

let isAlive = setInterval(() => {
   let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
   let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
   if (cactusLeft<50 && cactusLeft>0 && dinoTop >=168){
    alert("Game Over!!!");
    if (myScore > hiScore){
        localStorage.setItem("hiScore",myScore); 
        history = myScore; 
        elHiScore.textContent = hiScore; 
    }
        myScore = 0;
   } else{
    myScore +=1;
   }
   elScore.textContent = myScore; 
}, 10);