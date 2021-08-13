let textForms = document.querySelectorAll('.text-form');

for (let textForm of textForms) {
  let inputFormBox = textForm.querySelector('.input-form__box');

  textForm.addEventListener('click', addClassFocus(inputFormBox));
  document.addEventListener('click', removeClassFocus(textForm, inputFormBox));
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
    if (ArrowButton) {
      itsArrowButton = ArrowButton.contains(target);
    }

    if (!itsElement || itsArrowButton) {
      box.classList.remove('input-form__box_focused');
    }
  };
}