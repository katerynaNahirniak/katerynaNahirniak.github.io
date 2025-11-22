// buttons
var buttons = document.querySelectorAll(".rps");


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
function computeLyrics() {
    let lyrics = "";

    for (let i = 99; i >= 0; i--) {
        if (i > 1) {
            lyrics += `${i} bottles of beer on the wall, ${i} bottles of beer.<br>`;
            lyrics += `Take one down and pass it around, ${i - 1} bottles of beer on the wall.<br><br>`;
        } else if (i === 1) {
            lyrics += `1 bottle of beer on the wall, 1 bottle of beer.<br>`;
            lyrics += `Take one down and pass it around, no more bottles of beer on the wall.<br><br>`;
        } else {
            lyrics += `No more bottles of beer on the wall, no more bottles of beer.<br>`;
            lyrics += `Go to the store and buy some more, 99 bottles of beer on the wall.<br>`;
        }
    }

    document.getElementById("output").innerHTML = lyrics;
   
}
computeLyrics();  


function getSubjects() {
    // Ask how many subjects
    let numSubjects = parseInt(prompt("How many subjects do you take?"));

    let marks = [];
    let total = 0;

    // Get marks for each subject
    for (let i = 1; i <= numSubjects; i++) {
        let mark = parseInt(prompt("Enter mark for subject " + i + ":"));

        marks.push(mark);
        total += mark;
    }

    // Calculate average
    let average = total / numSubjects;
    let grade = computeGrade(average);

    // Output results
    let resultHTML = `<h3>Your Results</h3>`;
    resultHTML += `<p>Marks: ${marks.join(", ")}</p>`;

    resultHTML += `<p>Your Grade: <strong>${grade}</strong></p>`;

    document.getElementById("gradesOutput").innerHTML = resultHTML;
}

function computeGrade(result) {
    if (result >= 70) {
        return 'A';
    }
    else if (result >= 60) {
        return 'B';
    }
    else if (result >= 50) {
        return 'C';
    }
    else if (result >= 40) {
        return 'D';
    }
    else {
        return 'F';
    }
}
