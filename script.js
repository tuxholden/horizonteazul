// Ano automático no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Esconde o placeholder quando a imagem da capa existir
const capaImg = document.getElementById('capaImg');
const capa = capaImg.parentElement;
function capaOk(){ capa.classList.add('carregada'); }
if (capaImg.complete && capaImg.naturalWidth > 0) capaOk();
else capaImg.addEventListener('load', capaOk);

// FAQ: abre uma pergunta por vez
document.querySelectorAll('.faq details').forEach(d => {
  d.addEventListener('toggle', () => {
    if (d.open) document.querySelectorAll('.faq details').forEach(o => { if (o !== d) o.open = false; });
  });
});
