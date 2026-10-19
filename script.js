const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');
const printCv = document.getElementById('printCv');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeToggle.textContent = isDark ? '☀' : '☾';
  themeToggle.setAttribute('aria-label', isDark ? 'Aktifkan tema terang' : 'Aktifkan tema gelap');
});

printCv.addEventListener('click', () => {
  window.print();
});

// Kontak sengaja dikosongkan. Ganti teks placeholder dan href pada index.html
// setelah kamu siap menambahkan alamat email, nomor WhatsApp, atau tautan media sosial.
document.querySelectorAll('.editable-contact').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});
                        
