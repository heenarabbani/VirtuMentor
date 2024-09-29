function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
    
    // Optional: Animate menu icon bars
    const bars = document.querySelectorAll('.menu-icon .bar');
    bars.forEach((bar) => {
      bar.classList.toggle('animate');
    });
  }