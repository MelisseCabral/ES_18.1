$(function(){
    console.log('test')
    // Initialize Firebase.
    var config = {
        apiKey: "AIzaSyDyAO3KuqpMdJP5hLTe9ZbPaJCenqG2Sb8",
        authDomain: "posgradufc.firebaseapp.com",
        databaseURL: "https://posgradufc.firebaseio.com",
        projectId: "posgradufc",
        storageBucket: "posgradufc.appspot.com",
        messagingSenderId: "775660398938"
    };
    firebase.initializeApp(config);    

    // Control variables;
    var signedout = false;
    var logged = false;

    // Shared variables. 
    var email = null;
    var displayName = null;
    var photoURL = null;
    var uid = null;

    // Firestore variables and constants.
    var firestore = firebase.firestore();
    const dbUser = firestore.collection("users/");
    const dbPublications = firestore.collection("publications/");
    const dbProjects = firestore.collection("projects/");

    //Get Elements
    btnLogin = document.getElementById("login-btn"),
    btnSignUp = document.getElementById("signUp_btn"),
    btnLogout = document.getElementById("btn_logout");

    btnLogin.addEventListener('click', function() {

    //Get email and Pass
    const email = document.getElementById("login-txt").value,
        pass = document.getElementById("password-txt").value,
        auth = firebase.auth();
        console.log(email);
        console.log(pass);
        auth.signInWithEmailAndPassword(email, pass).then(function () {
            logged = true;
            checkAuth();
        }).catch(function (error) {
            console.log("Got an error", error);
        });

    });

    btnSignUp.addEventListener('click', function() {
    //Get Email and confirm password
    const email = document.getElementById("email-signup").value,
    pass = document.getElementById("password-signup").value,
    confirmPass = document.getElementById("confirm-password").value,
    auth = firebase.auth();

    if (pass == confirmPass) {
    const promise = auth.createUserWithEmailAndPassword(email, pass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
            snackbar('The email is invalid.');
        }
        if (errorCode == 'auth/weak-password') {
            snackbar('The password is too weak.');
        } else {
            snackbar(errorMessage);
        }
        console.log(error)
    });

    // [START sendemailverification]
    firebase.auth().currentUser.sendEmailVerification().then(function () {
        
        snackbar('Email de verificação enviado!');
    });
    // [END sendemailverification]
    } else {
    snackbar("Senhas não conferem");
    }
    });


    function logout_firebase(){
        
    }
    btnLogout.addEventListener('click', function() {
        firebase.auth().signOut().then(function () {
            logged = false;
            console.log('logout')
            checkAuth();
        }).catch(function (error) {
            console.log("Sign out error", error);
            snackbar(error);
        });
    });


  function checkAuth(){
    if (logged) {
        // User is signed in.
        // Reporting status.
        console.log("Signed in.");
        // Update the database.
        // Redirect to home.
        window.location.href = '/home.html';


    } else {
        // Redirect to login.
        window.location.href= "/index.html";

    
    }
    
  }
    function snackbar(string) {
        var snackbarContainer = document.querySelector('#demo-snackbar-example');
        var data = {
            message: string,
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
    };
})