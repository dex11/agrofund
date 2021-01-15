

let curInvestment = 0;
let goal = 0;
let finished = false;
const investBtn = document.getElementById("investBtn");
var modal = document.getElementById("popUp");

function initializePage(){
    investBtn.disabled = finished;
    curInvestment = 4500;
    goal = 15000;
    document.getElementById("goalCash").innerHTML = "სამიზნე თანხა: " + goal;
    setCurCash();

}

function setCurCash(){
    document.getElementById("curCash").innerHTML = "მოგროვებული თანხა: " + curInvestment;
}

function invest(){
    modal.style.display = "block";
}

function closeInvestPopUp(){
    modal.style.display = "none";
}

function onCardNumberChange(e){
    let cardNum = e.target;
    if(!isFinite(cardNum.value[cardNum.value.length - 1]) || cardNum.value.length > 18){
        alert("შეიყვანე ვალიდური ანგარიშის ნომერი");
        cardNum.value = "";
    }else if(cardNum.value.length == 4 || cardNum.value.length== 9){
        cardNum.value+=" ";
    }
}

function onCardExpChange(e){
    let cardExp = e.target;
    if(!isFinite(cardExp.value[cardExp.value.length - 1]) || cardExp.value.length > 5){
        alert("შეიყვანე ვალიდური ანგარიშის ნომერი");
        cardExp.value = "";
    }else if(cardExp.value.length == 2){
        cardExp.value+="/";
    }
}