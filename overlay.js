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

