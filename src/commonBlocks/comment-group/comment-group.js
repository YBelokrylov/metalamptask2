let commentGroup = document.querySelector('.comment-group');
let comments = commentGroup.querySelectorAll('.comment-group__comment');
let numberOfComments = commentGroup.querySelector('.comment-group__number-of-comments');
let counter = 0;

for (let i = 0; i < comments.length; i++) {
  counter++;
}

if (counter % 10 === 1 && counter % 100 !== 11) {
  numberOfComments.textContent = counter + ' отзыв';
} else if (counter % 10 > 1 && counter % 10 < 5 && ![12, 13, 14].includes(counter)) {
  numberOfComments.textContent = counter + ' отзыва';
} else {
  numberOfComments.textContent = counter + ' отзывов';
}




