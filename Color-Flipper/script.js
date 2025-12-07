let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    getRandomColor();
});

function getRandomColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    // console.log(r,g,b);
    change(r,g,b);
}

let head = document.querySelector("h3");
let bg = document.querySelector("div");
function change(r,g,b){
    head.innerText = `rgb(${r} ${g} ${b})`;
    // head.style.color = `rgba(${r}, ${g}, ${b})`;
    
    bg.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
    
}