'use strict';
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
function Stores(name, minCust, maxCust, avgCookie) {
    //var cat = {}
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.totalCookiesPerDay = [];
    this.totalCookiesPerHour =[];
}

Stores.prototype.getNumOfCookie = function () {
    var randCustomer = getRandomCustomer(this.minCust, this.maxCust);//GET a random customer number from the function
    var numbOfCookies = Math.floor(randCustomer * this.avgCookie);//number of cookies for customer per hour
    for (var i = 0; i < hours.length; i++) {
        this.totalCookiesPerDay[i] += numbOfCookies;
    }
}
Stores.prototype.render = function () {
    var container = document.getElementById('cookie-stand');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (var i = 0; i < hours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = `${hours[i]} ${this.totalCookiesPerHour[i]} cookies`;
        ulEl.appendChild(liEl);
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = `total ${this.totalCookiesPerDay}`;
    ulEl.appendChild(totalLi);
}
function getRandomCustomer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
var store1 = new Stores('seattle', 23, 65, 6.3);
store1.getNumOfCookie();
store1.render();

var store2 = new Stores('Tokyo', 3, 24, 1.2);
store2.getNumOfCookie();
store2.render();
// var store3 = new Stores('Dubai', 11, 38, 3.7);
// store3.render();
// var store4 = new Stores('Paris', 20, 38, 2.3);
// store4.render();
// var store5 = new Stores('Lima', 20, 38, 2.3);
// store5.render();

// function getNumOfCookies(minCust, maxCust) {
//     min = Math.ceil(minCust);
//     max = Math.floor(maxc);
//     return Math.floor(Math.random() * (max - min)) + min;
// }

//2 helper function to calculate random age within range
function getRandomCustomer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


























// var store2 = {
//     name : 'Tokyo',
//     MinCust: 3,
//     MinCustt:24,
//     Avgcookie :1.2,
//     hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'],
//     getnumofcookie : function(){
//         for (var i = 0; i < this.hours.length; i++) {
//             totalperhour.push(getRandomcookie(this.MinCust,this.MaxCust));
//             total+=totalperhour[i];
//             console.log(totalperhour[i]);
//         }
//     },
//     render : function(){
//         var container = document.getElementById('cookie-stand');
//         var articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         var h3El = document.createElement('h3');
//         articleEl.appendChild(h3El);
//         h3El.textContent = store2.name;
//         // var pEl = document.createElement('p');
//         // pEl.textContent = `${store1.  MaxCust}, ${store1. MinCust}, ${store1. Avgcookie} .`;
//         //  articleEl.appendChild(pEl);
//         var ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//           for (var i = 0; i < this.hours.length; i++){
//           var liEl = document.createElement('li');
//           liEl.textContent = `${this.hours[i]} ${totalperhour[i]} cookies`;
//           ulEl.appendChild(liEl);
//         }
//         liEl.textContent = `total ${total}`;

//       }
// };
// function getRandomcookie(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
//   store2.getnumofcookie();
// store2.render();

// var store3 = {
//     name : 'Dubai',
//     MinCust: 11,
//     MinCustt:38,
//     Avgcookie :3.7,
//     hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'],
//     getnumofcookie : function(){
//         for (var i = 0; i < this.hours.length; i++) {
//             totalperhour.push(getRandomcookie(this.MinCust,this.MaxCust));
//             total+=totalperhour[i];
//             console.log(totalperhour[i]);
//         }
//     },
//     render : function(){
//         var container = document.getElementById('cookie-stand');
//         var articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         var h3El = document.createElement('h3');
//         articleEl.appendChild(h3El);
//         h3El.textContent = store3.name;
//         // var pEl = document.createElement('p');
//         // pEl.textContent = `${store1.  MaxCust}, ${store1. MinCust}, ${store1. Avgcookie} .`;
//         //  articleEl.appendChild(pEl);
//         var ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//           for (var i = 0; i < this.hours.length; i++){
//           var liEl = document.createElement('li');
//           liEl.textContent = `${this.hours[i]} ${totalperhour[i]} cookies`;
//           ulEl.appendChild(liEl);
//         } 
//         liEl.textContent = `total ${total}`;

//       }
// };
// function getRandomcookie(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
//   store3.getnumofcookie();
// store3.render();



// var store4 = {
//     name : 'Paris',
//     MinCust: 20,
//     MinCustt:38,
//     Avgcookie :2.3,
//     hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'],
//     getnumofcookie : function(){
//         for (var i = 0; i < this.hours.length; i++) {
//             totalperhour.push(getRandomcookie(this.MinCust,this.MaxCust));
//             total+=totalperhour[i];
//             console.log(totalperhour[i]);
//         }
//     },
//     render : function(){
//         var container = document.getElementById('cookie-stand');
//         var articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         var h4El = document.createElement('h4');
//         articleEl.appendChild(h4El);
//         h4El.textContent = store4.name;
//         // var pEl = document.createElement('p');
//         // pEl.textContent = `${store1.  MaxCust}, ${store1. MinCust}, ${store1. Avgcookie} .`;
//         //  articleEl.appendChild(pEl);
//         var ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//           for (var i = 0; i < this.hours.length; i++){
//           var liEl = document.createElement('li');
//           liEl.textContent = `${this.hours[i]} ${totalperhour[i]} cookies`;
//           ulEl.appendChild(liEl);
//         }
//         liEl.textContent = `total ${total}`;


//       }
// };
// function getRandomcookie(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
//   store4.getnumofcookie();
// store4.render();





// var store5= {
//     name : 'Lima',
//     MinCust: 20,
//     MinCustt:38,
//     Avgcookie :2.3,
//     hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'],
//     getnumofcookie : function(){
//         for (var i = 0; i < this.hours.length; i++) {
//             totalperhour.push(getRandomcookie(this.MinCust,this.MaxCust));
//             total+=totalperhour[i];
//             console.log(totalperhour[i]);
//         }
//     },
//     render : function(){
//         var container = document.getElementById('cookie-stand');
//         var articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         var h5El = document.createElement('h5');
//         articleEl.appendChild(h5El);
//         h5El.textContent = store5.name;
//         // var pEl = document.createElement('p');
//         // pEl.textContent = `${store1.  MaxCust}, ${store1. MinCust}, ${store1. Avgcookie} .`;
//         //  articleEl.appendChild(pEl);
//         var ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//           for (var i = 0; i < this.hours.length; i++){
//           var liEl = document.createElement('li');
//           liEl.textContent = `${this.hours[i]} ${totalperhour[i]} cookies`;
//           ulEl.appendChild(liEl);
//         }
//         liEl.textContent = `total ${total}`;


//       }
// };
// function getRandomcookie(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
//   store5.getnumofcookie();
// store5.render();
