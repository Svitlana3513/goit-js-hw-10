import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const calendarDate = flatpickr(`#datetime-picker`, options);
const inputDate = document.querySelector(`#datetime-picker`);
const startBtn = document.querySelector(`button`);



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
