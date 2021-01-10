/* When the input field receives input, convert the value from cups to grams */
function flourConverter(cup, tbsp, tsp) {
	var output = cup * 125 + tbsp * 7.81 + tsp * 2.6;
	document.getElementById("flourGrams").innerHTML = parseFloat(output.toFixed(1));
}

function waterConverter(cup, tbsp, tsp) {
	var output = cup * 240 + tbsp * 15 + tsp * 5;
	document.getElementById("waterGrams").innerHTML = parseFloat(output.toFixed(1));
}