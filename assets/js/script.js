'use strict';
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');
function closeMenu(returnFocus = false) {
  if (!menu || !menuButton) return;
  const wasOpen = menu.classList.contains('open');
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('.sr-only').textContent = 'Abrir menú';
  if (wasOpen && returnFocus) menuButton.focus();
}
if (menu && menuButton) {
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.querySelector('.sr-only').textContent = open ? 'Cerrar menú' : 'Abrir menú';
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('click', event => {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(true); });
  window.matchMedia('(min-width:1101px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
}
document.querySelectorAll('[data-current-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
const requestedReason = new URLSearchParams(window.location.search).get('motivo');
const reasonSelect = document.querySelector('[data-motivo]');
if (requestedReason && reasonSelect && [...reasonSelect.options].some(option => option.value === requestedReason)) reasonSelect.value = requestedReason;
document.querySelectorAll('[data-mail-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const body = [...data.entries()].map(([label, value]) => `${label}: ${String(value).trim()}`).join('\n\n');
    const subject = form.dataset.subject || 'Contacto desde la web';
    form.querySelector('[data-form-status]').textContent = 'Mensaje preparado. Revisa y envía el correo en tu aplicación. También puedes escribir a infosonriecorazon@gmail.com o contactarnos por WhatsApp.';
    window.location.href = `mailto:infosonriecorazon@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
const filters = document.querySelectorAll('[data-filter]');
const photos = document.querySelectorAll('[data-category]');
const count = document.querySelector('[data-gallery-count]');
function updateGallery(filter) {
  let visible = 0;
  photos.forEach(photo => { photo.hidden = filter !== 'all' && photo.dataset.category !== filter; if (!photo.hidden) visible++; });
  if (count) count.textContent = `${visible} ${visible === 1 ? 'fotografía' : 'fotografías'} · Selecciona una imagen para ampliarla.`;
  filters.forEach(button => {
    const active = button.dataset.filter === filter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}
filters.forEach(button => button.addEventListener('click', () => updateGallery(button.dataset.filter)));
if (filters.length) updateGallery('all');
const lightbox = document.querySelector('.lightbox');
let opener = null;
if (lightbox) {
  document.querySelectorAll('[data-lightbox]').forEach(button => button.addEventListener('click', () => {
    opener = button;
    const image = lightbox.querySelector('img');
    image.src = button.dataset.lightbox;
    image.alt = button.dataset.caption;
    lightbox.querySelector('p').textContent = button.dataset.caption;
    lightbox.showModal();
  }));
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => {
    if (event.target !== lightbox) return;
    const box = lightbox.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) lightbox.close();
  });
  lightbox.addEventListener('close', () => { if (opener) opener.focus(); });
}
