function signin() {
  const username = document.getElementById("signup").value.trim();
  const password = document.getElementById("signupPass").value;
  const repeatPassword = document.getElementById("pass").value;
  const email = document.getElementById("email").value.trim();

  if (!username || !password || !repeatPassword || !email) {
    alert("Please fill all fields");
    return;
  }

  if (password !== repeatPassword) {
    alert("Passwords do not match");
    return;
  }

  const userData = { username, password, email };

  localStorage.setItem("userData", JSON.stringify(userData));
  alert("Sign up successful!");

  setTimeout(() => {
    window.location.href = "login.html";
  }, 500);
}
