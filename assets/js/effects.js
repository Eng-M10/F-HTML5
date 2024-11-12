// Alguns efeitos para a página 
function toggleContent(event) {
    event.preventDefault(); // Evita que o link recarregue a página
    
  
    const mainContent = event.target.closest('.main-content');
    const paragrafoHidden = mainContent.querySelector('.paragrafo-hidden');
    const treedots = mainContent.querySelector('.treedots');

    const link = event.target;
    
    const isHidden = paragrafoHidden.style.display === 'none';

    paragrafoHidden.style.display = isHidden ? 'block' : 'none';

    treedots.style.display = isHidden ? 'none' : 'block';
    link.textContent = isHidden ? 'Ver menos' : 'Ver mais';
    }
