import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;
let timePeriod;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    timePeriod = userSelectedDate - new Date();
    if (timePeriod < 1) {
      iziToast.error({
             message: 'Please choose a date in the future',
             position: `topCenter`,
             color: `red`,
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      inputDate.disabled = true;
      startBtn.classList.add(`btn-active`);
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


const calendarDate = flatpickr(`#datetime-picker`, options);
const inputDate = document.querySelector(`#datetime-picker`);
const startBtn = document.querySelector(`button`);
const clockFace = document.querySelectorAll(`.value`);

startBtn.disabled = true;

startBtn.addEventListener(`click`, event => {
  const repeatTime = setInterval(() => {
    timePeriod = userSelectedDate - new Date();
    event.preventDefault();
    inputDate.disabled = true;
    startBtn.classList.remove(`btn-active`);
    inputDate.classList.add(`input-disabled`);
    if (timePeriod < 1) {
      startBtn.disabled = true;
      inputDate.disabled = false;
      clearInterval(repeatTime);
      return;
    }

    const timer = convertMs(timePeriod);
    clockFace[0].innerText = timer.days.toString().padStart(2, '0');
    clockFace[1].innerText = timer.hours.toString().padStart(2, '0');
    clockFace[2].innerText = timer.minutes.toString().padStart(2, '0');
    clockFace[3].innerText = timer.seconds.toString().padStart(2, '0');
  }, 1000);
});
  





