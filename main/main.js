document.getElementById('bugInputForm').addEventListener('submit', saveBug);

function saveBug(e) {
    var bugDesc = document.getElementById('bugDescInput').value;
    var bugPriority = document.getElementById('bugPriorityInput').value;
    var bugAssignedTo = document.getElementById('bugAssignedToInput').value;
    var bugId = chance.guid();
    var bugStatus = 'Open';

    var bug = {
        id: bugId,
        description: bugDesc,
        priority: bugPriority,
        assignedTo: bugAssignedTo,
        status: bugStatus
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

function getBugs() {
    var bugs = JSON.parse(localStorage.getItem('bugs'));
    var bugList = document.getElementById('bugList');

    bugList.innerHTML = '';

    for (let i = 0; i < bugs.length; i++) {
        var id = bugs[i].id;
        var desc = bugs[i].description;
        var priority = bugs[i].priority;
        var assignedTo = bugs[i].assignedTo;
        var status = bugs[i].status;

        bugList.innerHTML += '<div class="well">' + 
                              '<h6>Issue ID:' + id + '</h6>' +
                              '<p><span class="label label-info">' + status + '</span></p>' +
                               '<h3>' + desc + '</h3>' +
                               '<p><span class="glyphicon glyphicon-time"></span>' + priority + '</p>' +
                               '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo + '</p>' +
                               '<a href="#" onClick="setStatusClosed(\''+ id + '\')" class="btn btn-warning">Close</a>' +
                               '<a href="#" onClick="deleteBug(\''+ id + '\')" class="btn btn-danger">Delete</a>' +
                               '</div>';
    }
}


function setStatusClosed(id) {
    var bugs = JSON.parse(localStorage.getItem('bugs'));

    for (let i = 0; i < bugs.length; i++) {
        if (bugs[i].id == id)
            bugs[i].status = 'Closed';
    }

    localStorage.setItem('bugs', JSON.stringify(bugs));
    getBugs();
}


function deleteBug(id) {
    var bugs = JSON.parse(localStorage.getItem('bugs'));

    for (let i = 0; i < bugs.length; i++) {
        if (bugs[i].id == id)
            bugs.splice(i, 1);
    }

    localStorage.setItem('bugs', JSON.stringify(bugs));
    getBugs();
}