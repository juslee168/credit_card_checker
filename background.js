chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed.');
  });
  

 // background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.text) {
    fetch('https://api.grammarapi.com/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: message.text })
    })
    .then(response => response.json())
    .then(data => {
      sendResponse({ suggestions: data.suggestions });
    })
    .catch(error => {
      console.error('Error:', error);
      sendResponse({ suggestions: [] });
    });
    return true;  // Indicates that sendResponse will be called asynchronously
  }
});

  