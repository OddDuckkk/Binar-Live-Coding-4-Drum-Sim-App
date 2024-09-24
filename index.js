let totalButton = document.querySelectorAll("button").length;

function popIn(button) {
    button.style.transitionDuration = '0.2s';
    button.style.transform = `scale(1.5)`;
    button.style.color = 'chartreuse';
   
    setTimeout(() => {
        button.style.transitionDuration = '0.07s';
        button.style.transform = `scale(1)`;
        button.style.color = '#DA0463';
    }, 200);
}
/* Button click event listener */
for(let i = 0; i < totalButton ; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        // alert("Hello fsw 2 dari button index " + i);
        popIn(this);
        
        switch(this.innerHTML){
        
        case "w": {
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        }
        case "a": {
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        }
        case "s": {
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        }
        case "d": {
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        }
        case "j": {
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        }
        case "k": {
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        }
        case "l": {
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        }

    }
    });
}

/* Key down event listener */
document.addEventListener("keydown", function (event){
    const button = document.getElementById(`${event.key}`)
    if (button) {
        popIn(button);
    }
    
    switch(event.key){
    
    case "w": {
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    }
    case "a": {
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    }
    case "s": {
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    }
    case "d": {
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    }
    case "j": {
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    }
    case "k": {
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    }
    case "l": {
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
    }
}
});
