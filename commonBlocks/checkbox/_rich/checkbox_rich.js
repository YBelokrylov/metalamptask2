let richCheckbox = document.querySelector('.checkbox_rich');

let checkboxHeader = richCheckbox.querySelector('.checkbox__header');
let expandMore = richCheckbox.querySelector('.checkbox__expand-more');
let checkboxList = richCheckbox.querySelector('.checkbox__list');

checkboxHeader.addEventListener('click', toggleList);

function toggleList() {
  expandMore.classList.toggle('checkbox__expand-more_close');
  checkboxList.classList.toggle('checkbox__list_hidden');
}



