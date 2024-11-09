// content.js

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function createTooltip() {
  const tooltip = document.createElement('div');
  tooltip.classList.add('grammar-tooltip');
  document.body.appendChild(tooltip);
  return tooltip;
}

function showTooltip(element, text) {
  const rect = element.getBoundingClientRect();
  const tooltip = document.querySelector('.grammar-tooltip') || createTooltip();
  tooltip.textContent = text;
  tooltip.style.top = `${rect.bottom + window.scrollY}px`;
  tooltip.style.left = `${rect.left + window.scrollX}px`;
}

function checkGrammar(text, target) {
  chrome.runtime.sendMessage({ text: text }, (response) => {
    if (response.suggestions && response.suggestions.length > 0) {
      // Show the first suggestion in the tooltip
      showTooltip(target, response.suggestions[0]);
    }
  });
}

const debouncedCheckGrammar = debounce(checkGrammar, 500);

document.addEventListener('input', (event) => {
  if (event.target.nodeName === 'TEXTAREA' || (event.target.nodeName === 'INPUT' && event.target.type === 'text')) {
    const text = event.target.value;
    debouncedCheckGrammar(text, event.target);
  }
});
