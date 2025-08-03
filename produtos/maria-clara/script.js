// imagem fica seleciona na area que estiver___________________________________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  const imagensGrandes = document.querySelectorAll(".grande img");
  const imagensMenores = document.querySelectorAll(".menores img");

  function verificarImagemVisivel() {
    imagensGrandes.forEach((imgGrande) => {
      const rect = imgGrande.getBoundingClientRect();
      const index = imgGrande.getAttribute("data-index");

      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        imagensMenores.forEach((imgMenor) =>
          imgMenor.classList.remove("selecionada")
        );

        const imgMenorCorrespondente = document.querySelector(
          `.menores img[data-index="${index}"]`
        );
        if (imgMenorCorrespondente) {
          imgMenorCorrespondente.classList.add("selecionada");
        }
      }
    });
  }

  function scrollToImagemGrande(index) {
    const imgGrande = document.querySelector(
      `.grande img[data-index="${index}"]`
    );
    if (imgGrande) {
      window.scrollTo({
        top: imgGrande.offsetTop,
        behavior: "smooth",
      });
    }
  }

  imagensMenores.forEach((imgMenor) => {
    imgMenor.addEventListener("click", () => {
      const index = imgMenor.getAttribute("data-index");
      scrollToImagemGrande(index);
    });
  });

  window.addEventListener("scroll", verificarImagemVisivel);
  verificarImagemVisivel();
});