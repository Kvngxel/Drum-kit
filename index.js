var buttons = document.querySelectorAll(".drum");


for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
      var innerClick = this.innerHTML;
      input(innerClick)
      buttonQuery(innerClick)
  })
};

document.addEventListener("keypress", function(event){
  input(event.key)
  buttonQuery(event.key)
});

function input(charInputed){

    switch (charInputed) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3")
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3")
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3")
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3")
        tom4.play();
        break;
      case "j":
        var snare = new Audio("sounds/snare.mp3")
        snare.play();
        break;
      case "k":
        var kick = new Audio("sounds/crash.mp3")
        kick.play();
        break;
      case "l":
        var crash = new Audio("sounds/kick-bass.mp3")
        crash.play();
        break;
      default: console.log(this.innerHTML)
    }
  }

function buttonQuery(charAnimation){
  var selectedButton = document.querySelector("." + charAnimation)
  selectedButton.classList.add("pressed");

  setTimeout( function(){
    selectedButton.classList.remove("pressed")
  }, 100);
  
}
