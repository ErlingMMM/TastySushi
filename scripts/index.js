import SushiModule from './menu.js'

const sushisSection = document.querySelector("#sushi-section");


let htmlTxt = "";
SushiModule.getAllSushi().forEach(sushi => {
    //Endret størrelse på h3 tag til size x
    htmlTxt += `
    <article class="column is-3">
    <div class="card">
    <section class="card-image">
    <img src="images/food/${sushi.image}">
    </section>
    <section class="card-content">
    <h3>${sushi.title}</h3>
    </section>
    <section class="card-content">
    <h3>${sushi.category} </h3>
    </section>
    <section class="card-content has-text-right">
    <button class="button is-static is-danger is-rounded">${sushi.price} Kroner</button>
    </section>
    </div>
    </article>
   `;
});

sushisSection.innerHTML = htmlTxt;

