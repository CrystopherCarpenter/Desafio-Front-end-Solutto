const avatars = document.getElementsByTagName('img');
const filter = document.querySelector('.filter');
const audioElement = new Audio(
    'https://b.mokaly.com/audios/matrix_room_enter.mp3'
);

function startAnimation(timeout, element) {
    element.style.display = 'none';
    filter.style.display = 'none';

    setTimeout(() => {
        showAvatars();
    }, timeout);
}

function showAvatars() {
    const interval = 2000;
    const imgWidth = 48;

    for (let i = 0; i < avatars.length; i++) {
        const avatar = avatars[i];

        setTimeout(() => {
            randomX = getRandomX(imgWidth);

            avatar.style.width = imgWidth + 'px';
            avatar.style.left = randomX + 'px';
            avatar.style.display = 'block';
            avatar.style.animationPlayState = 'running';

            avatar.addEventListener(
                'animationend',
                () => animationListener(avatar),
                false
            );
        }, i * interval);
    }
}

function getRandomX(imgWidth) {
    return Math.random() * (window.innerWidth - imgWidth);
}

function animationListener(avatar) {
    const lastAvatar = avatars[avatars.length - 1];

    avatar.style.display = 'none';
    avatar === lastAvatar && playSound();
}

function playSound() {
    audioElement.play();
    audioElement.addEventListener('ended', () => {
        showButton();
    });
}

function showButton() {
    const replayButton = document.querySelector('.replay');

    replayButton.style.display = 'block';
    filter.style.display = 'block';
}
