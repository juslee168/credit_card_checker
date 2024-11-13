
let bin = null;

//load in the BIN numbers from the JSON file
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

// Check if the last 6 digits of the text match any of the BIN numbers, only if there is no preceding digit
function checkForSixDigitMatch(text) {
  if (!bin) {
    console.warn("BIN data not loaded yet.");
    return false;
  }
  const lastSixChars = text.slice(-6);
  const precedingChar = text.length > 6 ? text.slice(-7, -6) : '';
  console.log("Checking for match:", lastSixChars, "preceding char:", precedingChar);
  return bin.has(lastSixChars) && (precedingChar === '' || /\D/.test(precedingChar));
}

// Show a popup with the matched BIN number
function showPopup(match) {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerText = `It seems like you are typing in a credit card. Be aware of frauds or scams! BIN for dev reference: ${match}`;
  document.body.appendChild(popup);

// Position the popup
const underlineElement = document.querySelector('.underline');
  if (underlineElement) {
    const rect = underlineElement.getBoundingClientRect();
    popup.style.top = `${rect.bottom + window.scrollY}px`;
    popup.style.left = `${rect.left + window.scrollX}px`;
  } else {
    // Default position if underline element is not found
    popup.style.top = '10px';
    popup.style.left = '10px';
  }
  popup.style.display = 'block';

// Remove the popup after 3 seconds
setTimeout(() => {
  popup.style.display = 'none';
  document.body.removeChild(popup);
}, 3000);
}

// Add a stylesheet to the page
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = chrome.runtime.getURL('styles.css');
document.head.appendChild(link);

loadNumbers()

document.addEventListener("input", (event) => {
  // Only check if the target is an input field or textarea
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
      const typedText = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
      console.log("Typed text:", typedText);

      // Check if the last 6 digits match any number in the set with no preceding digit
      if (typedText.length >= 6 && checkForSixDigitMatch(typedText)) {
          console.log("Match found:", typedText.slice(-6));
          //alert("You seem to be typing a credit card number. Please be careful with your personal information.");
          showPopup(typedText.slice(-6));
      }
  }
});