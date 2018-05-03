var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

var mouse = {
	x: undefined,
	y: undefined
};
window.addEventListener('mousemove', function(e) {
	mouse.x = e.x;
	mouse.y = e.y;
});
function Circle (x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;

  this.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.fillStyle = this.color;
    c.stroke();
    c.fill();
  }
  this.update = function() {
    this.x += this.dx;
    this.y += this.dy;
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
	if (mouse.x - this.x < 50 && mouse.x - this.x > - 50
		&& mouse.y - this.y < 50 && mouse.y - this.y > - 50
		&& this.radius < 30 && this.radius - this.x < 0 
		&& this.radius + this.x < innerWidth){
		this.radius += 1.5;
	} else if (this.radius > .5) {
		this.radius -= 1
	}
      this.draw();
  }
}

var circleArray = [];
for (var i = 0; i < 800; i++){
  var x = (Math.random() * window.innerWidth) - radius;
  var y = (Math.random() * window.innerHeight) - radius;
  var dx = (Math.random() - .5)*5;
  var dy = (Math.random() - .5)*5;
  var radius = 20
  var color = 'rgba(' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) + ',' + 1 + ')'; 
  circleArray.push(new Circle(x, y, dx, dy, radius, color));
};

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }
};
	animate();