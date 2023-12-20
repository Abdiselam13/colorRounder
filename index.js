const images = ['red','blue','grey','wheat']

const btn = document.getElementById("btn");

const continar = document.querySelector(".container");




btn.addEventListener('click', function(){
   const imageRondom = getRendomImage();
   
   document.body.style.backgroundColor = images[imageRondom]

   continar.textContent = images[imageRondom]


})

function getRendomImage(){
    return Math.floor(Math.random()*images.length)
}