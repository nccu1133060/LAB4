
const drumButtons = document.querySelectorAll(".drum");


for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});


function playSound(key) {
  let soundFile;
  switch (key) {
    case "w":
      soundFile ="sounds/crash.mp3" ;
      break;
    case "a":
      soundFile = "sounds/kick-bass.mp3";
      break;
    case "s":
      soundFile ="sounds/snare.mp3" ;
      break;
    case "d":
      soundFile = "sounds/tom-1.mp3";
      break;
    case "j":
      soundFile = "sounds/tom-2.mp3";
      break;
    case "k":
      soundFile = "sounds/tom-3.mp3";
      break;
    case "l":
      soundFile = "sounds/tom-4.mp3";
      break;
    default:
      console.log("Invalid key: " + key);
      return;
  }

  const audio = new Audio(soundFile);
  audio.play();
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);

  if (activeButton) {
    activeButton.classList.add("pressed");


    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
