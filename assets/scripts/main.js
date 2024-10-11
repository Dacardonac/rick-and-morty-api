const main = document.querySelector('main');
let cards = document.createElement('section');
cards.classList.add('cards');
main.appendChild(cards);

const URL = "https://rickandmortyapi.com/api/character/?page=";
let currentPage = 1;

let paginationContainer = document.createElement('div');
paginationContainer.classList.add('pagination');
main.appendChild(paginationContainer);

let prevButton = document.createElement('button');
prevButton.textContent = "Previus";
prevButton.classList.add('pagination__prev');
prevButton.classList.add('pagination__button');
prevButton.disabled = true;
paginationContainer.appendChild(prevButton);

let nextButton = document.createElement('button');
nextButton.textContent = "Next";
nextButton.classList.add('pagination__next');
nextButton.classList.add('pagination__button');
paginationContainer.appendChild(nextButton);

async function getData(page) {
    const response = await fetch(URL + page);
    const data = await response.json();

    cards.innerHTML = '';

    data.results.forEach(character => {
      printCards(character);
    });

    prevButton.disabled = page === 1;
    nextButton.disabled = !data.info.next;
}

function printCards(character) {
  let card = document.createElement('article');
  card.classList.add('card');

  let image = document.createElement('img');
  image.classList.add('card__image');
  image.src = character.image;
  image.alt = character.name + ' image';

  let textContainer = document.createElement('div');
  textContainer.classList.add('card__text');

  let title = document.createElement('h2');
  title.classList.add('card__title');
  title.textContent = character.name;

  let species = document.createElement('p');
  species.classList.add('card__species');
  species.textContent = character.species;

  let status = document.createElement('p');
  status.classList.add('card__status');
  status.textContent = character.status;

  if (character.status === 'Alive') {
    status.classList.add('alive');
  } else if (character.status === 'Dead') {
    status.classList.add('dead');
  } else {
    status.classList.add('unknown');
  }

  textContainer.appendChild(title);
  textContainer.appendChild(species);
  textContainer.appendChild(status);

  card.appendChild(image);
  card.appendChild(textContainer);

  cards.appendChild(card);
}

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    getData(currentPage);
  }
});

nextButton.addEventListener('click', () => {
  currentPage++;
  getData(currentPage)
});

getData(currentPage);