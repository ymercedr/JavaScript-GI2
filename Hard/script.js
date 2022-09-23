var tomMass1 = 8;
var tomHeight1 = 9;

var jerryMass1 = 45;
var jerryHeight1 = 10;

var tomHigherBMI = true;

var tomBMI1 = tomMass1 / (tomHeight1 * tomHeight1);
var jerryBMI1 = jerryMass1 / (jerryHeight1 * jerryHeight1);
// console.log(tomBMI1);
// console.log(jerryBMI1);

if (tomBMI1 > jerryBMI1) {
  tomHigherBMI = true;
  console.log("Is Tom's BMI higher than Jerry's? " + tomHigherBMI);
} else if (jerryBMI1 > tomBMI1) {
  tomHigherBMI = false;
  console.log("Is Tom's BMI higher than Jerry's? " + tomHigherBMI);
} else {
  console.log("They have equal BMI.");
}
