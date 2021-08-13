let dropdown = document.querySelector('.dropdown_type_guests');
let dropdownTitle = dropdown.querySelector('.dropdown__input');
let dropdownValues = dropdown.querySelectorAll('.dropdown__value');
const dropdownTitleDefaultValue = dropdownTitle.textContent;
let clearForm = dropdown.querySelector('.dropdown__clear-form');
let confirmForm = dropdown.querySelector('.dropdown__confirm-form');
let dropdownButtons = dropdown.querySelectorAll('.dropdown__button');

clearForm.addEventListener('click', function () {
  for (let dropdownValue of dropdownValues) {
    dropdownValue.textContent = '0';
  }

  dropdownTitle.textContent = dropdownTitleDefaultValue;
  clearForm.classList.add('text-button_disabled');

  for (let dropdownButton of dropdownButtons) {
    if (dropdownButton.getAttribute('name') === 'value-decrease') {
      dropdownButton.setAttribute('disabled', 'disabled');
    }
  }
});

confirmForm.addEventListener('click', function () {
  let adults = Number(dropdownValues[0].textContent);
  let children = Number(dropdownValues[1].textContent);

  let babiesStr;
  let babies = Number(dropdownValues[2].textContent);

  let guestsStr;
  let numberOfGuests = adults + children;

  if (numberOfGuests === 0 || (numberOfGuests > 4 && numberOfGuests < 20)) {
    guestsStr = String(numberOfGuests) + ' гостей';
  } else if (numberOfGuests % 10 === 1 && numberOfGuests !== 11) {
    guestsStr = String(numberOfGuests) + ' гость';
  } else {
    guestsStr = String(numberOfGuests) + ' гостя';
  }

  if (babies === 0) {
    babiesStr = '';
  } else if (babies % 10 === 1 && babies !== 11) {
    babiesStr = ', ' + String(babies) + ' младенец';
  } else if (babies > 4 && babies < 20) {
    babiesStr = ', ' + String(babies) + ' младенцев';
  } else {
    babiesStr = ', ' + String(babies) + ' младенца';
  }

  dropdownTitle.textContent = guestsStr + babiesStr;

  clearForm.classList.remove('text-button_disabled');
});