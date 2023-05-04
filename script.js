let button=document.getElementById("btn");
button.addEventListener("click",display);

function display(){
    let val1=parseInt(document.getElementById("text1").value);
    let val2=parseInt(document.getElementById("text2").value);
    let add=val1+val2;
    let p1=document.getElementById("result");
    p1.innerHTML=add
}
let box = document.querySelectorAll(".box");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", () => {
    document.body.style.background = "black";
  });
}