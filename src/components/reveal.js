export function initReveal(){
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        const el = e.target;
        const d = parseInt(el.dataset.delay||0);
        setTimeout(()=> el.classList.add('is-visible'), d);
        obs.unobserve(el);
      }
    });
  }, {threshold:0.12});
  els.forEach(el => obs.observe(el));
}
