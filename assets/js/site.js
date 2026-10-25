// Menu no celular
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// Ampliar fotos das galerias, com setas para a anterior e a próxima
const buttons = [...document.querySelectorAll('.gallery button')];
if (buttons.length) {
  const dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.setAttribute('aria-label', 'Foto ampliada');
  dialog.innerHTML =
    '<button type="button" class="lb-close" aria-label="Fechar">×</button>' +
    '<button type="button" class="lb-prev" aria-label="Foto anterior">‹</button>' +
    '<button type="button" class="lb-next" aria-label="Próxima foto">›</button>' +
    '<img alt=""><p></p>';
  document.body.appendChild(dialog);
  const img = dialog.querySelector('img');
  const text = dialog.querySelector('p');
  let group = [];
  let index = 0;

  const show = (i) => {
    index = (i + group.length) % group.length;
    const btn = group[index];
    const thumb = btn.querySelector('img');
    const caption = btn.closest('figure')?.querySelector('figcaption');
    // Mostra a miniatura enquanto a foto grande carrega, para não exibir a foto anterior
    img.src = thumb.currentSrc || thumb.src;
    img.src = btn.dataset.full || thumb.src;
    img.alt = thumb.alt;
    text.textContent = caption ? caption.textContent : '';
    dialog.querySelector('.lb-prev').hidden = group.length < 2;
    dialog.querySelector('.lb-next').hidden = group.length < 2;
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      group = [...btn.closest('.gallery').querySelectorAll('button')];
      show(group.indexOf(btn));
      dialog.showModal();
    });
  });
  dialog.querySelector('.lb-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.lb-prev').addEventListener('click', () => show(index - 1));
  dialog.querySelector('.lb-next').addEventListener('click', () => show(index + 1));
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
}

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
