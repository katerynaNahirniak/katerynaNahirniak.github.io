alert("File loaded!");
function runSubjects() {
    let numSubjects = parseInt(prompt("How many subjects do you have?"));
    
    // validate
    while (isNaN(numSubjects) || numSubjects <= 0) {
        numSubjects = parseInt(prompt("Please enter a valid number of subjects:"));
    }

    const results = [];
    let sum = 0;

    // input results
    for (let i = 0; i < numSubjects; i++) {
        let mark = parseInt(prompt(`Enter mark for subject ${i + 1} (0–100):`));

        // validate mark
        while (isNaN(mark) || mark < 0 || mark > 100) {
            mark = parseInt(prompt(`Invalid! Enter mark for subject ${i + 1} (0–100):`));
        }

        results[i] = mark;
        sum += mark;
    }

    // compute average
    const average = sum / numSubjects;

    // determine grade function
    function getGrade(mark) {
        if (mark >= 70) return "A";
        else if (mark >= 60) return "B";
        else if (mark >= 50) return "C";
        else if (mark >= 40) return "D";
        else return "F";
    }

    // build output message
    let message = "Results:\n\n";
    for (let i = 0; i < numSubjects; i++) {
        message += `Subject ${i + 1}: ${results[i]}% — Grade: ${getGrade(results[i])}\n`;
    }

    message += `\nOverall Average: ${average.toFixed(2)}%`;

    alert(message);
}
