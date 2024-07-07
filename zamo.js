

let currentRok = new Date().getFullYear();

let rokNaStranke = document.getElementById('copyright');
rokNaStranke.textContent = currentRok;

console.log(currentRok);


let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Downscroll
        navbar.style.top = '-60px'; // Adjust this value based on your navbar height
    } else {
        // Upscroll
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
