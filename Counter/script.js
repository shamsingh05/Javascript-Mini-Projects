let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let res = document.getElementById("res");
let c = document.querySelector("p");
let count=0;

inc.addEventListener("click",function(){
    count++;
    display();
});

dec.addEventListener("click",function(){
    count--;
    display();
});

res.addEventListener("click",function(){
    count=0;
    display();
})
function display(){
    c.innerText=count;
}