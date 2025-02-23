
function Add() {
    var a = parseInt(document.getElementById("num1").value)
    var b = parseInt(document.getElementById("num2").value)
    document.getElementById("result").innerText = "Result is " + (a + b) 
}
function SABTRACT() {
    var a = parseInt(document.getElementById("num1").value)
    var b = parseInt(document.getElementById("num2").value)
    document.getElementById("result").innerText ="Result is "+ (a - b)
}
function MULTIPLY() {
    var a = parseInt(document.getElementById("num1").value)
    var b = parseInt(document.getElementById("num2").value)
    document.getElementById("result").innerText = "Result is "+( a * b)
}
function DIVIDE() {
    var a = parseInt(document.getElementById("num1").value)
    var b = parseInt(document.getElementById("num2").value)
    document.getElementById("result").innerText = "Result is "+(a / b)
}

