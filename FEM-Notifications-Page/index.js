var markAll= document.getElementById("mark-all");
var cards = document.getElementsByClassName("not-cards");
var dots=document.getElementsByClassName("red-dot");
var notNum=document.getElementById("noty-num");


function readMark(){
    notNum.innerHTML="0";
    for(var i = 0 ;cards.length;i++){
    cards[i].classList.remove("unread");
    dots[i].style.display="none";
    }
} 

