// DETECTING BUTTON PRESS

var drumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<drumButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonClicked = this.innerHTML;
        makeSound(buttonClicked);
        buttonAnimation(buttonClicked);
        console.log(buttonCicked+" Button clicked");
    }); 
}

//DETECTING KEY PRESS

// Earlier we were listening to the button for some event
// but key press shall be added over the entire document

document.addEventListener("keypress", (event) => {
    var keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
    console.log(keyPressed+" Button clicked");
})

function makeSound(eventParameter){
    switch(eventParameter){
        case "w": var audio = new Audio("sounds/tom-1.mp3");
        break;

        case "a": var audio = new Audio("sounds/tom-2.mp3");
        break;

        case "s": var audio = new Audio("sounds/tom-3.mp3");
        break;

        case "d": var audio = new Audio("sounds/tom-4.mp3");
        break;

        case "j": var audio = new Audio("sounds/snare.mp3");
        break;

        case "k": var audio = new Audio("sounds/kick-bass.mp3");
        break;

        case "l": var audio = new Audio("sounds/crash.mp3");
        break;
    }
    audio.play();
}

function buttonAnimation(buttonClick){
    var activeButton = document.querySelector("."+buttonClick);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 480)
}