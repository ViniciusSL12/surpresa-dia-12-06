const audio = document.getElementById("musica");
const video = document.getElementById("video");
const playIcon = document.getElementById("play-icon");

let isPlaying = false;

function togglePlayAudio() {
  if (!isPlaying) {
    audio.play().catch(err => console.error("Erro ao tocar música:", err));
    video.play().catch(err => console.error("Erro ao tocar vídeo:", err));
    isPlaying = true;
    playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'; // pause
  } else {
    audio.pause();
    video.pause();
    isPlaying = false;
    playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>'; // play
  }
}

function retrocederAudio() {
  audio.currentTime = 0;
  video.currentTime = 0;
  audio.play().catch(err => console.error("Erro ao tocar música:", err));
  video.play().catch(err => console.error("Erro ao tocar vídeo:", err));
  isPlaying = true;
  playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
}


const startDate = new Date("2022-08-23T00:00:00");
const timer = document.getElementById("timer");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  timer.textContent = `${days} dias, ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);
updateTimer();


const canvas = document.getElementById("hearts-canvas");
const ctx = canvas.getContext("2d");
let hearts = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawHeart(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
  ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.5, x, y + size * 2);
  ctx.bezierCurveTo(x, y + size * 1.5, x + size, y + size, x + size, y);
  ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
  ctx.fillStyle = "#ff4d6d";
  ctx.fill();
}

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: Math.random() * 6 + 4,
    speed: Math.random() * 1 + 0.5,
  };
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, index) => {
    heart.y -= heart.speed;
    drawHeart(heart.x, heart.y, heart.size);
    if (heart.y < -20) hearts.splice(index, 1);
  });
  if (Math.random() < 0.1) hearts.push(createHeart());
  requestAnimationFrame(animateHearts);
}

animateHearts();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", () => {
  startScreen.style.opacity = "0";
  setTimeout(() => {
    startScreen.style.display = "none";
  }, 600);
});


const motivoBtn = document.getElementById("motivo-btn");
const motivoPopup = document.getElementById("motivo-popup");

motivoBtn.addEventListener("click", () => {
  motivoPopup.classList.toggle("hidden");
  if (!motivoPopup.classList.contains("hidden")) {
    setTimeout(() => {
      motivoPopup.classList.add("hidden");
    }, 8000);
  }
});



