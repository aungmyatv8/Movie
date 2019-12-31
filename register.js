var goldMark = document.getElementById("gold");
var goldImage = document.getElementById("gold-image");
var platinumMark = document.getElementById("platinum");
var platinumImage = document.getElementById("platinum-image");

var mytelMark = document.getElementById("mytelMark");
var wavemoneyMark = document.getElementById("wavemoneyMark");
var wavemoneyImage = document.getElementById("wavemoneyImage");
var mytelImage = document.getElementById("mytelImage");

var payBill = document.querySelector(".pay-bill");
var payWave = document.querySelector(".pay-wave");

function goldUser() {
  goldMark.setAttribute("style", "display: inline");
  platinumMark.setAttribute("style", "display: none");
}

function platinumUser() {
  platinumMark.setAttribute("style", "display: inline");
  goldMark.setAttribute("style", "display: none");
}

function mytel() {
  mytelMark.setAttribute("style", "display: inline");
  wavemoneyMark.setAttribute("style", "display: none");
  payBill.setAttribute("style", "display: block");
  payWave.setAttribute("style", "display: none");
}

function waveMoney() {
  wavemoneyMark.setAttribute("style", "display: inline");
  mytelMark.setAttribute("style", "display: none");
  payWave.setAttribute("style", "display: block");
  payBill.setAttribute("style", "display: none");
}
