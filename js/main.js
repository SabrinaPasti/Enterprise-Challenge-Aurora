// carroussel   

document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        focus: 'center',

        autoWidth: true,

        gap: '40px',

        pagination: true,
        arrows: true,

        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
        pauseOnFocus: false,
        speed: 1200,

        drag: true,
    }).mount();


});


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

function updateHeaderOffset() {
    const header = document.querySelector('header');
    if (!header) return;
    const wasScrolled = header.classList.contains('scrolled');
    header.classList.remove('scrolled');
    const offset = header.offsetHeight + 16;
    header.classList.toggle('scrolled', wasScrolled);
    document.documentElement.style.setProperty('--header-offset', `${offset}px`);
}

window.addEventListener('load', updateHeaderOffset);
window.addEventListener('resize', updateHeaderOffset);
document.addEventListener('DOMContentLoaded', updateHeaderOffset);

document.addEventListener('DOMContentLoaded', function () {
    const fabMenu = document.getElementById('fabMenu');
    const fabToggle = document.getElementById('fabToggle');

    if (!fabMenu || !fabToggle) return;

    const fabItems = fabMenu.querySelectorAll('.fab-item');

    function setOpen(isOpen) {
        fabMenu.classList.toggle('open', isOpen);
        fabToggle.setAttribute('aria-expanded', String(isOpen));
    }

    fabToggle.addEventListener('click', () => {
        setOpen(!fabMenu.classList.contains('open'));
    });

    fabItems.forEach((item) => {
        item.addEventListener('click', () => setOpen(false));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setOpen(false);
    });

    document.addEventListener('click', (event) => {
        if (!fabMenu.contains(event.target)) setOpen(false);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const formSection = document.getElementById('contact-form-section');
    if (!formSection) return;

    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
