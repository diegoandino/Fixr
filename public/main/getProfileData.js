// Returns the user's profile info
function getProfileData() {
    // window.location = 'main/main.html'
    const googleUser = gapi.auth2.getAuthInstance().currentUser.get();
    var profile = googleUser.getBasicProfile();

    $("#hide-data-btn").css("display", "block");
    $(".data").css("display", "block");
    $("#profile-picture").attr('src', profile.getImageUrl());
    $("#username").text(profile.getName());

    console.log('ID: ' + profile.getId()); 
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}

function hideProfileData() {
    $(".data").css("display", "none");
    $("#hide-data-btn").css("display", "none");
}
