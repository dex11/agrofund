//global variables that I need and are static (wont change)
const forms = $(".landing");
const filterOptions = $(".dropdown");

//registration part
if (forms.length > 0) {
    forms[0].addEventListener("submit", signIn);
}

function register() {
    console.log("Wtf");
    window.location = "registration.html";
}

function signIn(e) {
    const inputs = $(".input_txt");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length == 0) e.preventDefault();
    }
}



//landing page part
for(let i = 0; i < filterOptions.length; i++){
    let option = filterOptions[i];
    let parentButton = option.closest("div").children[0];
    option.addEventListener("click", (e) =>{
        let v = e.target.innerHTML;
        parentButton.innerHTML = v;
    });
}