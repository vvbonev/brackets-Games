var myX = 0, myY = 0,swordNaLeftLiE = false;
var X = [], Y = [];

function update() {
         if(isKeyPressed[37]){
                  myX -= 1
                  swordNaLeftLiE = true
         }
         if(isKeyPressed[38]){
                  myY -= 1
         }
         if(isKeyPressed[39]){
                  myX += 1
                  swordNaLeftLiE = false
         }
         if(isKeyPressed[40]){
                  myY += 1
         }
};

function draw() {
         context.fillStyle = "blue"
    context.fillRect(myX, myY, 10, 10);
         context.fillStyle = "magenta"
         if(swordNaLeftLiE){
                  context.fillRect(myX + 12,  myY + 4,12,2)
         }else{
                  context.fillRect(myX - 14,  myY + 4,12,2)
         }
         context.fillRect(0,70,500,20)
};

function keyup(key) {};

function mouseup() {
         console.log(mouseX,mouseY)
};
