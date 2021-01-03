//global variables that I need and are static (wont change)
const filterOptions = document.getElementsByClassName("dropdown");
const listingContainer = document.getElementById('listing');
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
        status: 'ახალი',
        start: '01/01/2021',
        finish: '02/02/2021',
        score: '32',
    },
    {
        id: '002',
        product: 'მზესუმზირა',
        veriety: 'უჯიშო',
        region: 'ქართლი',
        status: 'მალე სრულდება',
        start: '02/01/2021',
        finish: '02/02/2021',
        score: '52',
    },
    {
        id: '003',
        product: 'ხორბალი',
        veriety: 'ჯიშიანი',
        region: 'ქართლი',
        status: 'დასრულებული',
        start: '05/01/2021',
        finish: '02/02/2021',
        score: '22',
    }
];

function initialRender(){
    for(let i = 0; i < data.length; i++){
        let lot = data[i];
        
    }
}