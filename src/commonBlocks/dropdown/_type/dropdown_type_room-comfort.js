import '../__button/dropdown__button'

let dropdown = document.querySelector('.dropdown_type_room-comfort');
let dropdownTitle = dropdown.querySelector('.dropdown__input');
let dropdownButtons = dropdown.querySelectorAll('.dropdown__button');
let dropdownValues = dropdown.querySelectorAll('.dropdown__value');

for (let dropdownButton of dropdownButtons) {
  dropdownButton.addEventListener('click', function () {
    let bedroomsTitle;
    let bedTitle;
    let bedrooms = ['спальня, ', 'спальни, ', 'спален, '];
    let bed = ['кровать...', 'кровати...', 'кроватей...'];

    if (Number(dropdownValues[0].textContent) % 10 === 1 && Number(dropdownValues[0].textContent) !== 11) {
      bedroomsTitle = dropdownValues[0].textContent + ' ' + bedrooms[0];
    } else if (Number(dropdownValues[0].textContent) % 10 === 0 || (Number(dropdownValues[0].textContent) > 4 && Number(dropdownValues[0].textContent) < 22)) {
      bedroomsTitle = dropdownValues[0].textContent + ' ' + bedrooms[2];
    } else {
      bedroomsTitle = dropdownValues[0].textContent + ' ' + bedrooms[1];
    }

    if (Number(dropdownValues[1].textContent) % 10 === 1 && Number(dropdownValues[1].textContent) !== 11) {
      bedTitle = dropdownValues[1].textContent + ' ' + bed[0];
    } else if (Number(dropdownValues[1].textContent) % 10 === 0 || (Number(dropdownValues[1].textContent) > 4 && Number(dropdownValues[1].textContent) < 22)) {
      bedTitle = dropdownValues[1].textContent + ' ' + bed[2];
    } else {
      bedTitle = dropdownValues[1].textContent + ' ' + bed[1];
    }

    dropdownTitle.textContent = bedroomsTitle + bedTitle;
  });
}