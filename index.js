var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
        var keyName = this.innerHTML;
        musicPlay(keyName)
    })
}
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('keypress', function () {
        var keyPressed = this.innerHTML;
        musicPlay(keyPressed)
    })
}

function musicPlay(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio();
            tom1.src = "tom-1.mp3"
            tom1.play();
            break;
        case "a":
            var audio2 = new Audio();
            audio2.src = "kick-bass.mp3"
            audio2.play();
            break;
        case "s":
            var tom3 = new Audio();
            tom3.src = "tom-3.mp3"
            tom3.play();
            break;
        case "d":
            var crash = new Audio();
            crash.src = "crash.mp3"
            crash.play();
            break;
        case "j":
            var tom2 = new Audio();
            tom2.src = "tom-2.mp3"
            tom2.play();
            break;
        case "k":
            var snare = new Audio();
            snare.src = "snare.mp3"
            snare.play();

            break;
        case "l":
            var tom4 = new Audio();
            tom4.src = "tom-4.mp3"
            tom4.play();
            break;
            deafault: console.log("hello")
    }
}
