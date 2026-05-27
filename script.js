// Aguarda o documento HTML carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão através do ID
    const botaoSaibaMais = document.getElementById("btnSaibaMais");

    // Adiciona um evento de clique ao botão
    botaoSaibaMais.addEventListener("click", function() {
        // Faz a página rolar suavemente até a seção de práticas
        document.getElementById("praticas").scrollIntoView({ 
            behavior: "smooth" 
        });
    });
});