const player = document.getElementById('player')
const block = document.getElementById('block')
const scoreElement = document.getElementById('score')
let score = 0;

function moveLeft() {
    const curLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if (curLeft <= 0) return;
    const newLeft = curLeft - 100;
    player.style.left = newLeft + "px";
}

function moveRight() {
    const curLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if (curLeft >= 200) return;
    const newLeft = curLeft + 100;
    player.style.left = newLeft + "px";
}

document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowLeft") moveLeft();
    else if (event.key == "ArrowRight") moveRight();
})

block.addEventListener('animationiteration', () => {
    const randPos = Math.floor((Math.random() * 3)) * 100;
    block.style.left = randPos + "px";
    score++;
    scoreElement.innerHTML = `Score: ${score}`;
})

setInterval(() => {
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));

    if (playerLeft == blockLeft && blockTop < 450 && blockTop > 310) {
        alert(`Game Over !!!!!!\n Your Score: ${score}`);
        block.style.top = -100 + 'px';
        score = 0;
        location.reload()
    }
}, 1)