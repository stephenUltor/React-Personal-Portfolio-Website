import p5 from "p5"

export default function sketch(p) {
  let flock;
  let bg;
  let img;

  p.updateWithProps = props => {
    
    if(props.darkMode){
      bg = p.loadImage("dark-assets/pixel-dark-landscape.webp");
      img = p.loadImage("dark-assets/boids-window-frame-night.webp");
    }else{
      bg = p.loadImage("assets/pixle-cloud-landscape.webp");
      img = p.loadImage("assets/boids-window-frame.webp");
    }
  }

  p.setup = () => {

    if(p.windowWidth < 900){
      p.createCanvas(p.windowWidth -80, (p.windowHeight / 2)+150);
    }else{
      p.createCanvas(p.windowWidth / 2, p.windowHeight / 2);
    }
    
    
    flock = new Flock();
    // Add an initial set of boids into the system
    for (let i = 0; i < 40; i++) {
      let b = new Boid(p.width / 2, p.height / 2);
      flock.addBoid(b);
    }
    
  }

  p.draw = () =>  {
    
    p.background(bg);
    flock.run();
    p.image(img, 0,0, p.width, p.height)
  }

  p.windowResized = () => {
    if(p.windowWidth < 900){
      p.createCanvas(p.windowWidth -80, (p.windowHeight / 2)+150);
    }else{
      p.createCanvas(p.windowWidth / 2, p.windowHeight / 2);
    }
  }

  // Add a new boid into the System
  p.mouseDragged = () => {
    flock.addBoid(new Boid(p.mouseX, p.mouseY));
  }

  // The Nature of Code
  // Daniel Shiffman
  // http://natureofcode.com

  // Flock object
  // Does very little, simply manages the array of all the boids

  function Flock() {
    // An array for all the boids
    this.boids = []; // Initialize the array
  }

  Flock.prototype.run = function () {
    for (let i = 0; i < this.boids.length; i++) {
      this.boids[i].run(this.boids);  // Passing the entire list of boids to each boid individually
    }
  }

  Flock.prototype.addBoid = function (b) {
    this.boids.push(b);
  }

  // The Nature of Code
  // Daniel Shiffman
  // http://natureofcode.com

  // Boid class
  // Methods for Separation, Cohesion, Alignment added

  function Boid(x, y) {
    this.acceleration = p.createVector(0, 0);
    this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));
    this.position = p.createVector(x, y);
    this.r = 3.0;
    this.maxspeed = 3;    // Maximum speed
    this.maxforce = 0.05; // Maximum steering force
  }

  Boid.prototype.run = function (boids) {
    this.flock(boids);
    this.update();
    this.borders();
    this.render();
  }

  Boid.prototype.applyForce = function (force) {
    // We could add mass here if we want A = F / M
    this.acceleration.add(force);
  }

  // We accumulate a new acceleration each time based on three rules
  Boid.prototype.flock = function (boids) {
    let sep = this.separate(boids);   // Separation
    let ali = this.align(boids);      // Alignment
    let coh = this.cohesion(boids);   // Cohesion
    // Arbitrarily weight these forces
    sep.mult(1.5);
    ali.mult(1.0);
    coh.mult(1.0);
    // Add the force vectors to acceleration
    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);
  }

  // Method to update location
  Boid.prototype.update = function () {
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    // Reset accelertion to 0 each cycle
    this.acceleration.mult(0);
  }

  // A method that calculates and applies a steering force towards a target
  // STEER = DESIRED MINUS VELOCITY
  Boid.prototype.seek = function (target) {
    let desired = p5.Vector.sub(target, this.position);  // A vector pointing from the location to the target
    // Normalize desired and scale to maximum speed
    desired.normalize();
    desired.mult(this.maxspeed);
    // Steering = Desired minus Velocity
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);  // Limit to maximum steering force
    return steer;
  }

  Boid.prototype.render = function () {
    // Draw a triangle rotated in the direction of velocity
    let theta = this.velocity.heading() + p.radians(90);
    p.fill(50);
    p.stroke(100);
    p.push();
    p.translate(this.position.x, this.position.y);
    p.rotate(theta);
    p.beginShape();
    p.vertex(0, -this.r * .5);
    p.vertex(-this.r, this.r * .5);
    p.vertex(this.r, this.r * .5);
    p.endShape(p.CLOSE);
    p.pop();
  }

  // Wraparound
  Boid.prototype.borders = function () {
    if (this.position.x < -this.r) this.position.x = p.width + this.r;
    if (this.position.y < -this.r) this.position.y = p.height + this.r;
    if (this.position.x > p.width + this.r) this.position.x = -this.r;
    if (this.position.y > p.height + this.r) this.position.y = -this.r;
  }

  // Separation
  // Method checks for nearby boids and steers away
  Boid.prototype.separate = function (boids) {
    let desiredseparation = 25.0;
    let steer = p.createVector(0, 0);
    let count = 0;
    // For every boid in the system, check if it's too close
    for (let i = 0; i < boids.length; i++) {
      let d = p5.Vector.dist(this.position, boids[i].position);
      // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
      if ((d > 0) && (d < desiredseparation)) {
        // Calculate vector pointing away from neighbor
        let diff = p5.Vector.sub(this.position, boids[i].position);
        diff.normalize();
        diff.div(d);        // Weight by distance
        steer.add(diff);
        count++;            // Keep track of how many
      }
    }
    // Average -- divide by how many
    if (count > 0) {
      steer.div(count);
    }

    // As long as the vector is greater than 0
    if (steer.mag() > 0) {
      // Implement Reynolds: Steering = Desired - Velocity
      steer.normalize();
      steer.mult(this.maxspeed);
      steer.sub(this.velocity);
      steer.limit(this.maxforce);
    }
    return steer;
  }

  // Alignment
  // For every nearby boid in the system, calculate the average velocity
  Boid.prototype.align = function (boids) {
    let neighbordist = 50;
    let sum = p.createVector(0, 0);
    let count = 0;
    for (let i = 0; i < boids.length; i++) {
      let d = p5.Vector.dist(this.position, boids[i].position);
      if ((d > 0) && (d < neighbordist)) {
        sum.add(boids[i].velocity);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      sum.normalize();
      sum.mult(this.maxspeed);
      let steer = p5.Vector.sub(sum, this.velocity);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return p.createVector(0, 0);
    }
  }

  // Cohesion
  // For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
  Boid.prototype.cohesion = function (boids) {
    let neighbordist = 50;
    let sum = p.createVector(0, 0);   // Start with empty vector to accumulate all locations
    let count = 0;
    for (let i = 0; i < boids.length; i++) {
      let d = p5.Vector.dist(this.position, boids[i].position);
      if ((d > 0) && (d < neighbordist)) {
        sum.add(boids[i].position); // Add location
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      return this.seek(sum);  // Steer towards the location
    } else {
      return p.createVector(0, 0);
    }
  }
}