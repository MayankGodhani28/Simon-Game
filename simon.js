let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","purple"];

let started=false;
let level=0;
let highest=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    if(highest<level){
        highest=level;
    }
    h2.innerHTML=`<b>Highest Score= ${highest}</b><br>Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,1000); 
        }
    }else{
        h2.innerHTML=`Game Over!<br><b>Highest Score= ${highest}</b><br><b>Your Score is ${level}</b><br> Press any Key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    btnFlash(btn);
    
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){ 
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}