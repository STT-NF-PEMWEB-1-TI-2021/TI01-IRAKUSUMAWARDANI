function jalankanAlert() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

     if (username == "ahmad2017" && password == "integrity") {
         Swal.fire(
             'Login Berhasil!',
             'Terimakasih sudah login!',
             'success'
         )
     } else{
         Swal.fire({
             icon: 'error',
             title: 'Jangan begitu ya lain kali...',
             text: 'Username atau password anda salah! di coba lagi yaaa',
         })
     }
}