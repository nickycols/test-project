
    // Dark Mode Toggle
    document.addEventListener('DOMContentLoaded', function() {
    const darkToggle = document.getElementById('darkModeToggle');
    darkToggle.onclick = () => {
      document.documentElement.classList.toggle('dark'); // toggle class di <html>
    };

    // Modal
    document.querySelectorAll('main img').forEach(img => {
      img.addEventListener('click', function() {
        document.getElementById('modalImg').src = this.src;
        document.getElementById('imageModal').classList.remove('hidden');
      });
    });
    document.getElementById('closeModal').onclick = function() {
      document.getElementById('imageModal').classList.add('hidden');
    };
    document.getElementById('imageModal').onclick = function(e) {
      if (e.target === this) this.classList.add('hidden');
    };

    // Scroll-to-top
    const scrollBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        scrollBtn.classList.remove('hidden');
      } else {
        scrollBtn.classList.add('hidden');
      }
    });
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    });