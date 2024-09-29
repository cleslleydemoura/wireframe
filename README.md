<h1>Modelo de site - WIREFRAME</h1>

```
Para a execução dos icons, é necessário o download da pasta de icons do fontawesome,
sua incrementação dentro do arquivo e sua linkagem dentro do código html: https://fontawesome.com/
```
<p>O site foi feito com o tema 'site de notícias' e o tópico escolhido por mim foi um site de notícias sobre o Chile. Dentro deste wireframe, temos o uso de:</p>
<ul>
  <li>Bootstrap</li>
  <li>Fontawesome</li>
</ul>
<p>Com um modelo prévio de como o site deveria ficar, fiz algumas modificações que creio eu que tornaram o site mais intuítivo e visualmente melhor, como os icons de redes sociais e a navbar para uma melhor navegação do usuário.</p>
<p> Visualização no: <a href="https://codepen.io/cleslley/pen/QWRQGyN" target="_blank">codepen.io</a></p>

![image](https://github.com/cleslleydemoura/wireframe/assets/100368699/b9afaedb-1fa5-471c-ae8f-fdc111e29568)
![image](https://github.com/cleslleydemoura/wireframe/assets/100368699/d91f6e86-0a6c-43ed-87e4-4d8369a4b320)
![image](https://github.com/cleslleydemoura/wireframe/assets/100368699/225a9183-4435-4fb6-89e7-30c5c67a8d7e)

<p>Code preview</p>

```javascript
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
```