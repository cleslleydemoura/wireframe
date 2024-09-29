document.addEventListener('DOMContentLoaded', function() {
    const toggleCardsBtn = document.getElementById('toggleCardsBtn');
    const cardsContainer = document.getElementById('cardsContainer');

    toggleCardsBtn.addEventListener('click', function() {
      if (toggleCardsBtn.textContent === '+NOTÍCIAS') {
        // Adiciona três cards ao container
        for (let indice = 0; indice < 1; indice++) {
          const card = `
      <div class="col-lg-4 mt-4">
      <div class="card" style="width: 40rem;">
<img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Valle_del_Frances.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <p class="card-text">Floresta subpolar Magalhães.</p>
</div>
</div>
  </div>
  <div class="col-lg-4 mt-4">
    <div class="card" style="width: 40rem;">
<img src="https://yazigitravel.com.br/wp-content/uploads/2019/09/8-motivos-para-conhecer-o-Chile_vale-nevado.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <p class="card-text">O melhor resort de ski do Chile!</p>
</div>
</div>
  </div>
  <div class="col-lg-4 mt-4">
      <div class="card" style="width: 40rem;">
<img src="https://www.estudarfora.org.br/wp-content/uploads/2019/11/chile-1.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <p class="card-text">Notícias de Santiago.</p>
</div>
</div>
    `;
          cardsContainer.insertAdjacentHTML('beforeend', card);
        }

        // Muda o texto do botão para '-noticias'
        toggleCardsBtn.textContent = '-NOTÍCIAS';
      } else {
        // Remove todos os cards do container
        cardsContainer.innerHTML = '';

        // Muda o texto do botão de volta para '+noticias'
        toggleCardsBtn.textContent = '+NOTÍCIAS';
      }
    });
  });