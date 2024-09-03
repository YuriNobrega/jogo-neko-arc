const neko = document.querySelector('.neko');
const pipe = document.querySelector('.pipe');
const nya = new Audio('./sounds/urunya.mp3');
const hit = new Audio('./sounds/nekohit.wav');
const music = new Audio('./sounds/meow.mp3');

const jump = () => {


    neko.classList.add('jump');

    setTimeout(() => {

        neko.classList.remove('jump');

    }, 500);

}

nya.play();

const loop = setInterval(() => {



    music.loop = true;
    music.play().catch(error => {
        console.error('Não foi possível tocar a música de fundo:', error)
    });


    const pipePosition = pipe.offsetLeft;
    const nekoPosition = +window.getComputedStyle(neko).bottom.replace('px', '');

    console.log(nekoPosition);


    if (pipePosition <= 120 && pipePosition > 0 && nekoPosition < 80) {


        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        neko.style.animation = 'none';
        neko.style.bottom = `${nekoPosition}px`;

        neko.src = './images/game-over.gif';
        neko.style.width = '140px';

        hit.play();


        clearInterval(loop);

    }


}, 10);


document.addEventListener('keydown', jump);
