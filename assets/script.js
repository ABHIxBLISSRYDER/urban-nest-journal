document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("newsletter-form");
  const message = document.getElementById("form-message");
  if (form && message) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      message.textContent = "Thanks for your interest — this demo form does not store or send your email.";
      form.reset();
    });
  }
});