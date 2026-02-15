
//Get reference to <select> element by getElementById
var selectElement = document.getElementById('options'); 
//Get reference to <div> element by getElementById
var inputContainer = document.getElementById('inputContainer'); 
//Get reference to input text element by querySelector
var textInput = document.querySelector('.textInput');

//Event handler for <select> element
selectElement.addEventListener('change', function() {
    
    if(selectElement.value === 'showElment') {
        //Show the input chkbox and label elements in div container
        inputContainer.style.display = 'block';
    } else {
        //Hide the input chkbox and label elements in div container
        inputContainer.style.display = 'none';
    }
});

//Event handler for text input element
textInput.addEventListener('keydown', function(event) {
    //Pop-up alert window when enter key is press
    if(event.key === 'Enter'){
        alert('The Enter key was pressed ');
    }
});


