"use strict";
//calculate percentage
var obtainMarks = 45;
var totalMarks = 50;
var percentage = (obtainMarks / totalMarks) * 100;
console.log("the resulting percentage is", percentage, "%");
//calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var priceOfProduct = 500;
if (priceOfProduct > 100) {
    var discountedPrice = priceOfProduct - (priceOfProduct * 0.1);
    console.log("The discounted price will be=", discountedPrice, "$");
}
else {
    var discountedPrice = priceOfProduct - (priceOfProduct * 0.05);
    console.log("The discounted price will be=", discountedPrice, "$");
}
//determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var userAge = 15;
if (userAge > 0 && userAge <= 12) {
    console.log("The user is CHILD");
}
else if (userAge >= 13 && userAge <= 19) {
    console.log("The user is TEENAGER");
}
else {
    console.log("The user is ADULT");
}
// takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var currentTemp = 40;
if (currentTemp < 15) {
    console.log("The weather is cold. You should wear warm clothes");
}
else {
    console.log("The weather is hot. You should wear light clothes");
}
//checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var num = 20;
if (num % 3 == 0) {
    console.log("The number is divisible by 3");
}
else if (num % 5 == 0) {
    console.log("The number is divisible by 5");
}
else if (num % 3 == 0 && num % 5 == 0) {
    console.log("The number is divisible by both 3 and 5");
}
else
    (console.log("The number is not divisible by anyone"));
// checks if the given year is leap year or not.
var givenYear = 2024;
if (givenYear % 4 == 0) {
    console.log("The given year is a leap year");
}
else {
    console.log("The given year is not a leap year");
}
//determines the day of the week by number from 1-7
var userNum = 4;
if (userNum == 1) {
    console.log("today is MONDAY");
}
else if (userNum == 2) {
    console.log("today is TUESDAY");
}
else if (userNum == 3) {
    console.log("today is WEDNESDAY");
}
else if (userNum == 4) {
    console.log("today is THURSDAY");
}
else if (userNum == 5) {
    console.log("today is FRIDAY");
}
else if (userNum == 6) {
    console.log("today is SATURDAY");
}
else if (userNum == 7) {
    console.log("today is SUNDAY");
}
else {
    console.log("Invalid value");
}
//bill calculation
var bill = 1000;
var numOfUnits = 450;
if (numOfUnits >= 100 && numOfUnits < 200) {
    var taxedBill = (bill * 0.1) + bill;
    console.log("The bill of yhe consumer will be Rs", taxedBill);
}
else if (numOfUnits >= 200 && numOfUnits < 300) {
    var taxedBill = (bill * 0.15) + bill;
    console.log("The bill of yhe consumer will be Rs", taxedBill);
}
else if (numOfUnits >= 300 && numOfUnits < 400) {
    var taxedBill = (bill * 0.2) + bill;
    console.log("The bill of yhe consumer will be Rs", taxedBill);
}
else if (numOfUnits >= 400 && numOfUnits < 500) {
    var taxedBill = (bill * 0.25) + bill;
    console.log("The bill of yhe consumer will be Rs", taxedBill);
}
else if (numOfUnits >= 500) {
    var taxedBill = (bill * 0.3) + bill;
    console.log("The bill of yhe consumer will be Rs", taxedBill);
}
else {
    console.log("Invalid value");
}
//pass/fail on basis of attendance,theory and practical
//attendance
var attendedClasses = 17;
var totalClasses = 20;
var attPercent = (attendedClasses / totalClasses) * 100;
console.log("the attendance percentage of student is=", attPercent, "%");
//theory
var theory_obMarks = 27;
var theory_t0talMarks = 40;
var theory_per = (theory_obMarks / theory_t0talMarks) * 100;
console.log("The theory percentage of the student is=", theory_per, "%");
//practical
var practical_obMarks = 13;
var practical_t0talMarks = 20;
var practical_per = (practical_obMarks / practical_t0talMarks) * 100;
console.log("The practical percentage of the student is=", practical_per, "%");
if (attPercent >= 75 && theory_per >= 50 && practical_per >= 45) {
    console.log("The student has passed this semester");
}
else {
    console.log("The student has failed this semester");
}
//grading system
var obMarks = 1031;
var t0talMarks = 1100;
var per = (obMarks / t0talMarks) * 100;
console.log("The percentage of the student is=", per, "%");
if (per >= 80) {
    console.log("the student get grade A");
}
else if (per < 80 && per >= 70) {
    console.log("the student get grade B");
}
else if (per < 70 && per >= 60) {
    console.log("the student get grade C");
}
else if (per < 60 && per >= 50) {
    console.log("the student get grade D");
}
else if (per < 50) {
    console.log("the student get grade F");
}
else {
    console.log("Invalid input");
}
