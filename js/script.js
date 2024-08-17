const inputElement = document.getElementById("date");
const weekDay = document.getElementById("week-day");
let inputTimeout;

const getWeekday = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const inputValue = inputElement.value;
  const date = new Date(inputValue);
  const dayIndex = date.getDay();
  const day = daysOfWeek[dayIndex]
  if (!dayIndex) {
    weekDay.innerText = "Error : Invalid date"
  } else {
    weekDay.innerText = `It's ${day}`
  }
};

const inputHandler = () => {
  clearTimeout(inputTimeout);
  inputTimeout = setTimeout(getWeekday, 1000);
};

inputElement.addEventListener("input", inputHandler);
