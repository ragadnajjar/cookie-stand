
'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'];

var allStores = [];


var totals = [];
var totalsperhour = [];

function Store(lostoreion, minCust, maxCust, avgCookie) {
  this.lostoreion = lostoreion;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.resultArray = [];
  this.dailySales = 0;
}

Store.prototype.renderRow = function () {

  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = this.lostoreion;
  trElement.appendChild(tdElement);
  for (var i = 0; i < hours.length; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = this.resultArray[i];
    trElement.appendChild(tdElement);
  }
  var allStores = document.getElementById('store');
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailySales;
  trElement.appendChild(tdElement);
  allStores.appendChild(trElement);
};

Store.prototype.randomNumber = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

Store.prototype.populateHourlySales = function () {
  for (var i = 0; i < hours.length; i++) {
    var customersPerHour = Math.round(this.randomNumber() * this.avgCookie);
    this.resultArray.push(customersPerHour);
  }
};
var theadElement = document.getElementById('store');
function renderHours() {

  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = '';
  trElement.appendChild(thElement);
  for (var i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Cookie Total';
  trElement.appendChild(thElement);
  theadElement.appendChild(trElement);
}
renderHours();


function renderFooter() {

  var trElement = document.createElement('tr');

  for (var i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Cookie Total';
  trElement.appendChild(thElement);
  theadElement.appendChild(trElement);
}


Store.prototype.totalSold = function () {
  var cookiesSoldCalc = 0;
  for (var i = 0; i < hours.length; i++) {
    cookiesSoldCalc += this.resultArray[i];
  }
  this.dailySales = cookiesSoldCalc;
  totals.push(this.dailySales);
};



var store1 = new Store('Seattle', 23, 65, 6.3);

store1.randomNumber();
store1.populateHourlySales();
store1.totalSold();
store1.renderRow();
allStores.push(store1);
var store2 = new Store('Tokyo', 3, 24, 1.2);
store2.randomNumber();
store2.populateHourlySales();
store2.totalSold();
store2.renderRow();
allStores.push(store2);
var store3 = new Store('Dubai', 11, 38, 3.7);
store3.randomNumber();
store3.populateHourlySales();
store3.totalSold();
store3.renderRow();
allStores.push(store3);
var store4 = new Store('Paris', 11, 38, 3.7);
store4.randomNumber();
store4.populateHourlySales();
store4.totalSold();
store4.renderRow();
allStores.push(store4);
var store5 = new Store('Lima', 20, 38, 2.3);
store5.randomNumber();
store5.populateHourlySales();
store5.totalSold();
store5.renderRow();
allStores.push(store5);
totalhours();
function totalhours() {
  var total = 0;
  var bigTotal = 0;
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = "total";
  trElement.appendChild(tdElement);
  // var footer = document.getElementById('tablefooter');
  for (let i = 0; i < hours.length; i++) {
   for (let j = 0; j < allStores.length; j++) {
      total += allStores[j].resultArray[i];
    }
    bigTotal += total;
    var tdElement2 = document.createElement('td');
    tdElement2.textContent = total;
    trElement.appendChild(tdElement2);
  }
  var tdElement3 = document.createElement('td');
  tdElement3.textContent = bigTotal;
  trElement.appendChild(tdElement3);
  theadElement.appendChild(trElement);
}




var storeForm = document.getElementById('storeForm');
storeForm.addEventListener('submit' , function(event){
  event.preventDefault();
  console.log(event.target);
  var storeName = event.target.name.value;
  var maxCust = event.target.maxCust.value.split(',');
  var mainCust = event.target.mainCust.value;
  var Paris = event.target.Paris.checked;
  var Tokyo = event.target.Tokyo.checked;
  var Seattle = event.target.Seattle.checked;
  var newStore = new Store(storeName , maxCust ,Seattle,Paris,Tokyo, mainCust);
  console.log(Store);
  newstore.render();
});

new store('Jordan' , ['24' , '30' ],true,false,true, );

new store('America',['58' , '2.5' , '45'],true, false, false,);


new store('syria',['14' , '45'], true, true, true , 'Persian');


for(var i = 0 ; i< allStores.length ; i++){
  allStores[i].render();
}
function getRandomAge(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



