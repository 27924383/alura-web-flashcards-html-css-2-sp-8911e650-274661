// Script simples para feedback de foco nos cartões
document.addEventListener('DOMContentLoaded', () => {
    const cartoes = document.querySelectorAll('.cartao');
    cartoes.forEach(cartao => {
        cartao.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                cartao.classList.toggle('virado');
            }
        });
    });
});
