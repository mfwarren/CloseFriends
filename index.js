// This code clicks the profiles on Instagram to make each account a close friend.
// Requires pasting into dev console to run in active browser session.
// Use at your own risk.

// Select the element
// const buttons = document.querySelectorAll('[role="button"]');
// document.querySelectorAll('[role="button"][aria-label="Toggle checkbox"]')
const buttons = document.querySelectorAll('.wbloks_1[data-bloks-name="ig.components.Icon"]');

// Create a new MouseEvent
const event = new MouseEvent('click', {
    bubbles: true, // Ensures the event propagates through the DOM
    cancelable: true, // Allows preventDefault() to cancel the event
    view: window // Indicates the window associated with the event
});

// Dispatch the event to the element
buttons.forEach(button => {
    const inlineStyle = button.getAttribute('style') || '';
    // console.log(inlineStyle);
    if (inlineStyle.includes('circle__outline')) {
        button.dispatchEvent(event);
        // console.log('clicked');
    }
});
