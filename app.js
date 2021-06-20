'use strict';



function randomNumber( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) + min ); 
  }


let imageAll = document.getElementById('imgAll');
let firstImg = document.getElementById('firstImg');
let secondImg = document.getElementById('secondImg');
let thirdImg = document.getElementById('thirdImg');

let imgArray = [
    'bathroom.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'wine-glass.jpg',
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
    'boots.jpg',
    'unicorn.jpg',
    'usb.gif',
    'banana.jpg',
    'water-can.jpg',
    
  ];
  let counter = 0;

function Showimg(name, src ){
    this.name = name;
    this.time =1;
    this.view =0;
    this.src = `./img/${src}`;
    Showimg.all.push(this);
    
}
Showimg.all=[];

for( let i = 0; i < imgArray.length; i++ ){
    new Showimg( imgArray[i].split( '.' )[0], imgArray[i] );
  }
  
function render(){
   let firstIndex = randomNumber(0,imgArray.length-1)
   let secondIndex;
   let thirdIndex;
   do{
        secondIndex = randomNumber(0, imgArray.length-1);
        thirdIndex = randomNumber(0,imgArray.length-1);
   }while((firstIndex === secondIndex)||(firstIndex === thirdIndex)||(secondIndex === thirdIndex));

   
firstImg.src = Showimg.all[firstIndex].src;
secondImg.src = Showimg.all[secondIndex].src;
thirdImg.src = Showimg.all[thirdIndex].src;

Showimg.all[firstIndex].view++;
console.log(Showimg.all[firstIndex].view++);
Showimg.all[secondIndex].view++;
Showimg.all[thirdIndex].view++;



}

function eventHandler(e) {
    if((e.target.id === 'firstImg' || e.target.id === 'secondImg' || e.target.id === 'thirdImg') && counter < 25){
      render();
      console.log(counter);
      counter++;
  
    }
  
  }
  
  imgAll.addEventListener('click', eventHandler);
  
  render();

  let numClick=0;
  for(let j=0 ; j<imgArray.length; j++){
    console.log(firstImg);
    firstImg.onclick = function(b) { 
       console.log(++numClick); 
    }

  }

  setTimeout(function(){
    document.getElementById('firstImg').style.display = 'block';
    document.getElementById('secondImg').style.display = 'block';
    document.getElementById('thirdImg').style.display = 'block';
},Showimg.time);

function randomNumber( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
  }

