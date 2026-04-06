var totalButtons = document.querySelectorAll("button").length;

for (var i = 0; i < totalButtons; i++) {
  document
    .querySelectorAll("button")
    [i].addEventListener("click", function handledClick() {
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    });
}
