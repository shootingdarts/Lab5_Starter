// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectElement = document.querySelector("#horn-select");
  const image = document.querySelector("[alt='No image selected']");
  const audio = document.querySelector(".hidden");
  selectElement.value = 'air-horn'
  image.src = 'assets/images/air-horn.svg';
  image.alt = 'air-horn selected';
  audio.src = 'assets/audio/air-horn.mp3';
  
  selectElement.addEventListener("change", (event) => {
    // result.textContent = `You like ${event.target.value}`;
    //console.log(`assets/images/${event.target.value}.svg`);
    image.src = `assets/images/${event.target.value}.svg`;
    image.alt = `${event.target.value} selected`;
    audio.src = `assets/audio/${event.target.value}.mp3`;
  });

  const sliderElement = document.getElementById('volume');
  const icon = document.querySelector("[alt='Volume level 2']");

  sliderElement.addEventListener("change", (event) => {
    const volume = event.target.value;
    if (volume  == 0) {
      icon.src = 'assets/icons/volume-level-0.svg';
      icon.alt = 'Volume level 0';
    }
    else if (volume < 33) {
      icon.src = 'assets/icons/volume-level-1.svg';
      icon.alt = 'Volume level 1';
    }
    else if (volume < 67) {
      icon.src = 'assets/icons/volume-level-2.svg';
      icon.alt = 'Volume level 2';
    }
    else {
      icon.src = 'assets/icons/volume-level-3.svg';
      icon.alt = 'Volume level 3';
    }
    audio.volume = volume / 100;
    //console.log(audio.volume);
  });

  const button = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  button.addEventListener("click", (event) => {
    audio.play()
    if (selectElement.value == "party-horn") {
      const rand = Math.random();
      if (rand < 0.25) {
        jsConfetti.addConfetti({
          confettiColors: [
            '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
          ],
        })  
      }
      else if (rand < 0.5) {
        jsConfetti.addConfetti({
          emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        })  
      }
      else if (rand < 0.75) {
        jsConfetti.addConfetti({
          emojis: ['🙃', '😁', '😇', '😈', '😆', '🥳'],
        })
      }
      else {
        jsConfetti.addConfetti({
          confettiColors: [
            '#6ac114', '#f8029e', '#f86f02', '#ff85a1', '#02f827', '#f8e502',
          ],
        })  
      }
    }
  });



}