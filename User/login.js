const loginEmail = document.querySelector(".login__email");
const buttonLogin = document.querySelector(".login__button");
buttonLogin.addEventListener('click', login);

function login() {
   const userName = loginEmail.value;
   console.log(userName);

   window.location.href = 'paintings.html';
   window.reload();
}