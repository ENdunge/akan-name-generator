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
