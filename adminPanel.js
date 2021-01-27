
const filterOptions = document.getElementsByClassName("dropdown");
const listingContainer = document.getElementById('listing');
//landing page part
if(filterOptions != null){
    for(let i = 0; i < filterOptions.length; i++){
        let option = filterOptions[i];
        let parentButton = option.closest("div").children[0];
        option.addEventListener("click", (e) =>{
            let v = e.target.innerHTML;
            parentButton.innerHTML = v;
        });
    }
}

function addNewLot(){
    const inputs = document.getElementsByTagName("input");
    let filterOptions = document.getElementsByClassName("dropbtn");
    const startDateO = document.getElementById("startDateInpt").value;
    const endDateO = document.getElementById("endDateInpt").value;
    const score = document.getElementById("scoreInpt").value;
    const goal = document.getElementById("goalInpt").value;
    if(!isReady(inputs, filterOptions, startDateO, endDateO, score, goal)) return;

    let newLot = {
        id: '',
        product: '',
        veriety: '',
        region: '',
        status: false,
        start: '',
        finish: '',
        score: '',
        goal: 0,
        raised: 0,
        location: "",
    }
    db.collection('lots').get().then(snap => {
        console.log(snap.size);
        newLot.id = snap.size;
        let option = filterOptions[0].innerHTML;
        newLot.product = option;
        option = filterOptions[1].innerHTML;
        newLot.veriety = option;
        option = filterOptions[2].innerHTML;
        newLot.region = option;
        newLot.start = startDateO;
        newLot.finish = endDateO;
        
        newLot.score = score;
        newLot.goal = goal;
        option = document.getElementById("googleMapsInpt").value;
        newLot.location = option;
        addNewLotInDatabase(newLot);
    });
}

function isReady(inputs, filterOptions, startDateO, endDateO, score, goal){
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value.length == 0 ){
            alert("შეავსეთ ყველა ველი!");
            return false;
        }
    }
    const blackList = ["კულტურა", "ჯიში", "რეგიონი"];
    for(let i = 0; i < filterOptions.length; i++){
        if(blackList.includes(filterOptions[i].innerHTML)){
            alert("შეავსეთ ყველა ველი!");
            return false;
        }
    }
    const startDate = Date.parse(startDateO);
    const endDate = Date.parse(endDateO);
    if(startDate > endDate){
        alert("შეავსეთ ყველა ველი!");
        return false;
    } 
    if(parseInt(score) <= 0 || parseInt(goal) <= 0){
        alert("შეავსეთ ყველა ველი!");
        return false;
    }
    return true;
}