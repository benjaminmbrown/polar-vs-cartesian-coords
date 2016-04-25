var r = 75;
var theta = 0;

function setup() {
 createCanvas(640, 360);
 background(255);

 
}

function draw() {
   var x =  r * sin(theta);
   var y = r * cos(theta);
   // move origin to center of screen
   translate(width/2, height/2);

   //draw the circle at the cartesian coord (using our cartesian to polar conversion)
   ellipseMode(CENTER);
   fill(127);
   stroke(255);
   strokeWeight(2);
   line(0,0,x,y);
   ellipse(x,y,40,40);

   //

   theta += 0.02;
    
  }




