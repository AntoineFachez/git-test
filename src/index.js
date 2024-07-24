function toUpperCase() {
  // Get the element with id "myCapitalText"
  const element = document.getElementById('myCapitalText');

  // Check if the element exists
  if (!element) {
    console.error('Element with id "myCapitalText" not found');
    return; // Exit the function if element not found
  }

  // Get the current text content
  const text = element.textContent;

  // Convert to uppercase and update the element's text content
  element.textContent = text.toUpperCase();
}

// Call the function (you can call it on page load or based on an event)
toUpperCase();
