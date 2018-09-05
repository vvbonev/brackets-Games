var redBird = new Image , redX = 150,redY = 400;
var speedBird = new Image , speedX = 0 , speedY = 0
var bombBird = new Image , bombX = 0 , bombY = 0
var prashka = new Image , prashkaX = 200 , prashkaY = 430
var shootbuttonpower = NaN , shootbuttonpowerpower = 100
var delX = 0, delY = 0
prashka.scr = "images.jpg"
redBird.src = "angry1.jpg"
speedBird.src = "angry2.jpg"
bombBird.src = "angry3.jpg"

function update() {
         if(delX<0){
                  delX = 0
         }  
         if(delY>0){
                  delY = 0
         }
         if(shootbuttonpowerpower > 0){
                  shootbuttonpowerpower -= 1.25
         }else{
                  shootbuttonpower = false
         }
};

function draw() {
         context.fillRect(400,400,100,100)
         if(shootbuttonpower){
                  delX  += 0.2
                  delY  -= 0.1
                           redX += delX
                           redY += delY
         }else{
                  delX +=0.00000001
                  delY += 0.1
                  redX += delX
                  redY += delY
         }
         context.drawImage(redBird,redX,redY,50,50);
};

function keyup(key) {
    console.log("Pressed", key);
};

function mouseup() {
         if(mouseX > 400 && mouseX < 500 && mouseY > 400 && mouseY < 500){
                  shootbuttonpowerpower = 100
                  shootbuttonpower = true
         }
};
