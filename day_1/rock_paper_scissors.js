var playerOne = "Computer";
var playerTwo = "Brooke";

var weapons = ['rock' , 'paper', 'scissors'];

//var playerTwoWeapon = weapons[parseInt(Math.random()*weapons.length) %3];
//var playerOneWeapon = weapons[parseInt(Math.random()*weapons.length) %3];

var playerOneCount = 0
var playerTwoCount = 0

while (playerOneCount < 2 && playerTwoCount < 2) {
  var playerTwoWeapon = weapons[parseInt(Math.random()*weapons.length) %3];
  var playerOneWeapon = weapons[parseInt(Math.random()*weapons.length) %3];
  if (playerOneWeapon==playerTwoWeapon) {
    console.log("tie!");
    continue;
    }
  else if (playerOneWeapon=="paper")
    switch (playerTwoWeapon) {
      case "rock":
        console.log(playerOne + " wins!"); playerOneCount += 1;
        break;
      case "scissors":
        console.log(playerTwo + " wins!"); playerTwoCount += 1;
        break;
  }
  else if (playerOneWeapon=="scissors")
    switch (playerTwoWeapon) {
      case "rock":
        console.log(playerTwo + " wins!"); playerTwoCount += 1;
        break;
      case "paper":
        console.log(playerOne + " wins!"); playerOneCount += 1;
        break;
    }
  }

  console.log("Final Score! " + playerOne + ": " + playerOneCount +  " || " + playerTwo + ": " + playerTwoCount + ".");
