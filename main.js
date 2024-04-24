function tocarSom(selectionAudio) {
  // Parar a reprodução de todos os áudios
  const pausaAudios = document.querySelectorAll('audio');
  pausaAudios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  })
  const elemento = document.querySelector(selectionAudio);
  if (elemento != null && elemento.localName === 'audio') {
    elemento.play();
  }
  else {
    console.log("Elemento não encontrado");
  }
}
const ListaDeTeclas = document.querySelectorAll('.tecla');
ListaDeTeclas[0].onclick = tocarSom;

for (let i = 0; i < ListaDeTeclas.length; i++) {
  const tecla = ListaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; // template string

  tecla.onclick = function () {
    tocarSom(idAudio);
  };
  tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa');
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  };
}
