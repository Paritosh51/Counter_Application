const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const p=document.querySelector("p");
const h2 = document.querySelector("h2");

let count = parseInt(p.innerText);
increment.addEventListener("click", function () {
  count++;
  p.innerText = count ;
  h2.innerText = "Count is incremented !";
});
decrement.addEventListener('click',()=>{
    count--;
    p.innerText = count;
    h2.innerText = "Count is decremented !";
})
reset.addEventListener('click',()=>{
    count=0;
    p.innerText = count;
    h2.innerText = "Count is reseted !";
})