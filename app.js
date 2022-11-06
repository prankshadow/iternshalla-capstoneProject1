
function login() {
    if ($("#emailAddress").val() === "admin@admin.com" && 
    $("#password").val() === "123456") {
        alert("Login Successfully");
    } else {
        alert("Incorrect email or password");
        alert("Try:- Emailaddress: admin@admin.com || password: 123456");
    }
}



















