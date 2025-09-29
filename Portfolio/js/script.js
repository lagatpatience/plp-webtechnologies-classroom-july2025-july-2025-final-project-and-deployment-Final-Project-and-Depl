document.getElementById("contactForm").addEventListener("submit", function (e) {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!email.includes("@") || message.trim() === "") {
    alert("Please enter a valid email and message.");
    e.preventDefault();
  }
});
