function login() {
  const username = document.getElementById("loginUser").value.trim();
  const password = document.getElementById("loginPass").value;

  const savedTolocalStorage = JSON.parse(localStorage.getItem("userData"));
  if (!username.trim()) {
    // console.error("Failed to parse stored user data:", e);
    // return alert("Login failed. Please sign up first.");
  }

  if (!username || !password) {
    return alert("Both username and password are required.");
  }

  if (!username || !password) {
    return alert("No account found. Please sign up first.");
  }

  if (username !== savedTolocalStorage.username) {
    return alert("Incorrect username.");
  }
  if (password !== savedTolocalStorage.password) {
    return alert("Incorrect password.");
  }

  alert("Login successful.");
}
document.querySelector("button").addEventListener("click", Login);
