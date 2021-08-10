let inputForms = document.querySelectorAll('.input-form');

for (let inputForm of inputForms) {
  let inputFormBox = inputForm.querySelector('.input-form__box');

  inputForm.addEventListener('click', addClassFocus(inputFormBox));
  document.addEventListener('click', removeClassFocus(inputForm, inputFormBox));
}

function addClassFocus(element) {
  return function () {
    element.classList.add('input-form__box_focused');
  }
}

function removeClassFocus(element, box) {

  return function (e) {
    let target = e.target;
    let ArrowButton = element.querySelector('.text-form__arrow');

    let itsElement = target == element || element.contains(target);
    let itsArrowButton;
    if (itsArrowButton) {
      itsArrowButton = ArrowButton.contains(target);
    }

    if (!itsElement || itsArrowButton) {
      box.classList.remove('input-form__box_focused');
    }
  };
}


