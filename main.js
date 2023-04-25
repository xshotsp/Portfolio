
  // Botones
  let botones = document.querySelectorAll('.boton a');
  botones.forEach(boton => {
    boton.addEventListener('click', function(event) {
      event.preventDefault(); // Evita que se siga el enlace del botón
  
      let seccion = document.querySelector(this.getAttribute('href'));
      seccion.scrollIntoView({behavior: 'smooth'}); // Desplaza suavemente hasta la sección correspondiente
    });
  });
  
  // Función que se ejecuta cuando se hace clic en uno de los botones del menú
function smoothScroll(target) {
  // Obtener la sección a la que se quiere hacer scroll
  const section = document.querySelector(target);

  // Hacer scroll suave hacia la sección correspondiente
  section.scrollIntoView({
    behavior: 'smooth'
  });
}

// Escuchar los clics en los botones del menú y hacer scroll suave hacia la sección correspondiente
const aboutBtn = document.querySelector('#aboutBtn');
aboutBtn.addEventListener('click', () => {
  smoothScroll('#about');
});

const projectsBtn = document.querySelector('#projectsBtn');
projectsBtn.addEventListener('click', () => {
  smoothScroll('#projects');
});

const contactBtn = document.querySelector('#contactBtn');
contactBtn.addEventListener('click', () => {
  smoothScroll('#contact');
});