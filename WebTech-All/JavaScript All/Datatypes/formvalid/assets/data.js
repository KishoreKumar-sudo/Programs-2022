function validate() {
 let u = document.getElementById('username').value
 let e = document.getElementById('email').value
 let p = document.getElementById('password').value
 let cp = document.getElementById('c-password').value
 if( u == " " || u.length <5) {
    document.getElementById('usernamemessage').innerHTML = "Please Enter the Valid username"
 }
 if (e == ""){
    document.getElementById('emailmessage').innerHTML = "Please Enter the valid email id "
 }
if ( p != cp){
    document.getElementById('c-passwordmessage').innerHTML = "Password and confirm password should be the same"
}
return false
}