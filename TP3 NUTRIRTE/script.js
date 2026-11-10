
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    menuToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.textContent = open ? '✕' : '☰';
    });
    mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    }));
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('contactForm').addEventListener('submit', event => {
      event.preventDefault();
      const note = document.getElementById('formNote');
      note.textContent = '¡Gracias por tu consulta! Este formulario es una maqueta: para recibir mensajes reales hay que conectarlo a un correo o servicio de formularios.';
      event.target.reset();
    });
 