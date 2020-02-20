document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    console.log(app);
});


function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
        const user = result.user;
        document.write(`Hello ${user.displayName}`);
        console.log(user);
    })
    .catch(console.log);

    firebase.auth().onAuthStateChanged(user => {
        if(user) {
          window.location = 'main/main.html'; //After successful login, user will be redirected to home.html
        }
      });
}


function googleHandler() {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(error.Message);
    
    });

    firebase.auth().onAuthStateChanged(user => {
        if(user) {
          window.location = 'main/main.html'; //After successful login, user will be redirected to home.html
        }
      });
}