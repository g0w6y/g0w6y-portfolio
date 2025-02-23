function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.querySelector('.menu-toggle');
  const isActive = menuToggle.classList.contains('active');

  sidebar.style.left = isActive ? "-260px" : "0px";
  menuToggle.classList.toggle('active');
}

const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', toggleSidebar);

document.addEventListener('click', (event) => {
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.querySelector('.menu-toggle');

  if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
    sidebar.style.left = "-260px";
    menuToggle.classList.remove('active');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});