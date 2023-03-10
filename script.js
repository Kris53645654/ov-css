let loginBtn = document.querySelector('.header-login-btn')
let loginModal = document.querySelector('.login-modal')
loginBtn.onclick=function() {
    loginModal.classList.add('show')
    document.body.classList.add('stop-scrolling')
   
}

loginModal.onsubmit = function(event){
    event.preventDefault()
    console.log(event.target.username.value)
    console.log(event.target.password.value)
    let username = event.target.password.value
    let password = event.target.password.value
    let userLnfoElem = document.querySelector('.userinfo')
    userLnfoElem.innerHTML = `<span>${username}</span><button onclick="Logout()">Logout</button>`
    loginModal.classList.remove('show')
    document.body.classList.remove('stop-scrolling')
}

function Logout(){
    let userLnfoElem = document.querySelector('.userinfo')  
    userLnfoElem.innerHTML = '<button class="header-login-btn">login</button>'
}
