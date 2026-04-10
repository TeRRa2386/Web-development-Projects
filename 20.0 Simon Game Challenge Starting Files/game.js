var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var position = 0;

var buttonColours = ["red", "blue", "green", "yellow"];

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
  level++;
  $('h1').text('Level ' + level)
}

function checkAnswer(userChosenColour) {
  if (userClickedPattern.length > 0 && position < userClickedPattern.length){
    if (userChosenColour === userClickedPattern[position]){
      position++;
      playSound(userChosenColour);
    } else {
      gameOver()
    }
  } else if (userChosenColour === gamePattern[gamePattern.length-1]){
    userClickedPattern.push(userChosenColour);
    position = 0;
    playSound(userChosenColour);
    setTimeout(function(){
      nextSequence();
    }, 600);
  } else {
    gameOver()
  }
}

function gameOver() {
  $('h1').text('Game Over, Press Any Key to Restart');
  $('body').addClass('game-over');
  playSound('wrong');
  position = 0;
  userClickedPattern = [];
  gamePattern = []
  level = 0;
  $("h1").removeClass("started")
  setTimeout(function(){
    $('body').removeClass('game-over')
  }, 200)
}

$(document).on("keypress", function () {
  if (! $("h1").hasClass("started")) {
    $('h1').addClass('started')
    nextSequence();
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  animatePress(userChosenColour);
  checkAnswer(userChosenColour);
})
