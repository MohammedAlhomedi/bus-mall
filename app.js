'use strict';

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};


let ImgAll = document.getElementById('imgAll');
let firstImg = document.getElementById('firstImg');
let secondImg = document.getElementById('secondImg');
let thirdImg = document.getElementById('thirdImg');
let viewInfo = document.getElementById('viewInfo');
let buttonResults = document.getElementById('buttonResults');
let Chart = document.getElementById('myChart');


let imgArray = ['banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

let counter = 0;
let round = 25;
let firstIndex;
let secondIndex;
let thirdIndex;

function ShowImg(name, src) {
  this.name = name;

  this.view = 0;
  this.clicks = 0;
  this.imgsrc = `./Img/${src}`;
  ShowImg.all.push(this);

};

ShowImg.all = [];

for (let i = 0; i < imgArray.length; i++) {
  new ShowImg(imgArray[i].split('.')[0], imgArray[i]);
};

function render() {
  firstIndex = randomNumber(0, imgArray.length - 1)

  do {
    secondIndex = randomNumber(0, imgArray.length - 1);
    thirdIndex = randomNumber(0, imgArray.length - 1);
  } while ((firstIndex === secondIndex) || (firstIndex === thirdIndex) || (secondIndex === thirdIndex));


  firstImg.src = ShowImg.all[firstIndex].imgsrc;
  secondImg.src = ShowImg.all[secondIndex].imgsrc;
  thirdImg.src = ShowImg.all[thirdIndex].imgsrc;

  ShowImg.all[firstIndex].view++;

  ShowImg.all[secondIndex].view++;
  ShowImg.all[thirdIndex].view++;
};


function eventHandler(e) {
  if ((e.target.id === 'firstImg' || e.target.id === 'secondImg' || e.target.id === 'thirdImg') && counter < round) {
    if (e.target.id === 'firstImg') {
      ShowImg.all[firstIndex].clicks++;
    }
    if (e.target.id === 'firstImg') {
      ShowImg.all[secondIndex].clicks++;
    }
    if (e.target.id === 'firstImg') {
      ShowImg.all[thirdIndex].clicks++;
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
    li.textContent = `${ShowImg.all[i].name} banana had ${ShowImg.all[i].clicks} votes, and was seen ${ShowImg.all[i].view} times`
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