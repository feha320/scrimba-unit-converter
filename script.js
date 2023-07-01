/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const convertLength = document.getElementById("convert-length");
const convertVolume = document.getElementById("convert-volume");
const convertMass = document.getElementById("convert-mass");

const darkLightBtn = document.getElementById("darklight-btn");
const page = document.getElementById("container-all");

function calculateAll() {
  calculateLength();
  calculateVolume();
  calculateMass();
}

function calculateLength() {
  let value = input.value;
  let meterToFeet = (value * 3.281).toFixed(3);
  let feetToMeter = (value / 3.281).toFixed(3);
  convertLength.innerHTML = `${value} meters = ${meterToFeet} feet | ${value} feet = ${feetToMeter} meters`;
}

function calculateVolume() {
  let value = input.value;
  let litersToGallons = (value * 0.264).toFixed(3);
  let gallonsToLiters = (value / 0.264).toFixed(3);
  convertVolume.innerHTML = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;
}

function calculateMass() {
  let value = input.value;
  let kilosToPounds = (value * 2.204).toFixed(3);
  let poundsToKilos = (value / 2.204).toFixed(3);
  convertMass.innerHTML = `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`;
}

function toggleDarkLight() {
  page.classList.toggle("dark-mode")
}

convertBtn.addEventListener("click", calculateAll);
darkLightBtn.addEventListener("click", toggleDarkLight);

