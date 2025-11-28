const container = document.getElementById('skillsContainer');

// Duplicate the content for seamless looping
container.innerHTML += container.innerHTML;

let scrollSpeed = 1; 
let position = 0;

function scroll() {
    position -= scrollSpeed;
    if (Math.abs(position) >= container.scrollWidth / 2) {
        position = 0; 
    }
    container.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(scroll);
}

scroll();

const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', () => {
    window.open ( 'https://wa.link/si113f', '_blank'); 
});

const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', () => {
    const cvLink = '  https://drive.google.com/uc?export=download&id=1-nw1YI_EyIl1co6DoYoeMp_sTaBLlwAD';
    window.open(cvLink, '_blank'); 
});

const arrow = document.getElementById('arrow');
arrow.addEventListener('click', () => {
    window.open('https://wa.link/si113f', '_blank');
});

const settingBtn = document.querySelector('.setting');


if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

settingBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

const aside = document.querySelector('aside');
const triggerZone = 50; 

document.addEventListener('DOMContentLoaded', () => {
    aside.classList.add('active');
});



document.addEventListener('mousemove', (e) => {
    const screenWidth = window.innerWidth;
    if (e.clientX > screenWidth - triggerZone) {
        aside.classList.add('active');
    } else {
        aside.classList.remove('active');
    }
});


document.addEventListener('touchstart', (e) => {
    const screenWidth = window.innerWidth;
    const touchX = e.touches[0].clientX;

    if (touchX > screenWidth - triggerZone) {
        aside.classList.add('active');
    } else {
        aside.classList.remove('active');
    }
});


aside.addEventListener('touchstart', (e) => {
    const startX = e.touches[0].clientX;

    aside.addEventListener('touchmove', function moveHandler(ev) {
        const currentX = ev.touches[0].clientX;
        if (currentX < startX - 30) { 
            aside.classList.remove('active');
            aside.removeEventListener('touchmove', moveHandler);
        }
    });
});

let lastScroll = 0;
const navbar = document.querySelector('.navbar-container');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.top = '0';
        return;
    }

    if (currentScroll > lastScroll) {
        // scrolling down
        navbar.style.top = '-120px'; 
    } else {
        // scrolling up
        navbar.style.top = '0'; 
    }

    lastScroll = currentScroll;
});