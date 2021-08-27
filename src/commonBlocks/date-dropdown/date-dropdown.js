let dateDropdown = document.querySelector('.date-dropdown');

let dateInterval = dateDropdown.querySelector('.date-dropdown__date-interval');
let calendar = dateDropdown.querySelector('.date-dropdown__calendar');

dateInterval.addEventListener('click', function () {
  calendar.classList.toggle('date-dropdown__calendar_open');
});