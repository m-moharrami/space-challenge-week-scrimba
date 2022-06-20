const solarSystem = document.getElementById("solarSystem");
const planets = [
    {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey"
    },
    {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow"
    },
    {
    "name": "Earth",
    "diameter": 12742,
    "color": "green"
    },
    {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink"
    },
    {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow"
    },
    {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange"
    },
    {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey"
    },
    {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue"
    }
];

function render(planet){
    solarSystem.innerHTML += 
        `<span class="${planet}" style="width: ${planet.diameter/1000}px;
        height: ${planet.diameter/1000}px;
        border-radius: 50%;
        margin: 1em;
        background: conic-gradient(black 0deg 180deg, var(--${planet.color}) 180deg 360deg);">
        </span>
        `;
}

planets.forEach(render);