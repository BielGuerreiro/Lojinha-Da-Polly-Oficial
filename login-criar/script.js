const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  const email = document.getElementById("email").value;
  if (!email.endsWith("@gmail.com")) {
    alert("O email precisa ser do Gmail!");
    e.preventDefault(); // impede o envio do formulário
  }
});
