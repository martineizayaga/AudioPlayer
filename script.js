const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-controller');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs = [
    {
        title: "Carmen - Prelude, Act I",
        cover: "Georges_Bizet.jpg"
    },
    {
        title: "The Barber of Seville - Act I (First Part)",
        cover: "Gioachino_Rossini"
    },
    {
        title: "The Crown of India, Op. 66 - 3. Warriors' Dance (For Military Band - Winterbottom)",
        cover: "Edward_Elgar"
    }
];

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song.title;
    audio.src = `music/${song.title}.mp3`;
    cover.src = `images/${song.cover}.jpg`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});