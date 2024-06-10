let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop + window.innerHeight / 2) {
        // Desplazar suavemente a la siguiente sección si el desplazamiento es hacia abajo
        const currentSection = document.querySelector('.active');
        if (currentSection && currentSection.nextElementSibling) {
            currentSection.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
        }
    } else if (st < lastScrollTop - window.innerHeight / 2) {
        // Desplazar suavemente a la sección anterior si el desplazamiento es hacia arriba
        const currentSection = document.querySelector('.active');
        if (currentSection && currentSection.previousElementSibling) {
            currentSection.previousElementSibling.scrollIntoView({ behavior: 'smooth' });
        }
    }
    lastScrollTop = st <= 0 ? 0 : st; // Para Mobile o Firefox
}, false);
