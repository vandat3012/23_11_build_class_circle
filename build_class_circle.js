function Circle(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}
function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle(){
    let new1 = document.getElementById("canvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle= new Circle(x,y,radius);
    new1.beginPath();
    new1.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    new1.fillStyle = color;
    new1.fill();
}

function createMultipleCircle(){
    for(let i = 0; i<500; i++){
        createCircle();
    }
}

createMultipleCircle();