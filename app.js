'use strict';

function randomNumber( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) + min ); 
  }


let ImgAll = document.getElementById('imgAll');
let firstImg = document.getElementById('firstImg');
let secondImg = document.getElementById('secondImg');
let thirdImg = document.getElementById('thirdImg');
let viewInfo = document.getElementById('viewInfo');
let buttonResults = document.getElementById('buttonResults');


let imgArray = [
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg'
];
let counter = 0;
let round=25;
let firstIndex ;
let secondIndex;
let thirdIndex;

function ShowImg(name, src ){
  this.name = name;
  
  this.view =0;
  this.clicks=0;
  this.imgsrc = `./Img/${src}`;
  ShowImg.all.push(this);
  
}
ShowImg.all=[];

for( let i = 0; i < imgArray.length; i++ ){
  new ShowImg( imgArray[i].split( '.' )[0], imgArray[i] );
}

function render(){
  firstIndex = randomNumber(0,imgArray.length-1)
 
 do{
      secondIndex = randomNumber(0, imgArray.length-1);
      thirdIndex = randomNumber(0,imgArray.length-1);
 }while((firstIndex === secondIndex)||(firstIndex === thirdIndex)||(secondIndex === thirdIndex));

 
firstImg.src = ShowImg.all[firstIndex].imgsrc;
secondImg.src = ShowImg.all[secondIndex].imgsrc;
thirdImg.src = ShowImg.all[thirdIndex].imgsrc;

ShowImg.all[firstIndex].view++;

ShowImg.all[secondIndex].view++;
ShowImg.all[thirdIndex].view++;
}


function eventHandler(e) {
  if((e.target.id === 'firstImg' || e.target.id === 'secondImg' || e.target.id === 'thirdImg') && counter < round){
    if(e.target.id === 'firstImg' ){
      ShowImg.all[firstIndex].clicks++;
    }
    if(e.target.id === 'firstImg' ){
      ShowImg.all[secondIndex].clicks++;
    }
    if(e.target.id === 'firstImg' ){
      ShowImg.all[thirdIndex].clicks++;
     }
    counter++;
   
    render();
  }

}


function showData(e){
  let ul = document.createElement('ul');
  viewInfo.appendChild(ul);
  for(let i=0 ; i<imgArray.length; i++){
    let li =document.createElement('li');
    ul.appendChild(li);
    li.textContent=`${ShowImg.all[i].name} banana had ${ShowImg.all[i].clicks} votes, and was seen ${ShowImg.all[i].view} times`
  }
  buttonResults.removeEventListener('click',showData);
}
imgAll.addEventListener('click', eventHandler);
viewInfo.addEventListener('click', eventHandler);
render();

function randomNumber( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}

