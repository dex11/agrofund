
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
var db = firebase.firestore();
var data = [];

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

function addNewLotInDatabase(newLot){
    db.collection("lots").add(newLot)
    .then(function() {
        alert("წარმატებით ჩამატდა ახალი ლოტი");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

function getData(){
    let first = null;
    let lastVisible = window.localStorage.getItem("nextList");
    if(lastVisible === "null"){
        first = db.collection("lots").orderBy("id").limit(4);
    }else{
        first = db.collection("lots")
                .orderBy("id")
                .startAfter(parseInt(lastVisible))
                .limit(4);
    }
    return first.get().then(function (documentSnapshots) {
    documentSnapshots.docs.map(snapShot =>{
        data.push(snapShot.data());
    });
    let lastVisibleDoc = documentSnapshots.docs[documentSnapshots.docs.length-1];
    if(lastVisibleDoc == null || documentSnapshots.docs.length < 4){
        let nextButton = document.getElementById("next_page_button");
        nextButton.disabled = true;
    }else{
        lastVisible = lastVisibleDoc.data().id;
        window.localStorage.setItem("nextList", lastVisible);
    }
    displayLots();
    });
}