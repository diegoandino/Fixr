// Returns the user's profile info
function getProfileData() {
    // window.location = 'main/main.html'
    const googleUser = gapi.auth2.getAuthInstance().currentUser.get();
    var profile = googleUser.getBasicProfile();

    $("img").css("display", "none");
    $("#profile-picture").attr('src', profile.getImageUrl());
    $("img").css("display", "block");
    $("#username").text(profile.getName());

    console.log('ID: ' + profile.getId()); 
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}
