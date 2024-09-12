let elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach(function (duvida) { // Executando função para cada elemento
    duvida.addEventListener('click', function () { // Esperamos o evento de clique
        duvida.classList.toggle('ativa'); // Adicionamos a classe "ativa" caso não exista no elemento, e a removemos caso exista
    });
});

