// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {

      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
    }  
  }
  synth.onvoiceschanged = populateVoiceList;

  const button = document.querySelector("button");
  const textArea = document.getElementById("text-to-speak");
  const image = document.querySelector("img");

  button.addEventListener('click', (event) => {
    event.preventDefault();
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    utterance.addEventListener("start", (event) => {
      image.src = "assets/images/smiling-open.png";
      image.alt = "Smiling open face";
    });
    utterance.addEventListener("end", (event) => {
      image.src = "assets/images/smiling.png";
      image.alt = "Smiling face"
    });
    synth.speak(utterance);
  });
}