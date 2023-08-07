window.onload = function () {
  //  typy kol checkbox
  const horske = document.getElementById("horske");
  const silnicni = document.getElementById("silnicni");
  const detske = document.getElementById("detske");
  const gravel = document.getElementById("gravel");
  //pocet kol input.number
  const pocetHorske = document.getElementById("horskePocet");
  const pocetSilnicni = document.getElementById("silnicniPocet");
  const pocetDetske = document.getElementById("detskePocet");
  const pocetGravel = document.getElementById("gravelPocet");

  // select
  const pocetDni = document.getElementById("bike");
  //radioButton
  const bezNosice = document.getElementById("bezNosice");
  const stresniNosic = document.getElementById("stresni");
  const tazneNosic = document.getElementById("tazne");
  const cenaCelkem = document.getElementById("celkem");
  const spocitej = document.getElementById("spocitej");
  const rozpocet = document.getElementById("rozpocet");
  const resume = document.getElementById("resume");

  let celkem = 0;
  let vypocet = 0;

  spocitej.addEventListener("click", function (event) {
    //kdyz to mas ve formu...musis vyresetovat implicitni resetovani
    event.preventDefault();

    if (horske.checked === true) {
      celkem += Number(horske.value) * Number(pocetHorske.value);
    }

    if (silnicni.checked === true) {
      celkem += Number(silnicni.value) * Number(pocetSilnicni.value);
    }

    if (detske.checked === true) {
      celkem += Number(detske.value) * Number(pocetDetske.value);
    }

    if (gravel.checked === true) {
      celkem += Number(gravel.value) * Number(pocetGravel.value);
    }
    celkem = Number(celkem) * Number(pocetDni.value);
    let pom = 0;

    if (bezNosice.checked == true) {
      pom = 0;
      celkem += pom;
    }
    if (stresniNosic.checked == true) {
      pom = Number(stresniNosic.value) * celkem;
      celkem += pom;
    }
    if (tazneNosic.checked == true) {
      pom = Number(tazneNosic.value) * celkem;
      celkem += pom;
    }
    let maxCena = rozpocet.value;
    cenaCelkem.value = celkem;
    let pomocna = Number(maxCena) - celkem;

    if (pomocna > 0) {
      resume.value = "Z rozpoctu ti zbyva:" + pomocna;
    } else if (pomocna < 0) {
      resume.value = "Zmen objednavku o:" + Math.abs(pomocna);
    }

    console.log(celkem);
  });
};
