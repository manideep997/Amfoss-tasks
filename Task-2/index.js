function playSound(key) {
  const sounds = {
    w: "C:/Users/smani/Downloads/Koi Koi Ringtone Download - MobCup.Com.Co.mp3",
    a: "C:/Users/smani/Downloads/task-08_sounds_tom-4.mp3",
    s: "C:/Users/smani/Downloads/task-08_sounds_snare.mp3",
    d: "C:/Users/smani/Downloads/task-08_sounds_tom-1.mp3",
    j: "C:/Users/smani/Downloads/task-08_sounds_tom-2.mp3",
    k: "C:/Users/smani/Downloads/task-08_sounds_tom-3.mp3",
    l: "C:/Users/smani/Downloads/task-08_sounds_tom-4.mp3",
  };

  if (sounds[key]) {
    const audio = new Audio(sounds[key]);
    audio.play();
  } else {
    console.error(`No sound mapped for key: ${key}`);
  }
}

// Event listener for key presses
window.addEventListener("keydown", (event) => {
  playSound(event.key.toLowerCase());
});

// Adding event listeners to buttons
const keys = document.querySelectorAll(".key");
keys.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.querySelector("kbd").innerText.toLowerCase();
    playSound(key);
  });
});


