(function() {




    //Constants
    const txtEmailConst = document.getElementById('uName');
    const txtPwdConst = document.getElementById('pwd');
    const btnLoginConst = document.getElementById('btnLogin');
    //document.getElementById('btnLogin').addEventListener('click', toggleSignIn, false);


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBePAO7eCOZMQ1DgWnvvK3HdOE0TEHlRo0",
        authDomain: "mclin-f7839.firebaseapp.com",
        databaseURL: "https://mclin-f7839.firebaseio.com",
        projectId: "mclin-f7839",
        storageBucket: "mclin-f7839.appspot.com",
        messagingSenderId: "759101522989"
    };
    firebase.initializeApp(config);


    var email = "test10@mclin.com"; //document.getElementById('email').value;
    var password = "ledulis"; //document.getElementById('password').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }

    var promise = firebase.auth().signInWithEmailAndPassword(email, password);
    promise.catch(function(error) {
            console.log(error.code);
            console.log(error.message);
        }

    );

    console.log(firebase.auth().currentUser);


    //  function toggleSignIn() {


    //};



})();