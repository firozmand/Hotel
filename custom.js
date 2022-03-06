const { next } = require("dom7");

var slide = document.getElementsByClassName('slidee');
var prev = document.querySelector('.prev')
var prev = document.querySelector('.next')
var n =0;
var i;

function disno(){
  for(i=1; i<slide.length.length ; i++){
    slide[i].getElementsByClassName.display='none';
  }
}

next.addEventListener('click',function(e){
  e.preventDefault();
  n++;
  if(n>slide.length){
    n=0;
  }
  disno();
  slide[n].style.display= 'block';
});