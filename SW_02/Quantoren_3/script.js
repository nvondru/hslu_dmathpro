document.addEventListener("DOMContentLoaded", (event) => {
  let result = quantorExercise_3_a();
  document.getElementById("result_1").innerHTML += result;

  result = quantorExercise_3_b();
  document.getElementById("result_2").innerHTML += result;
});

function quantorExercise_3_a() {
  // Zahlenbereich muss eingeschränkt werden, da die Berechnung sonst zu lange dauert und der Browser crashed (overflow des Datentyps muss ebenfalls verhindert werden)
  for (let x = -100000; x < 100000; x++) {
    let found = false;
    // y wird abhängig von x gemacht, um "unendlichen" Zahlenstrahl zu simulieren
    // wir beginnen die Suche "von hinten", da die Dauer der Berechnung so optimiert werden kann
    // andernfalls muss die Schlaufe für jedes x erst x^2 + 1 mal durchlaufen werden bis ein "wahrer" Treffer gefunden wird
    for (let y = x * x + 1; y >= -(x * x); y--) {
      if (x * x < y) {
        found = true;
        break;
      }
    }
    if (found == false) {
      return false;
    }
  }
  return true;
}

function quantorExercise_3_b() {
  // Zahlenbereich muss eingeschränkt werden, da die Berechnung sonst zu lange dauert und der Browser crashed (overflow des Datentyps muss ebenfalls verhindert werden)
  for (let x = -100; x <= 100; x++) {
    //   in diesem Beispiel ist y nicht von x abhängig
    for (let y = -100000; y <= 100000; y++) {
      if (x + y == 4 && x - y == 1) {
        return true;
      }
    }
  }
  return false;
}
