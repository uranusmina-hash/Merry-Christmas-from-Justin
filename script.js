/* ❄️ SNOW EFFECT */
const snowCount = 50;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function createSnowflake() {
    const snow = document.createElement('div');
    snow.className = 'snowflake';
    snow.textContent = '❄';
    snow.style.fontSize = (Math.random() * 12 + 10) + 'px';
    snow.style.opacity = (Math.random() * 0.6 + 0.3).toFixed(2);
    document.body.appendChild(snow);

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    const speed = Math.random() * 1.5 + 0.8;

    function fall() {
        y += speed;
        x += Math.sin(y / 50) * 1.2;

        if (y > window.innerHeight) {
            y = -20;
            x = Math.random() * window.innerWidth;
        }

        snow.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        requestAnimationFrame(fall);
    }
    fall();
}

if (!reduceMotion) {
    for (let i = 0; i < snowCount; i++) {
        createSnowflake();
    }
}

/* 🎵 MUSIC */
const music = document.getElementById('christmasSong');
const btn = document.getElementById('musicBtn');
let playing = false;

function setPlaying(state) {
    playing = state;
    btn.textContent = playing ? '⏸️ Pause Music' : '🎵 Play Music';
    btn.classList.toggle('playing', playing);
}

btn.addEventListener('click', () => {
    if (playing) {
        music.pause();
        setPlaying(false);
    } else {
        music.play()
            .then(() => setPlaying(true))
            .catch(() => setPlaying(false));
    }
});
