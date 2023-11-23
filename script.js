// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
}

// Audio sounds
let audioEating = new Audio();
audioEating.src = "audio-eat.ogg";

function disableButtonEat() {
    let button = document.getElementById("eat-btn");
    button.disabled = true;
    button.innerText = "Eating...";
    
    setTimeout(() => {
      button.disabled = false;
      button.innerText = "Feed Meow!";
    }, 7100);
}

let audioMeowing = new Audio();
audioMeowing.src = "audio-meow.ogg";

function disableButtonMeow() {
    let button = document.getElementById("meow-btn");
    button.disabled = true;
    button.innerText = "Meowing...";
    
    setTimeout(() => {
      button.disabled = false;
      button.innerText = "Pet Meow!";
    }, 5100);
}

// Play and Pause Video
let vid = document.getElementById("video"); 

function playVid() { 
  vid.play(); 
} 

let meowVid = document.querySelector('#video');

meowVid.addEventListener('click', function() {
  vid.pause();
});
