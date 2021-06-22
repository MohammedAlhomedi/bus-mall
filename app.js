'use strict';

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};


let imgAll = document.getElementById('imgAll');
let firstimg = document.getElementById('firstimg');
let secondimg = document.getElementById('secondimg');
let thirdimg = document.getElementById('thirdimg');
let viewInfo = document.getElementById('viewInfo');
let buttonResults = document.getElementById('buttonResults');
let Chart = document.getElementById('myChart');


let imgArray = ['banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

let counter = 0;
let round = 25;
let firstIndex;
let secondIndex;
let thirdIndex;

function Showimg(name, src) {
  this.name = name;

  this.view = 0;
  this.clicks = 0;
  this.imgsrc = `./img/${src}`;
  Showimg.all.push(this);

};

Showimg.all = [];

for (let i = 0; i < imgArray.length; i++) {
  new Showimg(imgArray[i].split('.')[0], imgArray[i]);
};

function render() {
  firstIndex = randomNumber(0, imgArray.length - 1)

  do {
    secondIndex = randomNumber(0, imgArray.length - 1);
    thirdIndex = randomNumber(0, imgArray.length - 1);
  } while ((firstIndex === secondIndex) || (firstIndex === thirdIndex) || (secondIndex === thirdIndex));


  firstimg.src = Showimg.all[firstIndex].imgsrc;
  secondimg.src = Showimg.all[secondIndex].imgsrc;
  thirdimg.src = Showimg.all[thirdIndex].imgsrc;

  Showimg.all[firstIndex].view++;

  Showimg.all[secondIndex].view++;
  Showimg.all[thirdIndex].view++;
};


function eventHandler(e) {
  if ((e.target.id === 'firstimg' || e.target.id === 'secondimg' || e.target.id === 'thirdimg') && counter < round) {
    if (e.target.id === 'firstimg') {
      Showimg.all[firstIndex].clicks++;
    }
    if (e.target.id === 'firstimg') {
      Showimg.all[secondIndex].clicks++;
    }
    if (e.target.id === 'firstimg') {
      Showimg.all[thirdIndex].clicks++;
    }
    counter++;

    render();
  }

}


function showData(e) {
  let ul = document.createElement('ul');
  viewInfo.appendChild(ul);
  for (let i = 0; i < imgArray.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Showimg.all[i].name} banana had ${Showimg.all[i].clicks} votes, and was seen ${Showimg.all[i].view} times`
  }
  buttonResults.removeEventListener('click', showData);
}
imgAll.addEventListener('click', eventHandler);
viewInfo.addEventListener('click', eventHandler);
render();

function drawChart() {

  let name = [];
  let view = [];
  let click = [];


  for (let i = 0; i < ShowImage.all.length; i++) {
    name.push(ShowImage.all[i].name);
    view.push(ShowImage.all[i].view);
    click.push(ShowImage.all[i].clicks);
  }

  let ctx = document.getElementById('myChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: name,
      datasets: [{
        label: '# of Views',
        data: view,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],

      },
      {
        label: '# of clicks ',
        data: click,
        backgroundColor: 'rgba(255, 206, 86, 1)',
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'],
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}