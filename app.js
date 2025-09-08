let gameseq=[];
let userseq=[];
let level = 0;
let btns=["one","two","three","four"];
let started=false;
let  h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");   
        started=true;
        levelup();

    }
 
});

function btnflash(btns){
    btns.classList.add("flash");
    setTimeout(function(){
        btns.classList.remove("flash");
    },250);


}




function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*btns.length);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}

function btnPress(){
    console.log(this);
    btnflash(this);
    usercolor= this.classList[1];
    userseq.push(usercolor);
    check(userseq.length-1);
}
let allbox=document.querySelectorAll(".box");
for(let box of allbox){
    box.addEventListener("click",btnPress);
    
    
}

function check(idx){
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup, 1000);
        }
        console.log("samevalue");
    }else{



        h2.innerHTML=`game over ! your score was <b>${level}</b><br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
        
    }


}
function reset(){
    userseq=[];
    level=0;
    gameseq=[];
    started=false;


}
