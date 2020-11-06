const forms = $(".landing");
const dropDowns = $(".dropdown_option");

if (forms.length > 0) {
    forms[0].addEventListener("submit", signIn);
}

for (let i = 0; i < dropDowns.length; i++) {
    dropDowns[i].addEventListener("click", dropDownSelect);
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

function dropDownSelect(e) {
    let b = $(this).closest("button");
    b.innerText = "wdwdw";
    console.log(b.innerHTML);
    // e.target.closest("#dropbtn").innerHTML = e.target.innerHTML;
}