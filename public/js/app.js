document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app);
});


function onSignIn() {
  window.location = 'main/main.html'
  var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  
  firebase.auth().useDeviceLanguage();
}


function googleHandler() {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(error.Message);
    });
}


// Signs the User out
function googleSignOut() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.location = '../index.html'; // Redirects to main FIXR page
  }).catch(function(error) {
    // An error happened.
  });
}