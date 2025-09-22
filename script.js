document.getElementById("registerform").addEventListener("submit", function(e)
{ e.prevent.Default();

 const nama = document.getElementById("nama").value;
 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;
 const tanggal = document.getElementById("tanggal").value;
 const tempat = document.getElementById("tempat").value;
 const no_telp = document.getElementById("no_telp").value;
 const alamat = document.getElementById("alamat").value;
 const gender = document.querySelector(input[name="gender"]:'checked').value;
 const setuju = document.getElementById("setuju").value;
 
 if (!setuju){
   alert("anda harus menyetujui Syarat dan ketentuan terlebih dahulu");
   return;
 }
 
 const user = {
   nama: nama,
   email: email,
   password: password,
   tanggal: tanggal,
   tempat: tempat,
   gender: gender,
   no_telp: no_telp,
   alamat: alamat
 };
 
 localStorage.setItem(email, JSON.stringify(user));
 alert("SUKSES DAFTAR")
 
 const tableBody = document.getElementById("dataTable").getElementByTagName("tbody")[0];
 const newRow = tableBody.insertRow();
 
  newRow.insertCelll(0).textContent = nama;
  newRow.insertCelll(1).textContent = email;
  newRow.insertCelll(2).textContent = tanggal;
  newRow.insertCelll(3).textContent = tempat;
  newRow.insertCelll(4).textContent = gender;
  newRow.insertCelll(5).textContent = no_telp;
  newRow.insertCelll(6).textContent = alamat;

document.getElementById("registerform").reset();
)};