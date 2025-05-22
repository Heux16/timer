var h = document.querySelector("h1");
var min = document.querySelector("#in1");
var sec = document.querySelector("#in2");
var b= document.querySelector("#div2");
var bt= document.querySelector("#btn1")
var r= document.querySelector("#reset");
var c= document.getElementsByClassName("sec");
var rs= document.querySelector("#reset");
var s = new Audio("src/no_surprises_doorbell.mp3")
var timerInterval = null;

document.querySelector("#sec5").addEventListener("click", function(){
    min.value=0;
    sec.value=5;
});
document.querySelector("#sec30").addEventListener("click", function(){
    min.value=0;
    sec.value= 30;
});
document.querySelector("#min10").addEventListener("click", function(){
    min.value=10;
    sec.value= 0;
});
document.querySelector("#min15").addEventListener("click", function(){
    min.value=15;
    sec.value= 0;
});
bt.addEventListener("click", timer);
rs.addEventListener("click",reset);
var s = new Audio("src/no_surprises_doorbell.mp3");


function timer(){
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    var tim= parseInt(min.value*60) + parseInt(sec.value);
    timerInterval = setInterval(() => {
    if(tim<=0 ){
        clearInterval(timerInterval);
        timerInterval = null;
        h.textContent= "times up!!"
        s.play();
    }else{
        var x = tim;
        h.textContent= tim;
        tim--
        start();
    }
    }, 1000);
}

function start(){
    min.classList.add("invi");
    sec.classList.add("invi")
    bt.classList.add("invi");
    for (let i = 0; i < c.length; i++) {
        c[i].classList.add("invi");
    }
    r.classList.remove("invi");
    r.classList.add("btn")
    h.style.fontSize = "4em";
    

}
function reset(){
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    h.textContent = "Timer";
    h.style.fontSize = ""; 
    
    sec.classList.remove("invi")
    min.classList.remove("invi");
    bt.classList.remove("invi");
    for (let i = 0; i < c.length; i++) {
        c[i].classList.remove("invi");
    }
    r.classList.add("invi");
    r.classList.remove("btn");
    min.value = "";
    sec.value= "";
    tim=0;
    x=0;
    s.pause();
}