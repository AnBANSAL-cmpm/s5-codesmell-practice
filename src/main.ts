// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let count = 0;

// These constants are for button IDs and heading text
const increment_button_id = "increment",
  counter_display_id = "counter",
  title = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${title}</h1>
    <p>Counter: <span id="${counter_display_id}">0</span></p>
    <button id="${increment_button_id}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Get the increment button element from the document
  const increment_btn = document.getElementById(increment_button_id);
  // Get the decrement button element from the document
  const decrement_btn = document.getElementById("dec");
  // Get the reset button element from the document
  const reset_btn = document.getElementById("reset");
  // Get the counter span element from the document
  const ctr = document.getElementById(counter_display_id);

  // Check if any element is missing, then exit the function
  if (!increment_btn || !decrement_btn || !reset_btn || !ctr) return;

  function updateUI() {
    // Update the counter display
    if (!ctr) return; //deno is complaining about this, I know i check for this before
    ctr.innerHTML = `${count}`;
    // Update the document title
    document.title = "Clicked " + count;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = count % 2 ? "pink" : "lightblue";
  }

  // Add click event to the increment button
  increment_btn.addEventListener("click", () => {
    // Increase the counter by 1
    count++;
    updateUI();
  });

  // Add click event to the decrement button
  decrement_btn.addEventListener("click", () => {
    // Decrease the counter by 1
    count--;
    updateUI();
  });

  // Add click event to the reset button
  reset_btn.addEventListener("click", () => {
    // Reset the counter to 0
    count = 0;
    updateUI();
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
