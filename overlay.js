overlay.js

// Voice Command (basic)
function initVoiceCommand() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.onresult = (event) => {
    const command = event.results[event.resultIndex][0].transcript.trim().toLowerCase();
    if (command.includes("increase font")) adjustFontSize(2);
    if (command.includes("decrease font")) adjustFontSize(-2);
    if (command.includes("dark mode")) toggleContrast();
    if (command.includes("read page")) speakPage();
  };
  recognition.start();
}

// Font size adjustment
let fontSize = 16;
function adjustFontSize(change) {
  fontSize += change;
  document.body.style.fontSize = ${fontSize}px;
}

// High Contrast Toggle
let darkMode = false;
function toggleContrast() {
  darkMode = !darkMode;
  document.body.classList.toggle('high-contrast', darkMode);
}

// Overlay UI
function createAccessibilityOverlay() {
  const panel = document.createElement('div');
  panel.className = 'accessibility-panel';
  panel.innerHTML = `
    <button onclick="adjustFontSize(2)">A+</button>
    <button onclick="adjustFontSize(-2)">A-</button>
    <button onclick="toggleContrast()">🌓 Contrast</button>
    <button onclick="speakPage()">🔊 Read</button>
  `;
  document.body.appendChild(panel);
}

