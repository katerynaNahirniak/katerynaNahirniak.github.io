// buttons
var buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.onclick = function() {
        var player = button.textContent.toLowerCase();

        // computer option
        var options = ["rock", "paper", "scissors"];
        var computer = options[Math.floor(Math.random() * 3)];

        var message = "You chose " + player + ". Computer chose " + computer + ". ";

        // rules of the game
        if (player === computer) {
            message += "It's a tie!";
        } else if ( (player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")) {
            message += "You win!";
        } else {
            message += "You lose!";
        }

        alert(message);
    }
});