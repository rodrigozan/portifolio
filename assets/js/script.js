document.addEventListener('DOMContentLoaded', () => {

    const headerTitle = document.querySelector('.header-content h1');
    headerTitle.style.opacity = 0;
    headerTitle.style.transform = 'translateX(-50px)'; // Começa 50px à esquerda
    
    setTimeout(() => {
        headerTitle.style.opacity = 1;
        headerTitle.style.transform = 'translateX(0)'; // Move para a posição original
        headerTitle.style.transition = 'opacity 2s, transform 2s'; // Anima ambas as propriedades
    }, 500);

    const headerSlogan = document.querySelector('.header-content p');
    const text = 'Full Stack Developer | UI/UX Designer';
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            headerSlogan.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Ajuste a velocidade conforme necessário
        }
    }

    typeWriter();

    const nav_social = document.querySelector('.header-content .call-to-action .nav-social .ul-social');
    nav_social.style.opacity = 0;
    setTimeout(() => {
        nav_social.style.opacity = 1;
        nav_social.style.transition = 'opacity 2s';
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
