function speedDetector (speed){
    
    if (speed < 70){
        return 'OK';
    }

    const speedLimit = 70;
    let demeritPoints = 0;
    const extraSpeed = speed -  speedLimit;

    demeritPoints = Math.floor(extraSpeed/5); 

    if (demeritPoints > 0 && demeritPoints < 12){
        return `Points: ${demeritPoints}`;
    } 
    else if (demeritPoints >= 12){
        return 'License suspended';
    }
    }

console.log(speedDetector(74));