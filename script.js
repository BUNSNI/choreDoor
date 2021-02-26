let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");

let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closeDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;

let currentlyPlaying = true;


gameOver = (status) => {
    if (status == "Win"){
        startButton.innerHTML = "You Win! Play Again?"
    } else if (status == "lose") {
        startButton.innerHTML = "You Lose! Try Again?"
        currentlyPlaying = false;
    }
};



playDoor = () => {
    numClosedDoors--;
    if (numClosedDoors == 1){
        gameOver("Win")
    }
}


doorImage1.onclick = () => {
    if (doorImage1.src == closeDoorPath){
        doorImage1.src = openDoor1;
        if (doorImage1.src == botDoorPath && numClosedDoors > 1){
            gameOver("lose");
        } else if (currentlyPlaying) {
            playDoor(doorImage1);
        }
}
};

doorImage2.onclick = () => {
    if (doorImage2.src == closeDoorPath && numClosedDoors > 1){
        doorImage2.src = openDoor2;
        if (doorImage2.src == botDoorPath){
            gameOver("lose")
        } else if (currentlyPlaying) {
            playDoor(doorImage2);
        }
}
};

doorImage3.onclick = () => {
    if (doorImage3.src == closeDoorPath){
        doorImage3.src = openDoor3;
        if (doorImage3.src == botDoorPath && numClosedDoors > 1){
            gameOver("lose")
        } else if (currentlyPlaying) {
            playDoor(doorImage3);
        }
    }
};


startRound = () => {
    numClosedDoors = 3;
    doorImage1.src = closeDoorPath;
    doorImage2.src = closeDoorPath;
    doorImage3.src = closeDoorPath;
    startButton.innerHTML = "Good Luck!";
    currentlyPlaying = true;
    randomChoreDoorGenerator()
}


let openDoor1;
let openDoor2;
let openDoor3;


randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);

    if (choreDoor == 0){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor == 1){
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = botDoorPath;
    } else {
        openDoor1 = spaceDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
    }
}

randomChoreDoorGenerator()

