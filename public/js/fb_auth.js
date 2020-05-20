const signUp = document.querySelector('#signUpForm');
if (signUp != null) {

    // SIGN UP USER
    signUp.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = signUp['signup-email'].value;
        const password = signUp['signup-password'].value;
        console.log(email, password);

        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            console.log(cred);
            signUp.reset();
            window.location = 'main/main.html';
        });
    });
} 

else {
    // SIGN IN USER
    const login = document.querySelector('#signInForm');
    login.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = login['signin-email'].value;
        const password = login['signin-password'].value;

        auth.signInWithEmailAndPassword(email, password).then(cred => {
            console.log(cred);
            login.reset();
            window.location = 'main/main.html';
        });
    });
}