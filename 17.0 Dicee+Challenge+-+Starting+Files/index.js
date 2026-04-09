var player1 = Math.floor(Math.random() * 6 ) +1;
var player2 = Math.floor(Math.random() * 6 ) +1;

var randomDiceImage1 = 'images/dice' + player1 + '.png';
var randomDiceImage2 = 'images/dice' + player2 + '.png';

function changeDiceImage() {
  document.querySelector('.img1').setAttribute('src', randomDiceImage1);
  document.querySelector('.img2').setAttribute('src', randomDiceImage2);
  if (player1 > player2) {
    document.querySelector('h1').textContent = '🚩 Player 1 Wins!';
  } else if (player2 > player1) {
    document.querySelector('h1').textContent = '🚩 Player 2 Wins!';
  } else {
    document.querySelector('h1').textContent = 'It\'s a Draw!';
  }
}

changeDiceImage();