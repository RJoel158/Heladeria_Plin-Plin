$('#mainCarousel').carousel({
  interval: 4000,   
  pause: 'hover',
  ride: 'carousel'
});

// IntersectionObserver para animación "fade-up" y stagger
document.addEventListener('DOMContentLoaded', function(){
  const cards = document.querySelectorAll('.product-card');
  if (!('IntersectionObserver' in window)) {
    // fallback: simplemente hacer visibles
    cards.forEach(c => c.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const el = entry.target;
        const index = parseInt(el.dataset.index || 0, 10);
        // stagger: delay en la adición de clase según index
        setTimeout(() => el.classList.add('in-view'), index * 80);
        // ya no observar después de entrar
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.16 });

  cards.forEach(c => observer.observe(c));
});

