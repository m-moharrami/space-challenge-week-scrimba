let space = document.getElementById('galaxy');

function makeGalaxy(){
    for (let i = 0; i < 50; i++){
        const galaxy = new Array(25).fill('✨ 💫');
        space.innerHTML += `${galaxy.join('')}`
    }
}

makeGalaxy();