//


var cenaProizvoda = Number(
	document.getElementById("cena").getAttribute("data-cena")
);
var porez = cenaProizvoda * 0.2;

function cenaSaPdvom() {
	alert("cena proizvoda sa porezom je " + (cenaProizvoda + porez));
}
document.getElementById("buyButton").addEventListener("click", cenaSaPdvom);
