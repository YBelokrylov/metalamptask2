let dropdownElems = document.querySelectorAll('.dropdown');

for (let dropdownElem of dropdownElems) {
  let dropdownHead = dropdownElem.querySelector('.dropdown__head');
  let confirmButton = dropdownElem.querySelector('.dropdown__confirm-form');

  dropdownHead.addEventListener('click', toggleClass(dropdownElem));
  if (confirmButton) {
    confirmButton.addEventListener('click', toggleClass(dropdownElem));
  }

  document.addEventListener('click', removeClass(dropdownElem));
}

function toggleClass(element) {
  return function () {
    element.classList.toggle('dropdown_open');
  };
};

function removeClass(element) {
  return function (e) {
    let target = e.target;
    let its_dropdown = target == element || element.contains(target);
    let dropdown_is_active = element.classList.contains('dropdown_open');

    if (!its_dropdown && dropdown_is_active) {
      element.classList.remove('dropdown_open');
    }
  };
}

