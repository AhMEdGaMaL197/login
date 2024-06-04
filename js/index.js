// vars
var signinEmail = document.getElementById("signinEmail")
var signinPassword = document.getElementById("signinPassword")
var exist = document.getElementById("exist")
var Success = document.getElementById("Success")
var btn = document.getElementById("btn")


var getEmail = localStorage.getItem("email")
var getPassword = localStorage.getItem("password")


//careate email and save date in localStorge and go to page singIn
btn.addEventListener("click" , function () {
    if (getEmail && getEmail.trim() === signinEmail.value && getPassword && getPassword.trim() === signinPassword.value ) {
        
        Success.classList.replace("d-none" , "d-block")
        exist.classList.replace("d-block" ,  "d-none" )
        setTimeout(() => {
            window.location = "../home.html"
        }, 2000);
    }else{
        exist.classList.replace("d-none" , "d-block")
        Success.classList.replace("d-block", "d-none" )
    }
})

// cheake valid inputs
function validInputsSin(e) {
    var regx = {
        signinEmail : /\w+([0-9])?@\w+\.\w+/ig,
        signinPassword : /([A-Z]{0,8})?[0-9]{10,}/
    }

    if (regx[e.id].test(e.value)) {
        e.classList.add("is-valid")
        e.classList.remove("is-invalid")
        // Success.classList.replace("d-none" , "d-block")
        e.nextElementSibling.classList.replace( "d-block" , "d-none" )
    }else{
        e.classList.add("is-invalid")
        e.classList.remove("is-valid")
        // exist.classList.replace("d-none" , "d-block")
        e.nextElementSibling.classList.replace("d-none" , "d-block")

    }
}

// clear  all inputs pefore complate data
function clear() {
    signupEmail.value = ""
    signupPassword.value = ""
}