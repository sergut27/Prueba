const scriptURL =
  "https://script.google.com/macros/s/AKfycby5HepZUVvyvFMAvxXJGaxqaIeWgVG8QM6sbTJZy5-Hgnhq9qoF_uVXwBLsgUq9yjc3/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
