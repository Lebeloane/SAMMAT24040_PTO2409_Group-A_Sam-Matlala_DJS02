const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // validation for when values are missing
  if (!dividend || !divider) {
    result.textContent = "Division can't be done. Both inputs are required."
    return;
  }

  // An invalid division should log an error in the console
  if (Number(divider) === 0) {
    result.textContent = "Division not performed. Invalid number provided. Try again";
    console.error(new Error("Attempted division by zero"));
    return;
  }

  // Providing anything that is not a number should crash the program
  if (isNaN(dividend) || isNaN(divider)) {
    console.error("Error: Non-numeric input");
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page.</h1>";
    throw new Error("Non-numeric input provided.")
  }

  // This will divide and round out the result if it's a decimal
  result.innerText = Math.floor(dividend / divider);
});