var Lettus
var Leef
var Leettuce
var Lettoce
var Letttuce
var Letuce
var Veggieman
var Guy
var Music
var Yay
var GuyX1 = 300
var GuyY1 = 300
var GuyX2 = 400
var GuyY2 = 400
var GuyX3 = 500
var GuyY3 = 500
var GuyX4 = 600
var GuyY4 = 600
var counter = 0;
var countertwo = 0;
musevol = 1
yayvol = 2
increase = 0.5
function preload() {
  Lettus = loadImage ("assets/lettus.png");
  Leef = loadImage ("assets/leef.png");
  Leettuce = loadImage ("assets/leettuce.png");
  Lettoce = loadImage ("assets/lettoce.png");
  Letttuce = loadImage ("assets/letttuce.png");
  Letuce = loadImage ("assets/letuce.png");
  Veggieman = loadImage ("assets/veggieman.png");
  Guy = loadImage ("assets/guy.png");
  Music = loadSound ("assets/robby.m4a")
  Yay = loadSound ("assets/Kids Saying Yay! Sound Effect.mp3")
}
function setup() {
  Music.setVolume(musevol)
  Yay.setVolume(yayvol)
  createCanvas(3000,3000);
  background (100,200,30);
  frameRate(45);
}
function mouseClicked(){
  increase = increase + 0.1
  yayvol = yayvol + increase
  if (musevol > 0.1) {
  musevol = musevol - 0.1
  } else {
    musevol = musevol + 2
  }
  Yay.play()
}
function draw() {
  if (countertwo === 0) {
    fill (1000,1000,1000);
  textSize(80);
  
  text('This "Art" Project May Cause Seisures', 5,100);
  text('to Those Sensitive', 5,200);
   text('"Viewers" Have Also Reported', 5,300);
   text('INTENSE NASUEA', 10,400);
   text('press space for "Lettuce"!', 5,550);
   if (keyCode == 32) {
     countertwo = 1
   }
  }
  else {
  Music.setVolume(musevol)
  Yay.setVolume(yayvol)
  fill (random(200,250),random(20,200),random(20,250));
  textSize(random(100,145));
   textAlign(CENTER);
  text('lettuce time', width/2, height/2);
  console.log(counter);
  console.log(yayvol);
  if(counter % 690 === 0){
    Yay.play()
  }
  if(counter % 420 === 0){
    Yay.play()
  }
  if(counter % 666 === 0){
    Yay.play()
  }
  if(counter % 2650 === 0){
    Music.play()
  }
  image(Lettus, mouseX, mouseY);
  image(Guy, GuyX1, GuyY1)
  GuyX1 = GuyX1 + random(-15,15)
  GuyY1 = GuyY1  + random(-15,15)
   image(Guy, GuyX2, GuyY2)
  GuyX2 = GuyX2 + random(-16,16)
  GuyY2 = GuyY2  + random(-16,16)
   image(Guy, GuyX3, GuyY3)
  GuyX3 = GuyX3 + random(-15,16)
  GuyY3 = GuyY3  + random(-15,16)
   image(Guy, GuyX4, GuyY4)
  GuyX4 = GuyX4 + random(-16,15)
  GuyY4 = GuyY4  + random(-16,15)
  image(Veggieman, random(0,2000), random(0,2000));
  image(Letuce, random(0,2000), random(0,2000));
   image(Letuce, random(0, 2000), random(0,2000));
   image(Letuce, random(0,2000), random(0,2000));
   image(Letuce, random(0,2000), random(0,2000));
   image(Letuce, random(0, 2000), random(0,2000));
   image(Letuce, random(0,2000), random(0,2000));
   image(Letuce, random(0,2000), random(0,2000));
   image(Letuce, random(0,2000), random(0,2000));
   image(Letuce, random(0,2000), random(0,2000));
   image(Letuce, random(0,2000), random(0,2000));
   image(Letuce, random(0,2000), random(0,2000));
   image(Letuce, random(0,2000), random(0,2000));
   image(Letuce, random(0,2000), random(0,2000));
   image(Letuce, random(0,2000), random(0,2000));
   image(Letttuce, random(0, 2000), random(0,2000));
   image(Letttuce, random(0,2000), random(0,2000));
   image(Letttuce, random(0,2000), random(0,2000));
   image(Letttuce, random(0,2000), random(0,2000));
   image(Letttuce, random(0,2000), random(0,2000));
   image(Letttuce, random(0,2000), random(0,2000));
   image(Letttuce, random(0,2000), random(0,2000));
   image(Letttuce, random(0,2000), random(0,2000));
   image(Letttuce, random(0,2000), random(0,2000));
   image(Letttuce, random(0,2000), random(0,2000));
   image(Letttuce, random(0,2000), random(0,2000));
   image(Letttuce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
  image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0, 2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0, 2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
   image(Lettoce, random(0,2000), random(0,2000));
  image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0, 2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0, 2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Leettuce, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Leef, random(0,2000), random(0,2000));
   image(Leef, random(0,2000), random(0,2000));
   image(Leef, random(0,2000), random(0,2000));
   image(Leef, random(0,2000), random(0,2000));
   image(Leef, random(0,2000), random(0,2000));
   image(Leef, random(0,2000), random(0,2000));
   image(Leef, random(0,2000), random(0,2000));
   image(Leef, random(0,2000), random(0,2000));
   image(Leef, random(0,2000), random(0,2000));
   image(Leef, random(0,2000), random(0,2000));
   image(Leef, random(0,2000), random(0,2000));
   image(Leef, random(0,2000), random(0,2000));
   image(Leef, random(0,2000), random(0,2000));
   image(Leef, random(0,2000), random(0,2000));
 image(Lettus, random(1,2000), random(1,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0, 2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
    image(Lettus, random(1,2000), random(1,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0, 2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
   image(Lettus, random(0,2000), random(0,2000));
  image(Leef, mouseY, mouseX);
  image(Lettus, mouseY, mouseY);
  image(Lettus, mouseX, mouseX);
  image(Lettus, mouseY+1, mouseX+1);
  image(Lettus, mouseY+1, mouseY+1);
  image(Lettus, mouseX+1, mouseX+1);
  image(Lettus, mouseY+2, mouseX+2);
  image(Lettus, mouseY+2, mouseY+2);
  image(Lettus, mouseX+2, mouseX+2);
  fill (random(20,250),random(20,250),random(20,250));
  textSize(random(5,145));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000))
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000))
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000))
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  text ("lettuce time", random (1,2000), random (1,2000));
  counter = counter +1
}
}
