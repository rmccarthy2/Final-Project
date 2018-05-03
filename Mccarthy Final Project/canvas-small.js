var canvas = document.querySelector('canvas');
canvas.width = 200;
canvas.height = 200;


var c = canvas.getContext('2d');
var height = 200;
var width = 200;
//tracking mouse position
var mouse = {
  x: undefined,
  y: undefined
};
window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  //console.log(mouse.x, mouse.y);
});

//creating the circles
function Circle (x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

//generating a random color for each circle
  var color = 'rgba(' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) + ',' + Math.random() + ')';
 

  this.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.fillStyle = color;
    c.stroke();
    c.fill();
  }
  this.update = function() {
    this.x += this.dx;
    this.y += this.dy;
//    console.log(color);
//making the circles bounce off of the walls
      if (this.x + this.radius > width || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > height || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

//growing and shrinking the circles according to the mouse position
  if (mouse.x - this.x < 20 && mouse.x - this.x > - 20
    && mouse.y - this.y < 20 && mouse.y - this.y > - 20
    && this.radius < 10 && this.radius - this.x < 0 
    && this.radius + this.x < width){
    this.radius += 1.5;
  } else if (this.radius > .5) {
    this.radius -= 1
  } 
      this.draw();
  }
}

//randomly generating the circles
var circleArray = [];
for (var i = 0; i < 800; i++){

  var x = (Math.random() * width) - radius;
  var y = (Math.random() * height) - radius;
  var dx = (Math.random() - .5)*5;
  var dy = (Math.random() - .5)*5;
  var radius = .5
  circleArray.push(new Circle(x, y, dx, dy, radius));

};
var stop = document.getElementById('stop')
//animating the canvas
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, width, height);

  for (var i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }
 
};
  animate()

