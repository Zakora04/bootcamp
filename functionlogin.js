function Login() {
  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;
  
  const savedTolocal = JSON.parse(localStorage.getItem("userData"));
  if(!username.trim() || !password.trim()){
    return alert("Input filed  required")
  }
  if(!savedTolocal){
    return alert("login failed");
  }
  if (
    savedTolocal && username === savedTolocal.username && password === savedTolocal.password) {
    alert("login sucessful");
  } 
  else if (username !== savedTolocal.username) {
    alert("incorrect userName");
  } else if (password !== savedTolocal.password) {
    alert("incorrect password");
  } else if (!savedTolocal) {
    alert("incorrect credential");
  } 
  else {
    alert("login successful");
  }
}
