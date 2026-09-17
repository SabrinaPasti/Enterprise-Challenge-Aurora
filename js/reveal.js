window.revelar = ScrollReveal({
    reset: false,
    duration: 700,
    distance: '40px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    viewFactor: 0.15
});

//Efeiro reveal dos textos e imagens
revelar.reveal('.efeito-txt-section');

revelar.reveal('.efeito-img-section', {
    delay: 150
});

/*Efeito reveal dos cards de planos*/
revelar.reveal('.efeito-plan-cards');

/*Efeito reveal das cards de ferramentas */
revelar.reveal('.efeito-box-left1', {
    origin: 'left'
});

revelar.reveal('.efeito-box-left2', {
    origin: 'left',
    delay: 120
});

revelar.reveal('.efeito-box-left3', {
    origin: 'left',
    delay: 240
});

revelar.reveal('.efeito-box-right1', {
    origin: 'right'
});

revelar.reveal('.efeito-box-right2', {
    origin: 'right',
    delay: 120
});

revelar.reveal('.efeito-box-right3', {
    origin: 'right',
    delay: 240
});

//Fade in genérico para o restante das seções (sem efeito de origem lateral)
const fadeInEls = document.querySelectorAll('.fade-in');

if (fadeInEls.length) {
    if ('IntersectionObserver' in window) {
        const fadeInObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });

        fadeInEls.forEach((el) => fadeInObserver.observe(el));
    } else {
        fadeInEls.forEach((el) => el.classList.add('is-visible'));
    }
}