window.revelar = ScrollReveal({reset:true});

//Efeiro reveal dos textos e imagens
revelar.reveal('.efeito-txt-section',{
    duration: 2000,
    distance: '90px'
});

revelar.reveal('.efeito-img-section',{
    duration: 2000,
    distance: '90px',
    delay: 500
});

/*Efeito reveal dos cards de planos*/
revelar.reveal('.efeito-plan-cards',{
    duration: 2000,
    distance: '80px'
});

/*Efeito reveal das cards de ferramentas */
revelar.reveal('.efeito-box-left1',{
    duration: 2000,
    distance: '100px',
    origin: 'left'
});

revelar.reveal('.efeito-box-left2',{
    duration: 2000,
    distance: '100px',
    origin: 'left',
    delay: 1000
});

revelar.reveal('.efeito-box-left3',{
    duration: 2000,
    distance: '100px',
    origin: 'left',
    delay: 1500,
});

revelar.reveal('.efeito-box-right1',{
    duration: 2000,
    distance: '100px',
    origin: 'right'
});

revelar.reveal('.efeito-box-right2',{
    duration: 2000,
    distance: '100px',
    origin: 'right',
    delay: 1000
});

revelar.reveal('.efeito-box-right3',{
    duration: 2000,
    distance: '100px',
    origin: 'right',
    delay: 1500
});