document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const logo = document.getElementById('logo');
    const hamburger = document.getElementById('hamburger-icon');
    const dropdown = document.getElementById('dropdown-menu');
    const cerrar = document.getElementById('cerrar');

    // Cambiar el logo al hacer scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            logo.src = 'img/logoMenu.png'; // Cambia el logo al hacer scroll
        } else {
            header.classList.remove('scrolled');
            logo.src = 'img/Frame.png'; // Logo inicial
        }
    });

    // Abrir el menú hamburguesa
    hamburger.addEventListener('click', function () {
        dropdown.classList.add('visible');
    });

    // Cerrar el menú hamburguesa
    cerrar.addEventListener('click', function () {
        dropdown.classList.remove('visible');
    });
});

//SLIDER
document.addEventListener('DOMContentLoaded', function () {
    const texts = [
        {
            time: '2 hs',
            message: '📌<span class="hashtag">#OportunidadLaboral</span> Llamado abierto para sumarse al equipo de <a href="https://www.boronstudio.com/" class="link">@Boronstudio</a> master digital.👩‍💻👨‍💻 Más información 👉<a href="https://www.linkedin.com/company/boronstudio/" class="link">https://bit.ly/2OobIHS</a>'
        },
        {
            time: '3 hs',
            message: '🎉<span class="hashtag">#NuevoProyecto</span> Estamos emocionados de anunciar un nuevo proyecto en <a href="https://www.boronstudio.com/" class="link">@Boronstudio</a>. Más información 👉<a href="https://www.linkedin.com/company/boronstudio/" class="link">https://bit.ly/3QooIHS</a>'
        },
        {
            time: '4 hs',
            message: '🚀<span class="hashtag">#Innovación</span> Sumate al equipo de <a href="https://www.boronstudio.com/" class="link">@Boronstudio</a> en nuestro próximo gran desafío. Más información 👉<a href="https://www.linkedin.com/company/boronstudio/" class="link">https://bit.ly/4RooIHS</a>'
        }
    ];

    let currentIndex = 0;

    const timeElement = document.getElementById('time');
    const messageElement = document.getElementById('mensaje');

    function updateText(index) {
        timeElement.textContent = texts[index].time;
        messageElement.innerHTML = texts[index].message;
    }

    document.getElementById('rowLeft').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + texts.length) % texts.length;
        updateText(currentIndex);
    });

    document.getElementById('rowRight').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % texts.length;
        updateText(currentIndex);
    });
});

//REPOSITORIO
document.querySelectorAll('.section .title').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const imgSrc = this.getAttribute('data-image');
        document.getElementById('hover-img').src = imgSrc;
        document.querySelector('.hover-image').style.display = 'block';
    });

    item.addEventListener('mouseleave', function() {
        document.querySelector('.hover-image').style.display = 'none';
    });
});