// Function to check the speed of a car and calculate demerit points
function checkSpeed() {
    // Prompt the user for the speed input
    let speed = prompt("Enter car speed (km/h):");
    speed = parseInt(speed);

    // Validate the input (must be a number and non-negative)
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a valid speed.");
        return; // Exit if the input is invalid
    }

    // Check if the speed is less than the speed limit
    if (speed < 70) {
        console.log("Ok"); // No points for speeds below 70
    } else {
        // Calculate demerit points for speeds above 70
        const points = Math.floor((speed - 70) / 5);
        console.log(`Points: ${points}`); // Output the points calculated

        // Check if points exceed the suspension threshold
        if (points > 12) {
            console.log("License suspended"); // Suspend the license if points are too high
        }
    }
}

// Call the function to execute it
checkSpeed();
