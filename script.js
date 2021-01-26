

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

//listing 
const data = [
    {
        id: '001',
        product: 'ხორბალი',
        veriety: 'ჯიშიანი',
        region: 'კახეთი',
        status: false,
        start: '01/01/2021',
        finish: '02/02/2021',
        score: '32',
        goal: 15000,
        raised: 4500,
        location: "https://www.google.com/maps/place/Sokhumi/@43.0182038,40.9354334,12z/data=!3m1!4b1!4m5!3m4!1s0x405f220f44f90b7d:0xe01a1045ea63bc8a!8m2!3d43.0015252!4d41.0234153",
    },
    {
        id: '002',
        product: 'მზესუმზირა',
        veriety: 'უჯიშო',
        region: 'ქართლი',
        status: true,
        start: '02/01/2021',
        finish: '02/03/2021',
        score: '52',
        goal: 15000,
        raised: 4500,
        location: "https://www.google.com/maps/place/Sokhumi/@43.0182038,40.9354334,12z/data=!3m1!4b1!4m5!3m4!1s0x405f220f44f90b7d:0xe01a1045ea63bc8a!8m2!3d43.0015252!4d41.0234153",
    },
    {
        id: '003',
        product: 'ხორბალი',
        veriety: 'ჯიშიანი',
        region: 'ქართლი',
        status: true,
        start: '05/01/2021',
        finish: '02/11/2021',
        score: '22',
        goal: 15000,
        raised: 4500,
        location: "https://www.google.com/maps/place/Sokhumi/@43.0182038,40.9354334,12z/data=!3m1!4b1!4m5!3m4!1s0x405f220f44f90b7d:0xe01a1045ea63bc8a!8m2!3d43.0015252!4d41.0234153",
    },
    {
        id: '004',
        product: 'ხორბალი',
        veriety: 'ჯიშიანი',
        region: 'ქართლი',
        status: true,
        start: '05/01/2021',
        finish: '02/10/2021',
        score: '12',
        goal: 15000,
        raised: 4500,
        location: "https://www.google.com/maps/place/Sokhumi/@43.0182038,40.9354334,12z/data=!3m1!4b1!4m5!3m4!1s0x405f220f44f90b7d:0xe01a1045ea63bc8a!8m2!3d43.0015252!4d41.0234153",
    },
    {
        id: '005',
        product: 'მზესუმზირა',
        veriety: 'ჯიშიანი',
        region: 'ქართლი',
        status: true,
        start: '05/01/2021',
        finish: '02/09/2021',
        score: '22',
        goal: 15000,
        raised: 4500,
        location: "https://www.google.com/maps/place/Sokhumi/@43.0182038,40.9354334,12z/data=!3m1!4b1!4m5!3m4!1s0x405f220f44f90b7d:0xe01a1045ea63bc8a!8m2!3d43.0015252!4d41.0234153",
    },
    {
        id: '006',
        product: 'ხორბალი',
        veriety: 'უჯიშო',
        region: 'ქართლი',
        status: true,
        start: '05/01/2021',
        finish: '02/08/2021',
        score: '32',
        goal: 15000,
        raised: 4500,
        location: "https://www.google.com/maps/place/Sokhumi/@43.0182038,40.9354334,12z/data=!3m1!4b1!4m5!3m4!1s0x405f220f44f90b7d:0xe01a1045ea63bc8a!8m2!3d43.0015252!4d41.0234153",
    },
    {
        id: '007',
        product: 'მზესუმზირა',
        veriety: 'ჯიშიანი',
        region: 'კახეთი',
        status: true,
        start: '05/01/2021',
        finish: '02/07/2021',
        score: '42',
        goal: 15000,
        raised: 4500,
        location: "https://www.google.com/maps/place/Sokhumi/@43.0182038,40.9354334,12z/data=!3m1!4b1!4m5!3m4!1s0x405f220f44f90b7d:0xe01a1045ea63bc8a!8m2!3d43.0015252!4d41.0234153",
    },
    {
        id: '008',
        product: 'ხორბალი',
        veriety: 'ჯიშიანი',
        region: 'ქართლი',
        status: true,
        start: '05/01/2021',
        finish: '02/06/2021',
        score: '27',
        goal: 15000,
        raised: 4500,
        location: "https://www.google.com/maps/place/Sokhumi/@43.0182038,40.9354334,12z/data=!3m1!4b1!4m5!3m4!1s0x405f220f44f90b7d:0xe01a1045ea63bc8a!8m2!3d43.0015252!4d41.0234153",
    },
    {
        id: '009',
        product: 'მზესუმზირა',
        veriety: 'უჯიშო',
        region: 'კახეთი',
        status: true,
        start: '05/01/2021',
        finish: '02/05/2021',
        score: '65',
        goal: 15000,
        raised: 4500,
        location: "https://www.google.com/maps/place/Sokhumi/@43.0182038,40.9354334,12z/data=!3m1!4b1!4m5!3m4!1s0x405f220f44f90b7d:0xe01a1045ea63bc8a!8m2!3d43.0015252!4d41.0234153",
    },
    {
        id: '010',
        product: 'ხორბალი',
        veriety: 'უჯიშო',
        region: 'ქართლი',
        status: true,
        start: '05/01/2021',
        finish: '02/04/2021',
        score: '05',
        goal: 15000,
        raised: 4500,
        location: "https://www.google.com/maps/place/Sokhumi/@43.0182038,40.9354334,12z/data=!3m1!4b1!4m5!3m4!1s0x405f220f44f90b7d:0xe01a1045ea63bc8a!8m2!3d43.0015252!4d41.0234153",
    },
];

function initialRender(){
    curPage = 0;
    parseURL();
    let nextButton = document.getElementById("next_page_button");
    let prevButton = document.getElementById("prev_page_button");
    if(curPage*5 + 1 < 6) prevButton.disabled = true;
    let container = document.getElementById("listing");
    let begin = curPage * 5;
    console.log(begin);
    for(let i = begin; i < begin + 5; i++){
        if(i >= data.length) break;
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
    if(curPage*5 >= data.length) nextButton.disabled = true;
}

function parseURL(){
    console.log( document.URL);
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
    window.location.href="lotDetail.html?obj=" + index;
}

function nextPage(){
    window.location.href = './landingpage.html?page=' + curPage + filterD;
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