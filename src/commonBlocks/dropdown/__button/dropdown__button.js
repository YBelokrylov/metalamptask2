let dropdownLines = document.querySelectorAll('.dropdown__line');

for (let dropdownLine of dropdownLines) {
  let dropdownButtons = dropdownLine.querySelectorAll('.dropdown__button');
  let dropdownValue = dropdownLine.querySelector('.dropdown__value');

  dropdownButtons[0].addEventListener('click', function () {
    dropdownValue.textContent = Number(dropdownValue.textContent) - 1;
    if (dropdownValue.textContent === '0') {
      dropdownButtons[0].setAttribute('disabled', 'disabled');
    }
  });

  dropdownButtons[1].addEventListener('click', function () {
    dropdownValue.textContent = Number(dropdownValue.textContent) + 1;
    if (!(dropdownValue.textContent === '0') && dropdownButtons[0].hasAttribute('disabled')) {
      dropdownButtons[0].removeAttribute('disabled');
    }
  });
}

