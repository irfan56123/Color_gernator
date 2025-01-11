let btn = document.querySelector("button");
console.dir(btn);
btn.addEventListener("click",say);


function say () {
    console.log("color update");
   
    let h = document.querySelector("h1");
    let random = randomColor();
    h.innerText = random;

    let div =  document.querySelector("div");
    div.style.backgroundColor = random;
    


}


function randomColor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}