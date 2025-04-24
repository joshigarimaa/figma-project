document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      document.querySelectorAll('.project-box').forEach(box => {
        if (filter === 'all' || box.classList.contains(filter)) {
          box.style.display = 'block';
        } else {
          box.style.display = 'none';
        }
      });
    });
  });
function typeWriter(element, text, speed = 100) {
    let i = 0;
    const typing = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    };
    typing();
  }
  
  const nameEl = document.getElementById("hero-name");
  typeWriter(nameEl, "Hi, I'm Garima Joshi", 100);