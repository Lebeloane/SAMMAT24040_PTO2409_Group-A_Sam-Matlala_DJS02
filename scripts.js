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


});