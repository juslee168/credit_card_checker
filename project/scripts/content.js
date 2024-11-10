
let bin = null;

function loadNumbers() {
  fetch(chrome.runtime.getURL('bin.json'))
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      bin = new Set(data.map(item => item.BIN));
      console.log("Loaded BIN numbers:", bin);
    })
    .catch(error => console.error("Error loading JSON:", error));
}

function checkForSixDigitMatch(text) {
  if (!bin) {
    console.warn("BIN data not loaded yet.");
    return false;
  }
  const lastSixChars = text.slice(-6);
  const precedingChar = text.length > 6 ? text.slice(-7, -6) : '';
  return bin.has(lastSixChars) && (precedingChar === '' || /\D/.test(precedingChar));
}

loadNumbers()

document.addEventListener("input", (event) => {
  // Only check if the target is an input field or textarea
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
      const typedText = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
      console.log("Typed text:", typedText);

      // Check if the last 6 digits match any number in the set with no preceding digit
      if (typedText.length >= 6 && checkForSixDigitMatch(typedText)) {
          console.log("Match found:", typedText.slice(-6));
          alert("You seem to be typing a credit card number. Please be careful with your personal information.");
      }
  }
});