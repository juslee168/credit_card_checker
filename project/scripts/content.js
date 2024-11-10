const creditCardRegex = /\b(?:\d[ -]*?){13,16}\b/;

document.addEventListener("input", (event) => {
    const target = event.target;
    console.log("Event type:", event.type);

    // Only check inputs or text areas
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        const text = target.value.replace(/\s|-/g, ""); // remove spaces and dashes

        // Match the text with a credit card pattern
        if (creditCardRegex.test(text)) {
            alert("Potential credit card number detected. Be cautious!");
        }
    }
});