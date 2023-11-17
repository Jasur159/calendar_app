const button = document.getElementById("btn");
let currentTime = new Date();
let CurrentDate = currentTime.getDate();
let CurrentMonth = +currentTime.getMonth() + 1;
let CurrentYear = currentTime.getFullYear();

let Monthinfo = document.getElementById("month");
let Yearinfo = document.getElementById("year");
let Dateinfo = document.getElementById("day");
let DatePlace = document.getElementById("day_res");
let MonthPlace = document.getElementById("month_res");
let YearPlace = document.getElementById("year_res");

button.addEventListener("click", function () {
  calcDateTillNow();
});

function calcDateTillNow() {
  let addedMonth = Monthinfo.value;
  let addedYear = Yearinfo.value;
  let AddedDate = Dateinfo.value;

  if (!addedMonth || !addedYear || !AddedDate) {
    alert("Qiymatlarni toliq kiriting");
    return;
  }
  if (addedYear < 0) {
    alert("Bunday yil mavjud emas !!!!");
  } else if (addedYear >= 2024) {
    alert("Bu yil hali kelgani yoq");
    return;
  }
  if (AddedDate < 0 || AddedDate >= 32) {
    alert("Unday oy kuni mavjud emas");
    return;
  }
  if (addedMonth < 0 || addedMonth > 12) {
    alert("Bunday oy mavjud emas");
    return;
  }

  let yearResult = CurrentYear - addedYear;
  let monthResult = CurrentMonth - addedMonth;
  let dateResult = CurrentDate - AddedDate;

  if (monthResult < 0) {
    monthResult = CurrentMonth + 12 - addedMonth;
    yearResult--;
  } else if (monthResult == 0) {
    yearResult;
  }

  if (dateResult < 0) {
    if (
      monthResult == 1 ||
      monthResult == 3 ||
      monthResult == 5 ||
      monthResult == 7 ||
      monthResult == 8 ||
      monthResult == 10 ||
      monthResult == 12
    ) {
      dateResult = 31 + CurrentDate - AddedDate;
      monthResult--;
    } else if (monthResult == 2) {
      dateResult = 28 + CurrentDate - AddedDate;
      monthResult--;
    } else if (
      monthResult == 4 ||
      monthResult == 6 ||
      monthResult == 9 ||
      monthResult == 11
    ) {
      dateResult = 30 + CurrentDate - AddedDate;
      monthResult--;
    } else if (monthResult == 0) {
      monthResult = 12;
      yearResult--;
      dateResult = 31 + CurrentDate - AddedDate;
      monthResult--;
    }
  }
  DatePlace.innerHTML = dateResult;
  MonthPlace.innerHTML = monthResult;
  YearPlace.innerHTML = yearResult;
}
