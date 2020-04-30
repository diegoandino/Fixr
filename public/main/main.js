// Input Form
document.getElementById('bugInputForm').addEventListener('submit', saveBug);

function saveBug(e) {
    var bugDesc = document.getElementById('bugDescInput').value;
    var bugPriority = document.getElementById('bugPriorityInput').value;
    var bugAssignedTo = document.getElementById('bugAssignedToInput').value;
    var bugTag = document.getElementById('bugTagInput').value;
    var bugFile = document.getElementById('fileInput').value;
    var bugId = chance.guid();
    var bugStatus = 'Open';
    var datePosted = getDate(new Date);

    var bug = {
        id: bugId,
        description: bugDesc,
        priority: bugPriority,
        assignedTo: bugAssignedTo,
        status: bugStatus,
        tag: bugTag,
        date: datePosted, 
        file: bugFile
    }

    //Check if Bug Description or Assigned Person tab is empty
    if (bug.description == "" && bug.assignedTo == "") {
        return false;
    }

    if (localStorage.getItem('bugs') == null) {
        //List of bugs to present
        var bugs = [];
        bugs.push(bug);
        localStorage.setItem('bugs', JSON.stringify(bugs));
    }

    else {
        var bugs = JSON.parse(localStorage.getItem('bugs'));
        bugs.push(bug);
        localStorage.setItem('bugs', JSON.stringify(bugs));
    }

    document.getElementById('bugInputForm').reset();
    getBugs();
    e.preventDefault();
}

function getBugs(canPost) {
    var bugs = JSON.parse(localStorage.getItem('bugs'));
    var bugList = document.getElementById('bugList');
    
    bugList.innerHTML = '';

    for (let i = 0; i < bugs.length; i++) {
        var id = bugs[i].id;
        var desc = bugs[i].description;
        var priority = bugs[i].priority;
        var assignedTo = bugs[i].assignedTo;
        var status = bugs[i].status;
        var tag = bugs[i].tag;
        var date = bugs[i].date;
        var file = bugs[i].file;

        bugList.innerHTML += '<div class="well">' + 
                              '<h6>Issue ID:' + id + '</h6>' +
                              '<p><span class="label label-info">' + status + '</span> <span class="label label-success">' + tag + '</span></p>' +
                               '<h3>' + desc + '</h3>' +
                               '<p><span class="glyphicon glyphicon-time"></span>' + " Date posted: " + date + '</p>' +
                               '<p><span class="glyphicon glyphicon-folder-open"></span>' + " File location: " + file + '</p>' +
                               '<p><span class="glyphicon glyphicon-exclamation-sign"></span>' + " Priority: " + priority + '</p>' +
                               '<p><span class="glyphicon glyphicon-user"></span>' + " Assigned To: " + assignedTo + '</p>' +
                               '<a href="#" onClick="setStatusClosed(\''+ id + '\')" class="btn btn-warning">Close</a> ' +
                               '<button type="button" href="#" onClick="deleteBug(\''+ id + '\')" class="btn btn-danger">Delete</button>' +
                               '</div>';
    }
}


// Close bug status
function setStatusClosed(id) {
    var bugs = JSON.parse(localStorage.getItem('bugs'));

    for (let i = 0; i < bugs.length; i++) {
        if (bugs[i].id == id)
            bugs[i].status = 'Closed';
    }

    localStorage.setItem('bugs', JSON.stringify(bugs));
    getBugs();
}


// Delete individual bugs
function deleteBug(id) {
    var bugs = JSON.parse(localStorage.getItem('bugs'));

    for (let i = 0; i < bugs.length; i++) {
        if (bugs[i].id == id)
            bugs.splice(i, 1);
    }

    localStorage.setItem('bugs', JSON.stringify(bugs));
    getBugs();
}


// Delete all bugs in list
function deleteAllBugs(id) {
    var bugs = JSON.parse(localStorage.getItem('bugs'));

    //Get container for resetting padding (in the works. . .)
    var container = document.getElementsByClassName("container").style;

    //special case if id is undefined
    if (bugs.id == null)
        bugs.splice(0);

    for (let i = 0; i < bugs.length; i++) {
        bugs[i] = bugs.splice(0, bugs.length);
    }

    localStorage.setItem('bugs', JSON.stringify(bugs));
    getBugs();
    container.position = "fixed";
}


// Returns date for bug posts
function getDate(date) {
    var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    return new Date().toLocaleTimeString('en-us', options);
}