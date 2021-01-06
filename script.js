

//global variables that I need and are static (wont change)
const filterOptions = document.getElementsByClassName("dropdown");
const listingContainer = document.getElementById('listing');
let curPage = 0;
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
    let curPageStr = document.URL.split('=');
    if(curPageStr.length == 1) curPage = 0;
    else curPage = parseInt(curPageStr[1]);
    console.log(curPage);
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
                
                "<button class='listing_button' onclick='lotDetailed()' > დეტალები </button>"+
            "</div>";
    }
    curPage++;
    if(curPage*5 >= data.length) nextButton.disabled = true;
}

function lotDetailed(newLot){
    console.log(newLot)
}

function nextPage(){
    window.location.href = './landingpage.html?page=' + curPage;
}

function prevPage(){
    curPage-=2;
    window.location.href = './landingpage.html?page=' + curPage;
}