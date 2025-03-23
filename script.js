document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = document.querySelector("nav").offsetHeight;
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: "smooth"
            });
        }
    });
});

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var fontSize = 8;
var columns = Math.floor(W / fontSize);
var drops = new Array(columns).fill(0);
var str = "abcdefghijklmnopqrstuvwxyz";

function draw() {
    context.fillStyle = "rgba(0,0,0,0.05)";
    context.fillRect(0, 0, W, H);
    context.font = fontSize + "px monospace";
    context.fillStyle = "#00cc33";

    for (var i = 0; i < columns; i++) {
        var index = Math.floor(Math.random() * str.length);
        var x = i * fontSize;
        var y = drops[i] * fontSize;
        context.fillText(str[index], x, y);

        if (y >= canvas.height && Math.random() > 0.99) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 35);

window.addEventListener('resize', function () {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    columns = Math.floor(W / fontSize);
    drops = new Array(columns).fill(0);
});

var typed = new Typed(".intro", {
    strings: ["Hello, I'm Darsh Kulthia..."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: false
});

var typed = new Typed(".intro-2", {
    strings: ["Full Stack Developer...", "Creator...", "Technophile...", "Passionate Developer...", "Tech Enthusiast...", "Web Developer...", "Creative Coder...", "UI/UX Designer...", "Problem Solver..."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed = new Typed(".about-me", {
    strings: ["Hey there! I'm Darsh Kulthia, a passionate full stack developer with a knack for turning ideas into interactive and visually stunning experiences. I thrive on the challenge of creating seamless, user-friendly interfaces that bridge design and functionality."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: false
});
