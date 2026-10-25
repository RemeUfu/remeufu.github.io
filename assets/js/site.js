// Menu no celular
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Ampliar fotos das galerias
const dialog = document.createElement('dialog');
dialog.className = 'lightbox';
dialog.innerHTML = '<button type="button" aria-label="Fechar">×</button><img alt=""><p></p>';
document.body.appendChild(dialog);
dialog.querySelector('button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });

document.querySelectorAll('.gallery button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const caption = btn.closest('figure')?.querySelector('figcaption');
    dialog.querySelector('img').src = btn.dataset.full || img.src;
    dialog.querySelector('img').alt = img.alt;
    dialog.querySelector('p').textContent = caption ? caption.textContent : '';
    dialog.showModal();
  });
});

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
