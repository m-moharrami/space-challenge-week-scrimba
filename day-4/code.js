const solarSystem = document.getElementById("solarSystem")
const planetsObj = [
    {
    "name": "Mercury",
    "moons": 0,
    "image": "images/mercury.png"
    },
    {
    "name": "Venus",
    "moons": 0,
    "image": "images/venus.png"
    },
    {
    "name": "Earth",
    "moons": 1,
    "image": "images/earth.png"
    },
    {
    "name": "Mars",
    "moons": 2,
    "image": "images/mars.png"
    },
    {
    "name": "Jupiter",
    "moons": 67,
    "image": "images/jupiter.png"
    },
    {
    "name": "Saturn",
    "moons": 62,
    "image": "images/saturn.png"
    },
    {
    "name": "Uranus",
    "moons":27,
    "image": "images/uranus.png"
    },
    {
    "name": "Neptune",
    "moons": 14,
    "image": "images/neptune.png"
    }
]

// Task:
// 1. Display each planet’s name and number of moons in the DOM
// 2. Calculate and display the total number of moons in the solar system below

// Stretch goals:
// - 1: Make the numbers count up on page load 
// - 2: Make the planet names bold.

let totalMoons = 0;

for (let i = 0; i < planetsObj.length; i++){
    solarSystem.innerHTML += `<p><img src="${planetsObj[i].image}"/><span>${planetsObj[i].name}: ${planetsObj[i].moons} moons</span></p>`;
    totalMoons += planetsObj[i].moons;
}

solarSystem.innerHTML += `<p class="bold">TOTAL MOONS IN THE SOLAR SYSTEM: ${totalMoons}</p>`