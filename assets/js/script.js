const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

function updateHeader() {
  if (header) header.classList.toggle('scrolled', window.scrollY > 24);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

function closeMenu() {
  if (!menu || !menuButton) return;
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

if (menu && menuButton) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
}
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

const page = document.body.dataset.page;
document.querySelectorAll('[data-nav]').forEach(link => {
  if (link.dataset.nav === page) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible'));
}

document.querySelectorAll('[data-current-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

const params = new URLSearchParams(window.location.search);
const motivo = params.get('motivo');
const motivoSelect = document.querySelector('[data-motivo]');
if (motivo && motivoSelect) {
  const option = [...motivoSelect.options].find(item => item.value === motivo || item.text === motivo);
  if (option) motivoSelect.value = option.value;
}

document.querySelectorAll('[data-mail-form]').forEach(form => {
  const status = form.querySelector('[data-form-status]');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.checkValidity()) {
      if (status) status.textContent = 'Completa los campos obligatorios antes de continuar.';
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const lines = [];
    data.forEach((value, key) => lines.push(`${key}: ${value}`));
    const subject = encodeURIComponent(form.dataset.subject || 'Contacto desde la web');
    const body = encodeURIComponent(lines.join('\n'));
    if (status) status.textContent = 'Abriendo tu aplicación de correo…';
    window.location.href = `mailto:infosonriecorazon@gmail.com?subject=${subject}&body=${body}`;
  });
});

const filterButtons = document.querySelectorAll('[data-filter]');
const galleryItems = document.querySelectorAll('[data-category]');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    galleryItems.forEach(item => {
      item.classList.toggle('is-hidden', filter !== 'all' && item.dataset.category !== filter);
    });
  });
});
