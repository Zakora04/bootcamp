function signin() {
  const username = document.getElementById("signup").value;
  const password = document.getElementById("signupPass").value;
  const reapeatPassword = document.getElementById("pass").value;
  const emailaddress = document.getElementById("mail").value;

  if (emailaddress.includes("@") && emailaddress.includes("."))
    alert("Successful");
  else {
    return "@required";
  }
  if (
    username === "" ||
    password === "" ||
    reapeatPassword === "" ||
    emailaddress === ""
  ) {
    alert("Please fill all field");
    return;
  }
  const userData = {
    username: username,
    password: password,
    reapeatPassword: reapeatPassword,
    emailaddress: emailaddress,
  };
  localStorage.setItem("user", JSON.stringify(userData));
  alert("Sign up sucessfully");

  setTimeout(() => {
    window.location.href = "login.html";
  });
}
