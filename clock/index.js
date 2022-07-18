let weekdays = {
  1: "MONDAY",
  2: "TUESDAY",
  3: "WEDNESDAY",
  4: "THURSDAY",
  5: "FRIDAY",
  6: "SATURDAY",
  7: "SUNDAY",
};

function getTime() {
  const date = new Date();
  let todayDate = date.getDate();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let day = date.getDay();

  month = addZero(month);
  minute = addZero(minute);
  second = addZero(second);
  day = changeToDay(day);
  todayDate = addZero(todayDate)
}

function addZero(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}

function changeToDay(value) {
  return weekdays[value];
}
