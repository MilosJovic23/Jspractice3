//

//

var cenaProizvoda = Number(
	document.getElementById("cena").getAttribute("data-cena")
);

// console.log(cenaProizvoda);

var porez = cenaProizvoda * 0.2;

// console.log(cenaProizvoda + porez);

function cenaSaPdvom() {
	alert("cena proizvoda sa porezom je " + (cenaProizvoda + porez));
}

document.getElementById("buyButton").addEventListener("click", cenaSaPdvom);
