var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var buttonColours = ["red", "blue", "green", "yellow"];

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  console.log($("#" + currentColour));
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
  console.log($("#" + currentColour));
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

$(document).on("keypress", function () {
  var condition = $("h1").hasClass("started");
  if (!condition) {
    nextSequence();
  } else {
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  console.log(userClickedPattern);
});
