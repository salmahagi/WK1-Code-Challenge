
// Function to determine the grade based on student marks
function getGrade() {
    // Prompt the user for input and parse it as an integer
    let marks = prompt("Enter student marks (0-100):");
    marks = parseInt(marks);

    // Check if the input is valid (number between 0 and 100)
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        return; // Exit the function if input is invalid
    }

    // Variable to hold the grade
    let grade;
    // Determine the grade based on the marks
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 49) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output the determined grade
    console.log(`Grade: ${grade}`);
}

// Call the function to execute it
getGrade();
