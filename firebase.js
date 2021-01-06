var firebaseConfig = {
    apiKey: "AIzaSyCIcSYNe5rqRj2cAF5gwz-vnuabON4l1Qw",
    authDomain: "agrofund-c6f2f.firebaseapp.com",
    projectId: "agrofund-c6f2f",
    storageBucket: "agrofund-c6f2f.appspot.com",
    messagingSenderId: "416361320904",
    appId: "1:416361320904:web:f5e1dd9f11d892717730fd"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();

function logIn(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
        if(email === "admin@gmail.com") window.location.href="adminPanel.html"
        else window.location.href="landingpage.html";
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
}

function register(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;
    if(password === repassword){
        auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
            window.location.href="index.html";
        })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        });  
    }else{
        alert("REENTERED PASSWORD IS INCORRECT");
    } 
}