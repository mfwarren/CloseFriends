// This code clicks the profiles on Instagram to make each account a close friend.
// Requires pasting into dev console to run in active browser session.
// Use at your own risk.
let usernames=[
    "matt_warren_pro"
    // Add usernames to add here
]

// Create a new MouseEvent
const clickEvent = new MouseEvent('click', {
    bubbles: true, // Ensures the event propagates through the DOM
    cancelable: true, // Allows preventDefault() to cancel the event
    view: window // Indicates the window associated with the event
});


const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    'value'
  ).set;
const inputEvent = new Event('input', { bubbles: true });


function processUsernamesSequentially(usernames, index = 0) {
    // Stop when all usernames have been processed
    if (index >= usernames.length) {
      console.log('All usernames processed');
      return;
    }

    const username = usernames[index];
    console.log(`Processing: ${username}`);

    // Set the input field value and trigger the input event
    const search = document.querySelector('input[placeholder="Search"]');
    nativeInputValueSetter.call(search, username);
    search.dispatchEvent(inputEvent);

    // Wait for 2 seconds before processing the next username
    setTimeout(() => {
      const buttons = document.querySelectorAll(
        '.wbloks_1[data-bloks-name="ig.components.Icon"]'
      );

      var button = buttons[0];
      const inlineStyle = button.getAttribute('style') || '';
      if (inlineStyle.includes('circle__outline')) {
        button.dispatchEvent(clickEvent);
        console.log('Clicked button');
      }

      // Recursively process the next username
      setTimeout(() => {
        processUsernamesSequentially(usernames, index + 1);
      }, 1000);
    }, 3000);
  }

processUsernamesSequentially(usernames);
