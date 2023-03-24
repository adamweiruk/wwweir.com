let random = Math.random

let width = 400, height = 400

class Point{
  x = random() * width
  y = random() * height
  vx = random() * 3
  vy = random() * 3

  move() {
    if (this.x >= width || this.x <= 0) {
      this.vx *= -1
    }
    if (this.y >= height || this.y <= 0) {
      this.vy *= -1
    }
    this.x += this.vx
    this.y += this.vy
  }
}

function setup() {
    createCanvas(width, height)
    p1 = new Point()
    p2 = new Point()
    p3 = new Point()
  }
  
  function draw() {
    background(255)
    line(p1.x, p1.y, p2.x, p2.y)
    line(p2.x, p2.y, p3.x, p3.y)
    line(p3.x, p3.y, p1.x, p1.y)
    p1.move()
    p2.move()
    p3.move()
  }