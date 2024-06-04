// vars
var username = document.getElementById("username")
var logout = document.getElementById("logout")

// get name from localStorage
var usernameLocal = localStorage.getItem("name")

// display name in heml
if(usernameLocal){
    username.innerHTML = `wolcome ${usernameLocal}`
}

// logout from home
logout.addEventListener("click" ,function () {
    localStorage.clear
    setTimeout(() => {
        window.location = "../index.html"
    }, 2000);
})