const TAMANHO_PADRAO = 16;

let tamanho = parseInt(
    localStorage.getItem('fonte') || TAMANHO_PADRAO
);

aplicarFonte();

document.getElementById('aumentar').onclick = () => {
    tamanho += 2;
    aplicarFonte();
};

document.getElementById('diminuir').onclick = () => {
    tamanho -= 2;
    aplicarFonte();
};

document.getElementById('resetar').onclick = () => {
    tamanho = TAMANHO_PADRAO;
    aplicarFonte();
};

function aplicarFonte() {
    tamanho = Math.max(12, Math.min(32, tamanho)); // Limites
    document.documentElement.style.fontSize = tamanho + 'px';
    localStorage.setItem('fonte', tamanho);
}