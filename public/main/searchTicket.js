function searchTicket() { 
    let input = document.getElementById('search-input').value;
    input = input.toLowerCase(); 
    let x = document.getElementsByClassName('well'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display = "none"; 
        } 

        $(document).on('keypress',function(e) {
            if(e.which === 13) {
                x[i].style.display = "list-item";  
                //x[i].scrollIntoView(false); 
            }
        });
    } 
} 