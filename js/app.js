// app.js

document.addEventListener('DOMContentLoaded', function () {
    // Crear el IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, { threshold: 0.1 }); // Se activará cuando al menos el 10% del elemento esté visible
  
    // Seleccionar todas las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  