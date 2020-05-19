// SIGN UP USER
const signUp = document.querySelector('#signUpForm');
signUp.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const email = signUp['signup-email'].value; 
    const password = signUp['signup-password'].value;
    console.log(email, password); 

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        signUp.reset();
    });
});


// SIGN IN USER
const login = document.querySelector('#signInForm');
login.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const email = signUp['signin-email'].value; 
    const password = signUp['signin-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        login.reset();
    });
});
