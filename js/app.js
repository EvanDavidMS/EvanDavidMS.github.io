document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, { threshold: 0.25 });

  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    observer.observe(section);
    if (index % 2 === 0) {
      section.classList.add('from-left');
    } else {
      section.classList.add('from-right');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a[href^="#"]');

  for (const link of links) {
    link.addEventListener('click', smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
});
