let numberInput = parseInt(prompt("Enter a number between 1 and 12"));

var calendarMonths = [
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

// alert(numberInput + calendarMonths[numberInput - 1]);
// console.log(numberInput + calendarMonths[numberInput - 1]);

if (numberInput >= 1 && numberInput <= 12) {
  console.log(numberInput + " " + calendarMonths[numberInput - 1]);
} else {
  alert("Invalid number. Please enter a number between 1 and 12");
}
