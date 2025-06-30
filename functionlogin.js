function Login() {
  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;
  
  const savedTolocal = JSON.parse(localStorage.getItem("userData"));
  if(!username.trim() || !password.trim()){
    return alert("Input field required>")
  }
  if(!savedTolocal){
    return alert("Login failed>");
  }
  if (
    savedTolocal && username === savedTolocal.username && password === savedTolocal.password) {
    alert("Login successful.");
  } 
  else if (username !== savedTolocal.username) {
    alert("Incorrect Username.");
  } else if (password !== savedTolocal.password) {
    alert("Incorrect password.");
  } else if (!savedTolocal) {
    alert("Incorrect credential.");
  } 
  else {
    alert("Login successful.");
  }
}
