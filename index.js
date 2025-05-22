var h = document.querySelector("h1");
var a = document.querySelector("#in1");
var b= document.querySelector("#div2");
var bt= document.querySelector("#btn1")
var r= document.querySelector("#reset");
var c= document.getElementsByClassName("sec");
var rs= document.querySelector("#reset");
var s = new Audio("src/no_surprises_doorbell.mp3")

document.querySelector("#sec5").addEventListener("click", function(){
    a.value=5;
});
document.querySelector("#sec30").addEventListener("click", function(){
    a.value= 30;
});
document.querySelector("#min10").addEventListener("click", function(){
    a.value= 600;
});
document.querySelector("#min15").addEventListener("click", function(){
    a.value= 900;
});
bt.addEventListener("click", timer);
rs.addEventListener("click",reset);
var s = new Audio("src/no_surprises_doorbell.mp3")

function timer(){
    
    const countdown = setInterval(() => {
    if(a.value<=0){
        clearInterval(countdown);
        h.textContent= "times up!!"
        s.play();
    }else{
        let x = a.value;
        h.textContent= a.value
        a.value--
        start();
    }
    }, 1000);
    
    

}

function start(){
    a.classList.add("invi");
    bt.classList.add("invi");
    for (let i = 0; i < c.length; i++) {
        c[i].classList.add("invi");
    }
    r.classList.remove("invi");
    r.classList.add("btn")
    h.style.fontSize = "4em";
    

}
function reset(){
    h.textContent = "Timer";
    h.style.fontSize = ""; 
    
    
    a.classList.remove("invi");
    bt.classList.remove("invi");
    for (let i = 0; i < c.length; i++) {
        c[i].classList.remove("invi");
    }
    r.classList.add("invi");
    r.classList.remove("btn");
    a.value = "";
    s.pause();
}