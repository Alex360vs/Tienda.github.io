  // Esperar a que el documento esté completamente cargado
  document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el elemento que quieres animar
    const contenido5_1 = document.querySelector('.contenido5_1');

    // Ocultar el elemento al principio
    gsap.set(contenido5_1, { opacity: 0, y: 50 });

    // Función para animar en el scroll
    function animateOnScroll() {
      // Obtener la posición del elemento en relación con la ventana
      const elementPosition = contenido5_1.getBoundingClientRect().top;

      // Obtener la altura de la ventana
      const windowHeight = window.innerHeight;

      // Calcular el punto en el que queremos que comience la animación
      const triggerPosition = windowHeight / 1.3;

      // Verificar si el elemento está en el punto de activación
      if (elementPosition < triggerPosition) {
        // Animar el elemento cuando esté en el punto de activación
        gsap.to(contenido5_1, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out"
        });

        // Eliminar el event listener después de la animación para mejorar el rendimiento
        window.removeEventListener('scroll', animateOnScroll);
      }
    }

    // Escuchar el evento de desplazamiento (scroll) y llamar a la función de animación
    window.addEventListener('scroll', animateOnScroll);

    // Llamar a la función para verificar si el elemento está visible al cargar la página
    animateOnScroll();
  });
  // Esperar a que el documento esté completamente cargado
  document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el elemento que quieres animar
    const contenido5_1 = document.querySelector('.contenido4_1');

    // Ocultar el elemento al principio
    gsap.set(contenido5_1, { opacity: 0, y: 50 });

    // Función para animar en el scroll
    function animateOnScroll() {
      // Obtener la posición del elemento en relación con la ventana
      const elementPosition = contenido5_1.getBoundingClientRect().top;

      // Obtener la altura de la ventana
      const windowHeight = window.innerHeight;

      // Calcular el punto en el que queremos que comience la animación
      const triggerPosition = windowHeight / 1.3;

      // Verificar si el elemento está en el punto de activación
      if (elementPosition < triggerPosition) {
        // Animar el elemento cuando esté en el punto de activación
        gsap.to(contenido5_1, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out"
        });

        // Eliminar el event listener después de la animación para mejorar el rendimiento
        window.removeEventListener('scroll', animateOnScroll);
      }
    }

    // Escuchar el evento de desplazamiento (scroll) y llamar a la función de animación
    window.addEventListener('scroll', animateOnScroll);

    // Llamar a la función para verificar si el elemento está visible al cargar la página
    animateOnScroll();
  });


