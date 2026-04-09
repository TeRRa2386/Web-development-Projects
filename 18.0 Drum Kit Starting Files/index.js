var totalButtons = document.querySelectorAll("button").length;

function detector(letter) {

      switch (letter) {

        case 'w':
          var tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();
          break;

        
        case 'a':
          var tom1 = new Audio('sounds/tom-2.mp3');
          tom1.play();
          break;

        
        case 's':
          var tom1 = new Audio('sounds/tom-3.mp3');
          tom1.play();
          break;

        
        case 'd':
          var tom1 = new Audio('sounds/tom-4.mp3');
          tom1.play();
          break;

        
        case 'j':
          var tom1 = new Audio('sounds/snare.mp3');
          tom1.play();
          break;

        
        case 'k':
          var tom1 = new Audio('sounds/crash.mp3');
          tom1.play();
          break;

        
        case 'l':
          var tom1 = new Audio('sounds/kick-bass.mp3');
          tom1.play();
          break;
      
        default:
          break;
      }

    }


function makeSound(key){

  if (['a','s','d','w','j','k','l'].includes(key)){
    var activeButton = document.querySelector('.' + key);
    activeButton.classList.add('pressed');
    setTimeout(function(){
      activeButton.classList.remove('pressed')
    }, 100);
  }
  
}


for (var i = 0; i < totalButtons; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function(){
      detector(this.innerHTML);
      makeSound(this.innerHTML)
    }
    );
}

document.addEventListener('keydown', function(event){
  detector(event.key);
  makeSound(event.key);
}
);
