//Validação e reset do formulário
const formulario = document.getElementById('formulario-contato');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    alert('Pedido enviado com sucesso!');

    formulario.reset();
    
});