var x = 7;
var y = 3;
document.getElementsByClassName("rezultat")[0]
    .innerHTML = `To create a function that will calculate the result of x - y where for x = ${x} and y = ${y}`;
function odzemanje(x, y) {
    var rezultat = x - y;
    document.getElementById("odzemanje").innerHTML = rezultat;
};
var x = 8;
var y = 3;
document.getElementsByClassName("rezultat")[3]
    .innerHTML = "To create a function that will calculate the result of x + y where for x =" + x + " and y = " + y;
function sobiranje(x, y) {
    var rezultat = x + y;
    document.getElementById("sobiranje").innerHTML = rezultat;
};
var x = 6;
var y = 9;
document.getElementsByClassName("rezultat")[6]
    .innerHTML = "To create a function that will calculate the result of x * y where for x = " + x + " and y = " + y;
function mnozenje(x, y) {
    var rezultat = x * y;
    document.getElementById("mnozenje").innerHTML = rezultat;
};
var x = 132;
var y = 6;
document.getElementsByClassName("rezultat")[9]
    .innerHTML = "To create a function that will calculate the result of x - y where for x = " + x + " i y = " + y;
function delenje(x, y) {
    var rezultat = x / y;
    document.getElementById("delenje").innerHTML = rezultat;
};