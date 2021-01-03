

//global variables that I need and are static (wont change)
const filterOptions = document.getElementsByClassName("dropdown");
const listingContainer = document.getElementById('listing');
let curPage = 0;
//landing page part
for(let i = 0; i < filterOptions.length; i++){
    let option = filterOptions[i];
    let parentButton = option.closest("div").children[0];
    option.addEventListener("click", (e) =>{
        let v = e.target.innerHTML;
        parentButton.innerHTML = v;
    });
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
    },
];

function initialRender(){
    let container = document.getElementById("listing");
    for(let i = curPage; i < 5; i++){
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
                    "</div>" +

                    "<div>" +
                        "<p> ვადები: " + lot.start + "  " + lot.finish  + "</p>" +
                        "<p> ქულა: " + lot.score  + "</p>" +
                        "<p> კოდი: " + lot.id  + "</p>" +
                    "</div>" +
                "</div>" +
                
                "<button class='listing_button' onclick='lotDetailed()' > დეტალები </button>"+
            "</div>";
    }
    document.getElementsByClassName("background")[0].style.height = "100%";
}

function lotDetailed(){
    console.log("WTF");
}