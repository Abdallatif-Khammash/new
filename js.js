$(document).ready(function () {
  var date = new Date();
  var currentMonth = date.getMonth();
  var currentYear = date.getFullYear();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function renderCalendar() {
    $("#month-and-year").html(months[currentMonth] + " " + currentYear);
    $("#calendar-body").empty();
    var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    var firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    var lastDayOfMonth = new Date(currentYear, currentMonth, daysInMonth).getDay();

    var row = $("<tr></tr>");
    for (var i = 0; i < firstDayOfMonth; i++) {
      row.append("<td></td>");
    }

    for (var i = 1; i <= daysInMonth; i++) {
        if (i == date.getDate() && currentMonth == date.getMonth() && currentYear == date.getFullYear()) {
          row.append("<td class='today'>" + i + "</td>");
        } else {
          row.append("<td>" + i + "</td>");
        }
  
        if ((firstDayOfMonth + i - 1) % 7 == 6) {
          $("#calendar-body").append(row);
          row = $("<tr></tr>");
        }
      }
  
      for (var i = lastDayOfMonth; i < 6; i++) {
        row.append("<td></td>");
      }
      $("#calendar-body").append(row);
    }
  
    $("#previous").on("click", function () {
      currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
      currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
      renderCalendar();
    });
  
    $("#next").on("click", function () {
      currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
      currentMonth = (currentMonth + 1) % 12;
      renderCalendar();
    });
  
    $("#today").on("click", function () {
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
      renderCalendar();
    });
  
    renderCalendar();
  });
  