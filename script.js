const audio = document.getElementById("musicaFundo");
const botao = document.getElementById("botaoMusica");

botao.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    botao.textContent = "🔈Pausar Música";
  } else {
    audio.pause();
    botao.textContent = "🔇Tocar Música";
  }
});