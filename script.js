
//

let productPrice = Number(
	document.getElementById("cena").getAttribute("data-cena")
);
let tax = productPrice * 0.2;

function priceWithTax() {
	alert("price of product is " + (productPrice + tax));
}

document.getElementById("buyButton").addEventListener("click", priceWithTax);

