
'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'];

var allStores = [];



function Store (location, minCust, maxCust, avgCookie) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.resultArray = [];
  this.dailySales = 0;
}

Store.prototype.renderRow = function(){
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = this.location;



  trElement.appendChild(tdElement);
  for(var i = 0; i < hours.length; i++){
    tdElement= document.createElement('td');
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
function renderHours(){}
var theadElement=document.getElementById ('store');
  }
};

function renderHours() {
  var trElement = document.createElement('tr');
  var theadElement = document.getElementById('store');
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

Store.prototype.totalSold = function () {
  var cookiesSoldCalc = 0;
  for (var i = 0; i < hours.length; i++) {
    cookiesSoldCalc += this.resultArray[i];
  }
  this.dailySales = cookiesSoldCalc;
};



var store1 = new Store('Seattle', 23, 65, 6.3);

store1.randomNumber();
store1.populateHourlySales();
store1.totalSold();
store1.renderRow();
var store2= new Store('Tokyo', 3, 24, 1.2);
store2.randomNumber();
store2.populateHourlySales();
store2.totalSold();
store2.renderRow();
var store3 = new Store('Dubai', 11, 38, 3.7);
store3.randomNumber();
store3.populateHourlySales();
store3.totalSold();
store3.renderRow();
var store4= new Store('Paris', 11, 38, 3.7);
store4.randomNumber();
store4.populateHourlySales();
store4.totalSold();
store4.renderRow();
var store5 = new Store('Lima', 20, 38, 2.3);
store5.randomNumber();
store5.populateHourlySales();
store5.totalSold();
store5.renderRow();

function addLocationSubmitted(event) {
    event.preventDefault();
    var formElement = event.target;
  
    var allStores = new Store(formElement.storeName.value,
      Number(formElement.minimumCust.value),
      Number(formElement.maximumCust.value), Number(formElement.averageSales.value))
  allStores.randomNumber();
  allStores.populateHourlySales();
  allStores.totalSold();
  sallStores.renderRow();
}

var storeFormElement = document.getElementById('demo');
// done 
