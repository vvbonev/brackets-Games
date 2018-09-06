var redX = 150,redY = 400;
var shoot = false
var speedBird = new Image 
var delX = 0, delY = 0
var background = new Image
background.scr = "1.png"
speedBird.src = "angry2.jpg"
var myX = 0, myY = 0;
var praschovite = [1,2]

function update() {
         if(delX != 0 && delY != 0){
                  if(delX > 0){
                           delX -= 0.03
                  }else{
                           delX += 0.03
                  }
                  if(redX < 0 || redX > 780){
                           delX = -delX
                  }  
                  if(redY > 580){
                           delY = -delY + 2
                           redY = 580
                  }
                  redX += delX
                  redY += delY
         }
    myX = myX+(mouseX-myX)/10;
    myY = myY+(mouseY-myY)/10;
}

function draw() {
         context.fillRect(0,0,800,800);
         context.drawImage(speedBird,redX,redY,20,20);
         if(delX != 0 && delY != 0){
                  delY+=0.45
         }
         if(delX == 0 && delY == 0){
                  for(index = 0;index < 70;index += 1){
                                    if(redX < 0 || redX > 780){
                                             delX = -delX
                                    }  
                                    if(redY > 580){
                                             delY = -delY + 1
                                    }
                           redX += delX
                           redY += delY
                           delX = 0
                           delY = 0
                  } 
         }
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
         if(!shoot){
                  delX = (redX - mouseX) / 9
                  delY = (redY - mouseY) / 9
                  shoot = true
         }
    console.log("Mouse clicked at", mouseX, mouseY);
};
