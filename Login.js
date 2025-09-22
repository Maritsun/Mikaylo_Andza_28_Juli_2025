document.getElementById("loginform").addEventListener("submit", function(e)
{
  e.preventDefault();
  
  const loginEmail = document.getElementById("loginEmail").value.trim();
  const loginPassword = document.getElementById("LoginPassword").value;
  
  const storedRaw = localStorage.getItem(loginEmail);
  const storedUser  = storedRaw  ? JSON.parse(storedRaw) : null;
  
  if (storedUser && storedUser.password == loginPassword) {
    localStorage.setItem("currentUser", loginEmail);
    alert("Login Berhasil. Wassup ***** + storedUser.nama + "!");
  }else{
    alert("Login gagal email salah atau password salah!!!!")
  } 
});