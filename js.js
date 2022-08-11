/*1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound*/



let input = document.querySelector(".enter-numbers input")
const button = document.querySelector(".enter-numbers button")
const length = document.querySelector(".length p")
const volume = document.querySelector(".volume p")
const mass = document.querySelector(".mass p")
const meter = 3.2808
const foot = 0.3048
const liter = 3.7854
const gallon = 0.2641
const kilogram = 2.2046
const pound = 0.4535

button.addEventListener("click", ()=> {
    calculateLength()
    calculateVolume()
    calculateMass()
  })

function calculateLength() {
    let meters = document.getElementById("for-input-value").value * meter;
    let feet = document.getElementById("for-input-value").value * foot;
    let roundMeters = meters.toFixed(3)
    let roundFeet = feet.toFixed(3)
    if (input.value <= 0.3) {
        length.innerHTML =
        `<p>
        ${input.value} meter = ${roundMeters} foot | ${input.value} foot = ${roundFeet} meter
        </p>`
        } else if (input.value <= 1) {
        length.innerHTML =
        `<p>
        ${input.value} meter = ${roundMeters} feet | ${input.value} foot = ${roundFeet} meter
        </p>`
        } else if (input.value <= 3) {
        length.innerHTML =
        `<p>
        ${input.value} meters = ${roundMeters} feet | ${input.value} feet = ${roundFeet} meter
        </p>`
    } else {
        length.innerHTML =
        `<p>
        ${input.value} meters = ${roundMeters} feet | ${input.value} feet = ${roundFeet} meters
        </p>`
    }
  }

function calculateVolume() {
    let liters = document.getElementById("for-input-value").value * liter;
    let gallons = document.getElementById("for-input-value").value * gallon;
    let roundLiters = liters.toFixed(3)
    let roundGallons = gallons.toFixed(3)
    if(input.value <= 0.2) {
        volume.innerHTML =
        `<p>
        ${input.value} liter = ${roundLiters} gallon | ${input.value} gallon = ${roundGallons} liter
        </p>`
    } else if (input.value <= 1) {
        volume.innerHTML =
        `<p>
        ${input.value} liter = ${roundLiters} gallons | ${input.value} gallon = ${roundGallons} liter
        </p>`
    }
     else if (input.value <= 3) {
        volume.innerHTML =
        `<p>
        ${input.value} liters = ${roundLiters} gallons | ${input.value} gallons = ${roundGallons} liter
        </p>`
    } else {
        volume.innerHTML =
        `<p>
        ${input.value} liters = ${roundLiters} gallons | ${input.value} gallons = ${roundGallons} liters
        </p>`
    }
  }
function calculateMass() {
    let kilograms = document.getElementById("for-input-value").value * kilogram;
    let pounds = document.getElementById("for-input-value").value * pound;
    let roundKilograms = kilograms.toFixed(3)
    let roundPounds = pounds.toFixed(3)
    if(input.value <= 0.4) {
    mass.innerHTML =
        `<p>
        ${input.value} kilogram = ${roundKilograms} pound | ${input.value} pound = ${roundPounds} kilogram
        </p>`
    } else if (input.value <= 1) {
        mass.innerHTML =
        `<p>
        ${input.value} kilogram = ${roundKilograms} pounds | ${input.value} pound = ${roundPounds} kilogram
        </p>`
    } else if (input.value <= 2) {
        mass.innerHTML =
        `<p>
        ${input.value} kilograms = ${roundKilograms} pounds | ${input.value} pounds = ${roundPounds} kilogram
        </p>`
    } else {
        mass.innerHTML =
        `<p>
        ${input.value} kilograms = ${roundKilograms} pounds | ${input.value} pounds = ${roundPounds} kilograms
        </p>`
    }
  }
