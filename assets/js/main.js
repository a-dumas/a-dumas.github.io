(function(){
  const btn = document.querySelector('.nav-toggle');
  const list = document.getElementById('navlist');
  if (btn && list){
    btn.addEventListener('click', () => {
      const isOpen = list.getAttribute('data-open') === 'true';
      list.setAttribute('data-open', String(!isOpen));
      btn.setAttribute('aria-expanded', String(!isOpen));
    });

    // close menu when clicking a link (mobile)
    list.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        list.setAttribute('data-open', 'false');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
