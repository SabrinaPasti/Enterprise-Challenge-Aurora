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
