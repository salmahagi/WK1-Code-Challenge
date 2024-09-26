function checkSpeed() {
    let speed = prompt("Enter car speed (km/h):");
    speed = parseInt(speed);

    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a valid speed.");
        return;
    }

    if (speed < 70) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - 70) / 5);
        console.log(`Points: ${points}`);

        if (points > 12) {
            console.log("License suspended");
        }
    }
}

checkSpeed();
