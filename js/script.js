const button = document.getElementById("btn");
let currentTime = new Date();
let CurrentDate = currentTime.getDate();
let CurrentMonth = currentTime.getMonth() + 1;
let CurrentYear = currentTime.getFullYear();

button.addEventListener("click", function () {
  const Dateinfo = +document.getElementById("day").value;

  if (Dateinfo < 32 && Dateinfo > 0) {
    DayResult = CurrentDate - Dateinfo;

    document.getElementById("day_res").innerHTML = DayResult;
  } else {
    alert("Bunday Oy kuni mavjud emas!!!");
  }
  const Monthinfo = +document.getElementById("month").value;
  if (Monthinfo > 0 && Monthinfo < 13) {
    MonthResult = CurrentMonth - Monthinfo;
    if (MonthResult == -1) {
      DayResult += 31;
    }
    document.getElementById("month_res").innerHTML = MonthResult;
  } else {
    alert("Unday oy mavjud emas");
  }

  const Yearinfo = +document.getElementById("year").value;
});
