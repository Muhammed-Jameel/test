var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        switch(buttonInnerHTML){
            case"w":
            var tom1 = new Audio("sounds/tom1.mp3");
            tom1.play();
            break;

            case"a":
            var tom2 = new Audio("sounds/tom2.mp3");
            tom2.play();
            break;

            case"s":
            var tom3 = new Audio("sounds/tom3.mp3");
            tom3.play();
            break;

            case"d":
            var tom4 = new Audio("sounds/tom4.mp3");
            tom4.play();
            break;

            case"i":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

            case"k":
            var snore = new Audio("sounds/snore.mp3");
            snore.play();
            break;

            case"l":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;

            default:
        }
    });
}

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;

}