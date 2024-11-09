document.getElementById('checkButton').addEventListener('click', () => {
    const text = document.getElementById('textInput').value;
    chrome.runtime.sendMessage({ text: text }, (response) => {
      const suggestionsDiv = document.getElementById('suggestions');
      suggestionsDiv.innerHTML = '';
      if (response.suggestions) {
        response.suggestions.forEach(suggestion => {
          const p = document.createElement('p');
          p.textContent = suggestion;
          suggestionsDiv.appendChild(p);
        });
      }
    });
  });
  