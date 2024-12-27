let faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(function (faqQuestion) { // Executando função para cada elemento
    faqQuestion.addEventListener('click', function () { // Esperamos o evento de clique
        faqQuestion.classList.toggle('active'); // Adicionamos a classe "active" caso não exista no elemento, e a removemos caso exista
    });
});

