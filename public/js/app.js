document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app);
});


function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    firebase.auth().signInWithPopup(provider).then(result => {
        const user = result.user;
        document.write(`Hello ${user.displayName}`);
        console.log(user);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
    
    firebase.listener = firebase.auth().onAuthStateChanged(user => {
      var user = firebase.auth().currentUser;
      
      if(user != null) {
        window.location = 'main/main.html'; //After successful login, user will be redirected to home.html
        user.providerData.forEach(function (profile) {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);

          // Get User Data
          document.getElementById('user-name').innerHTML = profile.displayName;
        });
      }
    });

    // Translates language to the user's device language
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