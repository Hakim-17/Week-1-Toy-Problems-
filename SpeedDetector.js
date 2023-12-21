// Naming the function
function speedDetector (speed){
    
    // Checking the speed
    if (speed < 70){
        return 'OK';
    }

        //declaring variables
    const speedLimit = 70;
    let demeritPoints = 0;
    const extraSpeed = speed -  speedLimit;

    demeritPoints = Math.floor(extraSpeed/5); // Round number down to the nearest integer

    // Checking the demerits points
    if (demeritPoints > 0 && demeritPoints <= 12){
        return `Points: ${demeritPoints}`;
    } 
    else if (demeritPoints >= 12){
        return 'License suspended';
    }
    }

console.log(speedDetector(74));