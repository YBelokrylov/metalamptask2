let priceRange = document.querySelector('.price-range');
let inputLeft = priceRange.querySelector('.price-range__input-left');
let inputRight = priceRange.querySelector('.price-range__input-right');
let range = priceRange.querySelector('.price-range__range');

let priceDistance = document.querySelector('.price-range__price-distance');
let leftPrice = priceDistance.querySelector('.price-range__left-price');
let rightPrice = priceDistance.querySelector('.price-range__right-price');

function setLeftValue() {
  let _this = inputLeft;
  let min = parseInt(_this.min);
  let max = parseInt(_this.max);

  let leftPriceThousand = 0;
  let leftPriceHundreds = 0;

  _this.value = Math.min(parseInt(_this.value), (parseInt(inputRight.value) - 5));

  let percent = ((_this.value - min) / (max - min)) * 100;

  range.style.left = percent + "%";

  leftPriceThousand = Math.trunc(_this.value / 10);
  leftPriceHundreds = _this.value % 10 + "00";

  if (leftPriceThousand === 0 && leftPriceHundreds === "000") {
    leftPrice.textContent = "0 ₽ -";
  } else if (leftPriceThousand === 0) {
    leftPrice.textContent = leftPriceHundreds + "₽ -";
  } else {
    leftPrice.textContent = leftPriceThousand + " " + leftPriceHundreds + "₽ - ";
  }
}
setLeftValue();

function setRightValue() {
  let _this = inputRight;
  let min = parseInt(_this.min);
  let max = parseInt(_this.max);

  let rightPriceThousand = 0;
  let rightPriceHundreds = 0;

  _this.value = Math.max(parseInt(_this.value), (parseInt(inputLeft.value) + 5));

  let percent = ((_this.value - min) / (max - min)) * 100;

  range.style.right = (100 - percent) + "%";

  rightPriceThousand = Math.trunc(_this.value / 10);
  rightPriceHundreds = _this.value % 10 + "00";

  if (rightPriceThousand === 0 && rightPriceHundreds === "000") {
    rightPrice.textContent = "0 ₽";
  } else if (rightPriceThousand === 0) {
    rightPrice.textContent = rightPriceHundreds + "₽";
  } else {
    rightPrice.textContent = rightPriceThousand + " " + rightPriceHundreds + "₽";
  }
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);
