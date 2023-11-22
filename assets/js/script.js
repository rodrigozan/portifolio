document.addEventListener('DOMContentLoaded', () => {

    const header_title = document.querySelector('.header-content h1');
    header_title.style.opacity = 0;
    header_title.style.transform = 'translateX(-50px)'; // Começa 50px à esquerda
    
    setTimeout(() => {
        header_title.style.opacity = 1;
        header_title.style.transform = 'translateX(0)'; // Move para a posição original
        header_title.style.transition = 'opacity 2s, transform 2s'; // Anima ambas as propriedades
    }, 500);

    const header_slogan = document.querySelector('.header-content p');
    const text = "I'm a full stack developer, UI/UX designer and prompt engineer";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            header_slogan.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Ajuste a velocidade conforme necessário
        }
    }

    typeWriter();

    const header_content = document.querySelector('.header-content');
    header_content.style.opacity = 0;
    setTimeout(() => {
        header_content.style.opacity = 1;
        header_content.style.transition = 'opacity 2s';
    }, 500);

    const socialIcons = document.querySelectorAll('.social-item a');
    socialIcons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.opacity = 1;
            icon.style.transition = 'opacity 0.5s ease-in-out';
        }, index * 300); // Atraso aumenta com cada ícone
    });

    const menuLinks = document.querySelectorAll('header nav a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                setTimeout(() => {
                    const nav = document.getElementById('nav-main');
                    nav.classList.add('visible');
                    nav.style.opacity = 1;
                    nav.style.transition = 'opacity 2s';
                    
                }, 1000);
            }
        });
    });

});
