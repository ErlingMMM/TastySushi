import SushiModule from './menu.js'

const sushisSection = document.querySelector("#sushi-section");


var input = document.querySelector("#input");
//event er verdi på hva bruker har skrevet inn
input.addEventListener('input', (event) => {
    //console.log(event.target.value);
    sushisSection.innerHTML = "";
    var filter = SushiModule.getAllSushi().filter(obj => obj.category.includes(event.target.value.toLowerCase()))

    filter.forEach(sushi => {
        sushisSection.innerHTML += `
        <article class="column is-5">
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
    //sushisSection.innerHTML = htmlTxt;
})
