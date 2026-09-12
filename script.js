const CONFIG = {
  name: "AMOR",
  heroMessage: "Que este nuevo año esté lleno de momentos increíbles, sonrisas y muchos recuerdos.",
  musicTitle: "Nuestra canción: Si vuelvo a Nacer (leoni Torres)"
};

const welcome = document.getElementById("welcome");
const mainContent = document.getElementById("mainContent");
const openButton = document.getElementById("openButton");
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const musicStatus = document.getElementById("musicStatus");
const musicBars = document.getElementById("musicBars");

document.getElementById("personName").textContent = CONFIG.name;
document.getElementById("heroName").textContent = CONFIG.name;
document.getElementById("finalName").textContent = CONFIG.name + " ❤️";
document.getElementById("heroMessage").textContent = CONFIG.heroMessage;
document.getElementById("musicTitle").textContent = CONFIG.musicTitle;

openButton.addEventListener("click", async () => {
  welcome.classList.add("hidden");
  mainContent.classList.remove("hidden");
  document.body.classList.remove("locked");

  // El clic del usuario permite intentar reproducir la música.
  try {
    await music.play();
    setMusicUI(true);
  } catch (error) {
    setMusicUI(false);
    musicStatus.textContent = "Toca ▶ para escuchar";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
});

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      setMusicUI(true);
    } catch (error) {
      musicStatus.textContent = "No se pudo reproducir";
    }
  } else {
    music.pause();
    setMusicUI(false);
  }
});

music.addEventListener("play", () => setMusicUI(true));
music.addEventListener("pause", () => setMusicUI(false));

function setMusicUI(playing) {
  musicButton.textContent = playing ? "❚❚" : "▶";
  musicStatus.textContent = playing ? "Reproduciendo" : "Pausada";
  musicBars.classList.toggle("playing", playing);
}

// Animación suave al entrar en pantalla.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".photo-card, .video-card, .timeline-item, .message-card")
  .forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity .7s ease, transform .7s ease";
    observer.observe(el);
  });
