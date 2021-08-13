const calendar = document.querySelector('.calendar');

let days = calendar.querySelectorAll('.calendar__day');

let edgeDays = [];
let today;

let calendarButtons = calendar.querySelectorAll('.text-button')
let clearCalendarButton = calendarButtons[0];
let confirmCalendarButton = calendarButtons[1];

function createDateInterval(firstPosition, secondPosition) {
  if (firstPosition > secondPosition) {
    for (let i = secondPosition + 1; i < firstPosition; i++) {
      days[i].classList.add('calendar__selected-day');

      if (days[i] === days[today]) {
        days[i].classList.remove('calendar__today');
      }
    }

    days[firstPosition].classList.add('calendar__selected-right-edge-day');
    days[secondPosition].classList.add('calendar__selected-left-edge-day');
  } else {
    for (let i = secondPosition - 1; i > firstPosition; i--) {
      days[i].classList.add('calendar__selected-day');

      if (days[i] === days[today]) {
        days[i].classList.remove('calendar__today');
      }
    }

    days[firstPosition].classList.add('calendar__selected-left-edge-day');
    days[secondPosition].classList.add('calendar__selected-right-edge-day');
  }
}

function removeDateInterval() {
  for (let day of days) {
    day.classList.remove('calendar__selected-day', 'calendar__selected-edge-day', 'calendar__selected-left-edge-day', 'calendar__selected-right-edge-day')
  }

  days[today].classList.add('calendar__today');
}

function posCollection(position) {
  return function () {
    if (edgeDays.push(position) === 2) {
      createDateInterval(edgeDays[0], edgeDays[1]);
    } else if (edgeDays.length === 3) {
      removeDateInterval();
      edgeDays.splice(0, 2);
    } else {
      removeDateInterval();
    }

    days[position].classList.add('calendar__selected-edge-day');
  };
}

for (let i = 0; i < 35; i++) {
  if (days[i].classList.contains('calendar__today')) {
    today = i;
  }

  days[i].addEventListener('click', posCollection(i));
}

clearCalendarButton.addEventListener('click', removeDateInterval);

/* confirmCalendarButton.addEventListener('click', function () {
  firstDate = days[edgeDays[0]].textContent;
  secondDate = days[edgeDays[1]].textContent;
}); */

