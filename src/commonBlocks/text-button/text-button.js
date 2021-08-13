let textButtons = document.querySelectorAll('.text-button');

function toggleClass(element) {
  return function () {
    element.classList.toggle('text-bold_color_purple');
    element.classList.toggle('text-bold_color_gray');
  };
};

for (let button of textButtons) {
  button.addEventListener('mousedown', toggleClass(button));
  button.addEventListener('mouseup', toggleClass(button));
}