var CC, YY, MM, DD, d, dayValue;
var dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

function validate() {
  var genders = document.getElementsByName("gender");
  if (
    document.myForm.year.value == "" ||
    document.myForm.year.value.length != 4 ||
    document.myForm.year.value > 2100 ||
    document.myForm.year.value <= 1900
  ) {
    document.getElementById("year-label").style.color = "#dc2f55";
    document.getElementById("year-label").innerText =
      "Please provide a valid year of birth! eg 2022";
    return false;
  } else if (
    document.myForm.month.value == "" ||
    isNaN(document.myForm.month.value) ||
    document.myForm.month.value.length != 2 ||
    document.myForm.month.value > 12 ||
    document.myForm.month.value <= 0
  ) {
    document.getElementById("month-label").style.color = "#dc2f55";
    document.getElementById("month-label").innerText =
      "Please provide your month of birth! between 1 and 12";

    return false;
  } else if (
    document.myForm.date.value == "" ||
    isNaN(document.myForm.month.value) ||
    document.myForm.month.value.length != 2 ||
    document.myForm.date.value > 31 ||
    document.myForm.date.value <= 0
  ) {
    document.getElementById("date-label").style.color = "#dc2f55";
    document.getElementById("date-label").innerText =
      "Please provide a valid date that you were born in!";
  } else if (genders[0].checked == false && genders[1].checked == false) {
    document.getElementById("gender-label").style.color = "#dc2f55";
    document.getElementById("gender-label").innerText =
      "You must select male or female!";
    return false;
  } else {
    return true;
  }
}

function calculateDayValue() {
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0, 2));
  YY = parseInt(year.substring(2, 4));
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d = (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
  return Math.floor(d);
}

function getGender() {
  var genders = document.getElementsByName("gender");
  var results = document.getElementById("results");
  if (genders[0].checked == true) {
    var gender = "male";
  } else if (genders[1].checked == true) {
    var gender = "female";
  } else {
    return false;
  }
  switch (gender) {
    case "male":
      if (dayValue == 1) {
        results.innerText =
          "You were born on " +
          dayNames[0] +
          " and Your akan name is " +
          maleNames[0] +
          "!";

        toggle(results);
      } else if (dayValue == 2) {
        results.innerText =
          "You were born on " +
          dayNames[1] +
          " and Your akan name is " +
          maleNames[1] +
          "!";

        toggle(results);
      } else if (dayValue == 3) {
        results.innerText =
          "You were born on " +
          dayNames[2] +
          " and Your akan name is " +
          maleNames[2] +
          "!";

        toggle(results);
      } else if (dayValue == 4) {
        results.innerText =
          "You were born on " +
          dayNames[3] +
          " and Your akan name is " +
          maleNames[3] +
          "!";

        toggle(results);
      } else if (dayValue == 5) {
        results.innerText =
          "You were born on " +
          dayNames[4] +
          " and Your akan name is " +
          maleNames[4] +
          "!";

        toggle(results);
      } else if (dayValue == 6) {
        results.innerText =
          "You were born on " +
          dayNames[5] +
          " and Your akan name is " +
          maleNames[5] +
          "!";

        toggle(results);
      } else if (dayValue == -0) {
        results.innerText =
          "You were born on " +
          dayNames[6] +
          " and Your akan name is " +
          maleNames[6] +
          "!";

        toggle(results);
      }
      break;
    case "female":
      if (dayValue == 1) {
        results.innerText =
          "You were born on " +
          dayNames[0] +
          " and Your akan name is " +
          femaleNames[0] +
          "!";

        toggle(results);
      } else if (dayValue == 2) {
        results.innerText =
          "You were born on " +
          dayNames[1] +
          " and Your akan name is " +
          femaleNames[1] +
          "!";

        toggle(results);
      } else if (dayValue == 3) {
        results.innerText =
          "You were born on " +
          dayNames[2] +
          " and Your akan name is " +
          femaleNames[2] +
          "!";

        toggle(results);
      } else if (dayValue == 4) {
        results.innerText =
          "You were born on " +
          dayNames[3] +
          " and Your akan name is " +
          femaleNames[3] +
          "!";

        toggle(results);
      } else if (dayValue == 5) {
        results.innerText =
          "You were born on " +
          dayNames[4] +
          " and Your akan name is " +
          femaleNames[4] +
          "!";

        toggle(results);
      } else if (dayValue == 6) {
        results.innerText =
          "You were born on " +
          dayNames[5] +
          " and Your akan name is " +
          femaleNames[5] +
          "!";

        toggle(results);
      } else if (dayValue == -0) {
        results.innerText =
          "You were born on " +
          dayNames[6] +
          " and Your akan name is " +
          femaleNames[6] +
          "!";

        toggle(results);
      }
      break;
    default:
  }
}
function findName() {
  dayValue = calculateDayValue();
  getGender();
}

function toggle(results) {
  if (results.style.visibility === "visible") {
    results.style.visibility = "hidden";
  } else {
    results.style.visibility = "visible";
  }
}
