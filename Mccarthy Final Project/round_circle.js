var canvas = document.querySelector('canvas');
canvas.width = 150;
canvas.height = 150;
var c = canvas.getContext('2d');

var mouse = {
  x: undefined,
  y: undefined
};
window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
});
function Circle (x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.outline = outline
  this.radius = radius;
  var color = 'rgba(' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) + ',' + (Math.random() + .1) + ')'; 

  this.draw = function() {
    c.beginPath()
    c.strokeStyle = outline;
    c.lineWidth = 3;
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.fillStyle = this.color;
    c.stroke();
    c.fill();
  }
  this.update = function() {
    this.x = this.x;
    this.y = this.y;

  if (mouse.x - this.x < 75  && mouse.x - this.x > - 50
    && mouse.y - this.y < 290 && mouse.y - this.y > 180
    && this.radius < 30 && this.radius - this.x < 0 
    && this.radius + this.x < innerWidth){
    this.radius += 1.5;
  } else if (this.radius > 5) {
    this.radius -= 1
  }
      this.draw();
  }
}

var circleArray = [];
for (var i = 0; i < 1; i++){
  var x = 75;
  var y = 75;
  var color = 'rgba(' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) + ',' + (Math.random() + .1) + ')'; 
  var outline = 'rgba(' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) + ',' + (Math.random() + .1) + ')'; 
  var radius = 5
  circleArray.push(new Circle(x, y, radius, color));
};
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }
 
};
  animate()

