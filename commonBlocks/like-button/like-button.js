let buttons = document.querySelectorAll('.like-button');

for (let button of buttons) {
  let likeButtonHeart = button.querySelector('.like-button__heart');
  let likeButtonCount = button.querySelector('.like-button__count');

  button.addEventListener('click', function () {
    if (button.dataset.isPressed === 'true') {
      button.classList.remove('like-button_pressed');

      likeButtonHeart.classList.remove('like-button__heart_pressed');
      likeButtonHeart.textContent = "favorite_border";

      likeButtonCount.classList.remove('like-button__count_pressed');
      likeButtonCount.textContent = Number(likeButtonCount.textContent) - 1;

      button.dataset.isPressed = 'false';
    } else {
      button.classList.add('like-button_pressed');

      likeButtonHeart.classList.add('like-button__heart_pressed');
      likeButtonHeart.textContent = 'favorite';

      likeButtonCount.classList.add('like-button__count_pressed');
      likeButtonCount.textContent = Number(likeButtonCount.textContent) + 1; 
      
      button.dataset.isPressed = 'true';
    }
  });
}



