let expandableCheckbox = document.querySelector('.checkbox_expandable');

let checkboxHeader = expandableCheckbox.querySelector('.checkbox__header');
let expandMore = expandableCheckbox.querySelector('.checkbox__expand-more');
let checkboxList = expandableCheckbox.querySelector('.checkbox__list');

checkboxHeader.addEventListener('click', toggleList);

function toggleList() {
  expandMore.classList.toggle('checkbox__expand-more_close');
  checkboxList.classList.toggle('checkbox__list_hidden');
}



