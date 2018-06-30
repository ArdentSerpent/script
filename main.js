var subir_bajar = prompt("Subes o Bajas?");
var piso_seleccionado = prompt("a que piso quieres ir");
const primerPiso = 1;
const ultimoPiso = 20;

if (subir_bajar === "subo") {
	var piso_actual = 1;
	for (piso_actual; piso_actual <= ultimoPiso; piso_actual++) {
		console.log("Estas en el piso " + piso_actual);
		if (piso_actual == piso_seleccionado) {
			alert("Llegaste!");
		}
	}
}else if (subir_bajar === "bajo") {
	var pisoActual = 20;
	for (pisoActual; pisoActual >= primerPiso; pisoActual--) {
		console.log("Estas en el piso " + pisoActual);
		if (pisoActual == piso_seleccionado) {
			alert("Llegaste!");
		}
	}
}
