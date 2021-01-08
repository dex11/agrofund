

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