function themeToggle () {
    return document.documentElement.classList.toggle('light');
}

function register() {

}

let nome = document.querySelector('#name');
let labelnome  = document.querySelector('labelName'); 
let usuario = document.querySelector('#user');
let labeluser = document.querySelector('#labeluser');
let senha = document.querySelector('#pass1');
let labelsenha = document.querySelector('#labelpass');
let confirmacao = document.querySelector('#pass2');
let labelconfirm = document.querySelector('#labelpass2');





nome.addEventListener('keyup', () =>{
    if(nome.value.length <= 2) {
    labelnome.setAttribute('style', 'color:red')
    } else {
        labelnome.setAttribute('style', 'color:green')
    }
});