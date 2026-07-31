const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

// 🌌 background stars
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
}

drawStars();

// ✏️ drawing
let drawing = false;
let path = [];

canvas.addEventListener("mousedown", () => {
  drawing = true;
  path = [];
  ctx.beginPath();
});

canvas.addEventListener("mouseup", () => {
  drawing = false;
  checkPattern();
});

canvas.addEventListener("mousemove", (e) => {
  if (!drawing) return;

  path.push({ x: e.clientX, y: e.clientY });

  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgba(255,255,255,0.6)";
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
});

// 🔐 constellation logic (triangle shape)
function checkPattern() {
  if (path.length < 30) return;

  let first = path[0];
  let mid = path[Math.floor(path.length / 2)];
  let last = path[path.length - 1];

  // triangle-ish motion
  let valid =
    first.y > window.innerHeight * 0.6 &&
    mid.y < window.innerHeight * 0.4 &&
    last.y > window.innerHeight * 0.6;

  if (valid) {
    unlock();
  } else {
    fadeOut();
  }
}

function unlock() {
  localStorage.setItem("unlocked", "true");

  document.body.style.transition = "1s";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "private.html";
  }, 1000);
}

function fadeOut() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStars();
}
