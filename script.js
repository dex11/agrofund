

//global variables that I need and are static (wont change)
const filterOptions = document.getElementsByClassName("dropdown");
const listingContainer = document.getElementById('listing');
let curPage = 0;
let filterD = "";
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

function initialRender(){
    data = [];
    curPage = 0;
    parseURL();
    if(curPage == 0){
        window.localStorage.setItem("prevList", null);
        window.localStorage.setItem("nextList", null);
    }
    let pageUrl = document.URL.split(".html")[0].split('/')[3];
    if(pageUrl === "landingpage" || pageUrl === "adminPanel") getData(window.localStorage.getItem("nextList"));
    if(pageUrl == "myLots") getMyLots();
}

function displayLots(){
    let prevButton = document.getElementById("prev_page_button");
    if(curPage*5 + 1 < 6) prevButton.disabled = true;
    let container = document.getElementById("listing");
    let begin = curPage * 5;
    for(let i = 0; i < data.length; i++){
        let lot = data[i];
        let logoPath = "";
        if(lot.product === "ხორბალი") logoPath = "./img/wheat.jpg";
        else logoPath = "./img/sunflower.jpg";
        container.innerHTML =  container.innerHTML + 
            "<div class='lot_container' >" +
                "<img class='lot_img'  src=' " + logoPath + " '/> " +

                "<div class='lot_desc' >" +
                    "<div>" +
                        "<p> კულტურა: " + lot.product  + "</p>" +
                        "<p> ჯიში: " + lot.veriety  + "</p>" +
                        "<p> რეგიონი: " + lot.region  + "</p>" +
                        "<p> ვადები: " + lot.start + "  " + lot.finish  + "</p>" +
                    "</div>" +

                    "<div>" +
                        "<p> ქულა: " + lot.score  + "</p>" +
                        "<p> მიზანი: " + lot.goal  + "₾</p>" +
                        "<p> მოგროვებულია: " + lot.raised  + "₾</p>" +
                        "<p> კოდი: " + lot.id  + "</p>" +
                    "</div>" +
                "</div>" +
                
                "<button class='listing_button' id='button_"+ i + "' onclick='lotDetailed(event)' > დეტალები </button>"+
            "</div>";
    }
    curPage++;
    // if(data.length == 0){
    //     alert("ლოტების რაოდენობა ამოიწურა");
    //     nextButton.disabled = true;
    // } 
}

function parseURL(){
    let atributesString = document.URL.split("?");
    if(atributesString.length != 1){
        let atributes = atributesString[1].split("&");
        curPage = atributes[0].split("=")[1];
        let segment = "";
        for(let i = 1; i < atributes.length; i++){
            segment = atributes[i];
            let keyValue = segment.split("=");
            console.log(keyValue[0] + " " + keyValue[1]);
        }
    }
}

function lotDetailed(e){
    let index = e.target.id.split('_')[1];
    let lot = data[index];
    let startUrl = "lotDetail.html";
    if(document.getElementsByClassName("filter_button").length == 2) startUrl = "adminLotDetail.html";
    window.location.href= startUrl + "?id=" + lot.id + "&serverId=" +lot.serverId +
    "&raised=" + lot.raised + "&goal=" + lot.goal + "&location="
    +lot.location + "&product=" + lot.product + "&veriety="
    +lot.veriety + "&region=" + lot.region + "&start="+
    lot.start + "&finish=" + lot.finish + "&score=" + lot.score 
    + "&status=" + lot.status;
}

function nextPage(){
    window.location.href = './landingpage.html?page=' + curPage + filterD;
}

function nextPageAdmin(){
    window.location.href = './adminPanel.html?page=' + curPage + filterD;
}

function prevPage(){
    curPage-=2;
    window.location.href = './landingpage.html?page=' + curPage + filterD;
}

function onFilter(){
    const inputs = document.getElementsByTagName("input");
    let filterOptions = document.getElementsByClassName("dropbtn");
    const startDateO = document.getElementById("startDateInpt").value;
    const endDateO = document.getElementById("endDateInpt").value;
    const score = document.getElementById("scoreInpt").value;
    const code = document.getElementById("codeInpt").value;
    let filterDet = isReady(inputs, filterOptions, startDateO, endDateO, score, code);
    if(filterDet.length == 0){
        alert("ფილტრაცია შეუძლებელია!");
        return;
    }else{
        window.location.href = './landingpage.html?page=' + (curPage - 1) + filterDet;
    }
}

function isReady(inputs, filterOptions, startDateO, endDateO, score, code){
    let filterDetail = "";
    let anythingelse = false;
    if(startDateO.length > 0){
        filterDetail+="&startDate=" + startDateO;
        anythingelse= true;
    }
    if(endDateO.length > 0){
        filterDetail+="&endDate=" + endDateO;
        anythingelse= true;
    }
    const blackList = ["კულტურა", "ჯიში", "რეგიონი",'სტატუსი'];
    for(let i = 0; i < filterOptions.length; i++){
        if(!blackList.includes(filterOptions[i].innerHTML)){
            filterDetail+="&inp" + i + "=" + filterOptions[i].innerHTML;
            anythingelse= true;
        }
    }
    const startDate = Date.parse(startDateO);
    const endDate = Date.parse(endDateO);
    if(startDate > endDate){
        return "";
    }
    if(parseInt(score) >= 0){
        filterDetail+= "&score=" + score;
        anythingelse= true;
    } 
    if(parseInt(code) >= 0){
        filterDetail = "&code=" + code;
        if(anythingelse){
            alert("კოდი არის უნიკალური, შესაბამისად სხვა ფილტრაციის ვარიანტები უგულებელყოფილი იქნება");
        }
    }
    return filterDetail;
}

function moveToNewLot(){
    window.location.href="./newLot.html"
}

function moveToMyLots(e){
    window.location.href="./myLots.html";
}

function onFilterClicked(e){
    let elem = document.getElementsByClassName("header")[0];
    if(e.target.innerHTML === "დახურვა"){
        elem.style.display="none";
        e.target.innerHTML = "გასაფილტრად დააჭირეთ აქ";
    }else{
        elem.style.display="flex";
        elem.style.flexDirection = "column";
        e.target.innerHTML = "დახურვა"
    }
}