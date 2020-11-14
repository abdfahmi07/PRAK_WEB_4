const usernameInputValue = document.querySelector('.username');
const passwordInputValue = document.querySelector('.password');
const btnSubmit = document.querySelector('.submit');

btnSubmit.addEventListener('click', function(e) {
if (usernameInputValue.value == 'abdul080701' && passwordInputValue.value == 'integrity') {
    e.preventDefault();
    window.location.replace("success.html");
} else {
    alert('Username atau Password Salah!');
    window.location.reload();
}
});


