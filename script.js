const forms = $(".landing");
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