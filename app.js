'use strict';

let customerName =[];
let carModel =[];
let carPrice =[];

function data (customerName,Model,Price){
  this.customerName=[];
  this.carModel=[];
  this.carPrice=[];
  customerName.push(customerName);
  carModel.push(Model);
  carPrice.push(Price);

}
ReadFromLocalStorge();
ReadFromLocalStorge2();
ReadFromLocalStorge3();
let car_rental=document.getElementById('car_rental');

// car_rental.addEventListener('submit');

function ammar (event){
  event.preventDefault();
  let customerName = event.target.value;
  let Model = event.target.value;
  let Price = event.target.value;

  customerName.push(customerName);
  carModel.push(Model);
  carPrice.push(Price);
  console.log(customerName);
  console.log(carModel);
  console.log(carPrice);
  randomInt();
}
console.log(customerName);
console.log(carModel);
console.log(carPrice);

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomInt(1000, 10000);
console.log(rndInt);

function renderList(){
let container = document.getElementById('list');
container.innerHTML = '';
let ulel = document.createElement('ul');
container.appendChild(ulel);
for (let i =0; i <customerName.length; i++){
    let liel=document.getElementById('li')
    ulel.appendChild(liel)
    liel.textContent=`${i+1}. ${customerName[i]}`
    let pel =document.createElement('p')
    liel.appendChild(pel)
    liel.setAttribute('id','mel')
pel.textContent=carModel[i]
pel.setAttribute('id','pel')
let pel1 =document.createElement('p');
pel1.id = 'removeButton'
pel1.textContent = 'X';
pel1.addEventListener('click', function(){
    customerName.splice(i,1);
    carModel.splice(i,1);
    carPrice.splice(i,1);
    SaveToLocalStorge();
    SaveToLocalStorge2();
    SaveToLocalStorge3();
    renderList();

});
liel.appendChild(pel1);
}

function SaveToLocalStorge(){
    let save1 =JSON.stringify(customerName)
    localStorage.setItem('customerName', save1)
}
function SaveToLocalStorge2(){
    let save2 =JSON.stringify(customerName)
    localStorage.setItem('carModel', save2)
}
function SaveToLocalStorge3(){
    let save3 =JSON.stringify(customerName)
    localStorage.setItem('carPrice', save3)
}
function ReadFromLocalStorge(){
    if (localStorage.getItem('customerName')){
        customerName=JSON.parse(localStorage.getItem('customerName'))
    }
}
function ReadFromLocalStorge2(){
    if (localStorage.getItem('carModel')){
        customerName=JSON.parse(localStorage.getItem('carModel'))
    }
}
function ReadFromLocalStorge3(){
    if (localStorage.getItem('carPrice')){
        customerName=JSON.parse(localStorage.getItem('carPrice'))
    }
}