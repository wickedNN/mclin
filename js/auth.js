// Initialize Firebase

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBePAO7eCOZMQ1DgWnvvK3HdOE0TEHlRo0",
    authDomain: "mclin-f7839.firebaseapp.com",
    databaseURL: "https://mclin-f7839.firebaseio.com",
    projectId: "mclin-f7839",
    storageBucket: "mclin-f7839.appspot.com",
    messagingSenderId: "759101522989"
};
const initFirebase = firebase.initializeApp(config);



//Constants
const txtEmail = document.getElementById('uName');
const txtPwd = document.getElementById('pwd');
const btnLoginjs = document.getElementById('btnLogin');

//  alert(document.getElementById(txtEmail));

/*
initFirebase.auth().signInWithEmailAndPassword("test@mClin.com", "ledulis")
    .then(function(firebaseUser) {
        // Success 
        alert("yee");
    })
    .catch(function(error) {
        alert(error.code);
    });
*/
btnLoginjs.addEventListener('click', function login(initFirebase) {


    console.log(initFirebase);
    initFirebase.auth().signInWithEmailAndPassword("test@mClin.com", "ledulis")
        .then(function(firebaseUser) {
            // Success 
            alert("yee2");
        })
        .catch(function(error) {
            alert(error.code);
        });




});
//   if (document.getElementById(btnLogin) == true) {
//        alert("button was clicked");
//    }

//Add Login
//    btnLogin.addEventListener('click', myFunction());
//    btnLogin.addEventListener('click', login());








function myFunction() {
    console.log("hahah");
}