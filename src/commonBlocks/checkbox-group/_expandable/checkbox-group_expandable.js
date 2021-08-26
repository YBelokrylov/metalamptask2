let expandableCheckbox = document.querySelector('.checkbox-group_expandable');

let checkboxHeader = expandableCheckbox.querySelector('.checkbox-group__header');
let expandMore = expandableCheckbox.querySelector('.checkbox-group__expand-more');
let checkboxList = expandableCheckbox.querySelector('.checkbox-group__list');

checkboxHeader.addEventListener('click', toggleList);

function toggleList() {
  expandMore.classList.toggle('checkbox-group__expand-more_close');
  checkboxList.classList.toggle('checkbox-group__list_hidden');
}



