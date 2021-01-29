/* When the input field receives input, convert the value from cups to grams */
function breadFlourConverter(cup, tbsp, tsp) {
	var output = cup * 136 + tbsp * 8.5 + tsp * 2.83;
	document.getElementById("breadFlourGrams").innerHTML = parseFloat(output.toFixed(1));
}

function allPurposeFlourConverter(cup, tbsp, tsp) {
	var output = cup * 125 + tbsp * 7.81 + tsp * 2.6;
	document.getElementById("allPurposeFlourGrams").innerHTML = parseFloat(output.toFixed(1));
}

function cakeFlourConverter(cup, tbsp, tsp) {
	var output = cup * 130 + tbsp * 8.13 + tsp * 2.71;
	document.getElementById("cakeFlourGrams").innerHTML = parseFloat(output.toFixed(1));
}

function waterConverter(cup, tbsp, tsp) {
	var output = cup * 240 + tbsp * 15 + tsp * 5;
	document.getElementById("waterGrams").innerHTML = parseFloat(output.toFixed(1));
}

function sugarConverter(cup, tbsp, tsp) {
	var output = cup * 201 + tbsp * 12.56 + tsp * 4.18;
	document.getElementById("sugarGrams").innerHTML = parseFloat(output.toFixed(1));
}

function powderedSugarConverter(cup, tbsp, tsp) {
	var output = cup * 120 + tbsp * 7.5 + tsp * 2.5;
	document.getElementById("powderedSugarGrams").innerHTML = parseFloat(output.toFixed(1));
}

function saltConverter(cup, tbsp, tsp) {
	var output = cup * 273.12 + tbsp * 17.07 + tsp * 5.69;
	document.getElementById("saltGrams").innerHTML = parseFloat(output.toFixed(1));
}

function cocoaPowderConverter(cup, tbsp, tsp) {
	var output = cup * 120 + tbsp * 7.5 + tsp * 2.5;
	document.getElementById("cocoaPowderGrams").innerHTML = parseFloat(output.toFixed(1));
}

function butterConverter(cup, tbsp, tsp) {
	var output = cup * 227 + tbsp * 14.2 + tsp * 4.72;
	document.getElementById("butterGrams").innerHTML = parseFloat(output.toFixed(1));
}

function honeyConverter(cup, tbsp, tsp) {
	var output = cup * 340 + tbsp * 21.25 + tsp * 7.08;
	document.getElementById("honeyGrams").innerHTML = parseFloat(output.toFixed(1));
}

function oilConverter(cup, tbsp, tsp) {
	var output = cup * 218 + tbsp * 13.63 + tsp * 4.54;
	document.getElementById("oilGrams").innerHTML = parseFloat(output.toFixed(1));
}

function chocochipConverter(cup, tbsp, tsp) {
	var output = cup * 170 + tbsp * 10.63 + tsp * 3.54;
	document.getElementById("chocochipGrams").innerHTML = parseFloat(output.toFixed(1));
}

function chocochunkConverter(cup, tbsp, tsp) {
	var output = cup * 140 + tbsp * 8.75 + tsp * 2.92;
	document.getElementById("chocochunkGrams").innerHTML = parseFloat(output.toFixed(1));
}

var Pan = function(shape, size) {
	this.shape = shape;
	this.size = size;
}

function panConverter(before, after, ingredient) {
	beforeSize = parseFloat(before.substring(1));
	afterSize = parseFloat(after.substring(1));
	if (before.charAt(0) === "r") 
		beforeArea = beforeSize * beforeSize * 3.14;
	else
		beforeArea = beforeSize * beforeSize;
	if (after.charAt(0) === "r")
		afterArea = afterSize * afterSize * 3.14;
	else
		afterArea = afterSize * afterSize;
	var ratio = afterArea / beforeArea;
	document.getElementById('afterIngredient').innerHTML = (ingredient * ratio).toFixed(1) + " g";
}