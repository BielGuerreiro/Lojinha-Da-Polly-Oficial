document.querySelectorAll('.bx-heart, .bxs-heart').forEach(icon => {
    icon.addEventListener('click', function (e) {
      e.preventDefault(); // evita que o link recarregue a página

      if (this.classList.contains('bx-heart')) {
        this.classList.remove('bx-heart');
        this.classList.add('bxs-heart');
      } else {
        this.classList.remove('bxs-heart');
        this.classList.add('bx-heart');
      }
    });
  });