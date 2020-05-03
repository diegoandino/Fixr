function searchTicket() { 
    let input = document.getElementById('search-input').value;
    input = input.toLowerCase(); 
    let well = document.getElementsByClassName('well'); 
    let found = false; 
      
    for (i = 0; i < well.length; i++) {  
        if (!well[i].innerHTML.toLowerCase().includes(input)) { 
            well[i].style.display = "none"; 
        } 

        else {
            found = true; 
            well[i].style.display = "list-item";  

            if (found === true) {
                goToWell(); 
            }
        }

        // $(document).on('keypress',function(e) {
        //     if(e.which === 13) {
        //         well[i].style.display = "list-item";  
        //         well[i].scrollIntoView(false); 
        //     }
        // });
    } 
} 

function goToWell() {
    let well = document.getElementsByClassName('well'); 
    well.scrollIntoView(); 
}