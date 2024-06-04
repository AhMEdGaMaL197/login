// vars
var signupName = document.getElementById("signupName")
var signupEmail = document.getElementById("signupEmail")
var signupPassword = document.getElementById("signupPassword")
var exist = document.getElementById("exist")
var Success = document.getElementById("Success")
var btn = document.getElementById("btn")


//careate email and save date in localStorge and go to page singIn
btn.addEventListener("click" , function () {
    if ( signupName.classList.contains("is-valid") &&
    signupEmail.classList.contains("is-valid") &&
    signupPassword.classList.contains("is-valid") ) {
        Success.classList.replace("d-none" , "d-block")
        exist.classList.replace("d-block" ,  "d-none" )
        localStorage.setItem("name" , signupName.value)
        localStorage.setItem("email" , signupEmail.value)
        localStorage.setItem("password" , signupPassword.value)
        clear()
        setTimeout(() => {
            window.location = "../index.html"
        }, 2000);
    }else if( signupName.classList.contains("is-invalid") ||
    signupEmail.classList.contains("is-invalid") ||
    signupPassword.classList.contains("is-invalid")  ){
        exist.classList.replace("d-none" , "d-block")
        Success.classList.replace("d-block", "d-none" )
    }else{
        alert("pless complet All inputs")
    }

})

// cheake valid inputs
function validInputs(e) {
    var regx = {
        signupName : /[a-z]{4,8}/i,
        signupEmail : /\w+([0-9])?@\w+\.\w+/ig,
        signupPassword : /([A-Z]{0,8})?[0-9]{10,}/
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
    signupName.value = ""
    signupEmail.value = ""
    signupPassword.value = ""
}