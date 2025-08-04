document.querySelectorAll('.bx-heart, .bxs-heart').forEach(icon => {
    icon.addEventListener('click', function (e) {
      e.preventDefault(); 

      if (this.classList.contains('bx-heart')) {
        this.classList.remove('bx-heart');
        this.classList.add('bxs-heart');
      } else {
        this.classList.remove('bxs-heart');
        this.classList.add('bx-heart');
      }
    });
  });

  // seta dos market  ____________________________________________________________
  const container = document.querySelector('.container-wrapper');
  const btnLeft = document.querySelector('.arrow.left');
  const btnRight = document.querySelector('.arrow.right');

  const scrollAmount = 270;

  btnLeft.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  btnRight.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

// box do menu ________________________________________________________________________________
var menuItems = document.querySelectorAll('.menu li');
  var contents = document.querySelectorAll('.menu-content');

  menuItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      var target = item.getAttribute('data-menu');
      contents.forEach(function(c) {
        c.style.display = 'none';
      });
      document.getElementById('menu-' + target).style.display = 'block';
    });
  });