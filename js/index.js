// Your code goes here
//mouseover
// const navLinks = document.querySelectorAll('nav a');
// navlinks.forEach(function(x => x.addEventListener('mouseover', function(e) {
//     e.style.color = 'green';
// }))

//mouseover
const logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener('mouseover', makeGreen);

function makeGreen(event) {
    logoHeading.style.color = 'green';
    logoHeading.textContent = 'less compiler is not working'
    console.log(event.type);
}

//keydown
document.addEventListener('keydown', escKey);

function escKey(event) {
    console.log(event.type);
    if (event.key === 'Escape'){
        console.log("in escape");
        logoHeading.style.color = 'black';
        funbus.style.display = 'initial';
    }
}
//wheel
const funbus = document.querySelector('.intro img');
document.addEventListener('wheel', hideFunbus);

function hideFunbus(event) {
    funbus.style.display = 'none';
}

//load
window.addEventListener('load', (event) => console.log(event));

//focus - when a link gets focus, make uppercase
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('focus', function(event) {
        console.log(event)
        link.textContent = link.textContent.toUpperCase();
    })
})

//resize

const introBox = document.querySelector('.intro');

window.addEventListener('resize', (event) => {
    introBox.style.backgroundColor = "pink";
})

//scroll

document.addEventListener('scroll', (event) => {
    introBox.style.backgroundColor = "white";
})

//select

const selected = document.querySelector('input')
selected.addEventListener('select', triggered)

function triggered(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `Your selection is ${selection}`;
  }
//dblclick
logoHeading.addEventListener('dblclick', welcome);

function welcome(event) {
    logoHeading.style.color = 'pink';
    logoHeading.textContent = 'welcome to fun bus'
}
//blur
navLinks.forEach(link => {
    link.addEventListener('blur', function(event) {
        console.log(event)
        link.textContent = link.textContent.toLowerCase();
    })
})
