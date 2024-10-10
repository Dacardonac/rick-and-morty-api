const main = document.querySelector('main');
let cards = document.createElement('section');
cards.classList.add('cards');
main.appendChild(cards);

const url = "https://rickandmortyapi.com/api/character";

async function getData() {
    const response = await fetch(url);
    const data = await response.json();

    data.results.forEach(character => {
      printCards(character)
    });
}

function printCards(character) {
    let card = document.createElement('article');
    card.classList.add('card');

    let image = document.createElement('img');
    image.classList.add('card__image');
    image.src = character.image;
    image.alt = character.name + ' image';

    let title = document.createElement('h2');
    title.classList.add('card__title');
    title.textContent = character.name;

    card.appendChild(image);
    card.appendChild(title);

    cards.appendChild(card);
}

getData();