// content.js
function highlightNumbers(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const numberMatchRegExp = /\b\d+\b/g;
      const text = node.nodeValue;
      const matches = text.match(numberMatchRegExp);
      if (matches) {
        const parent = node.parentNode;
        const fragments = text.split(numberMatchRegExp);
  
        const fragment = document.createDocumentFragment();
        fragments.forEach((fragmentText, index) => {
          fragment.appendChild(document.createTextNode(fragmentText));
          if (index < matches.length) {
            const span = document.createElement('span');
            span.className = 'highlight-number';
            span.textContent = matches[index];
            fragment.appendChild(span);
          }
        });
  
        parent.replaceChild(fragment, node);
      }
    } else {
      node.childNodes.forEach(highlightNumbers);
    }
  }
  
  const body = document.querySelectorAll("body");
  highlightNumbers(body);
  
  // Add some styles for the highlight
  const style = document.createElement('style');
  style.innerHTML = `
    .highlight-number {
      background-color: yellow;
      font-weight: bold;
    }
  `;
  document.head.appendChild(style);
  
  console.log('Numbers have been highlighted.');
  