let weekdays = {
  1: "MON",
  2: "TUES",
  3: "WED",
  4: "THURS",
  5: "FRI",
  6: "SAT",
  7: "SUN",
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
  let session = changeSession(hour);

  month = addZero(month);
  minute = addZero(minute);
  second = addZero(second);
  day = changeToDay(day);
  todayDate = addZero(todayDate);

  const elTime = document.querySelector(".time");
  const time = day+ " : " + Math.abs(hour - 12) + " : " + minute + " : " + second + " " + session;
    elTime.innerHTML = time;
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

function changeSession(hour) {
  if (hour > 12) {
    return "PM";
  } else {
    return "AM";
  }
}

window.onload = function () {
  setInterval(getTime, 500);
};
