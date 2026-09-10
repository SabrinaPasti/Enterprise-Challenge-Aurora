//Scroll para a seção do contato após o click
const botaoPlatform1 = document.getElementById('agendar-btn-first-section');
const botaoPlatform2 = document.getElementById('agendar-btn-third-section');
const botaoPlatform3 = document.getElementById('agendar-btn-fourth-section');

const botaoPlano1 = document.getElementById('border-rosa');
const botaoPlano2 = document.getElementById('border-roxo');

const secaoContato = document.getElementById('contact-form-section');

botaoPlatform1.addEventListener('click', function() {
    secaoContato.scrollIntoView({
        behavior: 'smooth'
    });
});

botaoPlatform2.addEventListener('click', function() {
    secaoContato.scrollIntoView({
        behavior: 'smooth'
    });
});

botaoPlatform3.addEventListener('click', function() {
    secaoContato.scrollIntoView({
        behavior: 'smooth'
    });
});

botaoPlano1.addEventListener('click', function() {
    secaoContato.scrollIntoView({
        behavior: 'smooth'
    });
});

botaoPlano2.addEventListener('click', function() {
    secaoContato.scrollIntoView({
        behavior: 'smooth'
    });
});