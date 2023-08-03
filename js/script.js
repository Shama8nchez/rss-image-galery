const main = document.querySelector('.main');
const mainForm = document.forms.mainf;
const searchWord = mainForm.inputf;
const cancel = document.querySelector('.cancel');

async function getResponce(request) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${request}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`
  );
  const data = await response.json();
  main.innerHTML = '';
  for (let i = 0; i < 30; i++) {
    let image = document.createElement('img');
    image.classList.add('gallery');
    image.src = data.results[i].urls.regular;
    image.alt = `image`;
    main.append(image);
  }
}

getResponce('belarus');

function subm(e) {
  let word = searchWord.value;
  getResponce(word);
}

mainForm.addEventListener('submit', subm);

cancel.addEventListener('click', () => {
  searchWord.value = '';
  searchWord.focus();
});