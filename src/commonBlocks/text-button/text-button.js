let textButtons = document.querySelectorAll('.text-button');

function toggleClass(element) {
  return function () {
    element.classList.toggle('text_color_purple');
    element.classList.toggle('text_dark-shade_50');
  };
};

for (let button of textButtons) {
  button.addEventListener('mousedown', toggleClass(button));
  button.addEventListener('mouseup', toggleClass(button));
}