/* P5.js sketch
 * Created by Arthur Vimond on 06/09/2016.
 */

// Global variables


var showWhiteBackgroundColor = false;

// p5.js native function
// Called once at app's creation
function setup() {

    // Create fullscreen canvas
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5Container');

}

// p5.js native function
// Called every frame (default: 60fps)
function draw() {

    if (showWhiteBackgroundColor) {
        // Draw white background
        background(255);
    } else {
        // Draw black background
        background(0);
    }

    // Set shape and color properties for circles
    stroke(255);
    strokeWeight(3);
    noFill();

    // Draw a circle for each finger on screen
  	for (var i = 0; i < touches.length; i++) {
		ellipse(touches[i].x, touches[i].y, 100, 100);
  	}

    // Set shape property for texts
    strokeWeight(1);
    // Display accelerometer values
    /*text("accelerationX: " + accelerationX, 50, 20);
    text("accelerationY: " + accelerationY, 50, 50);
    text("accelerationZ: " + accelerationZ, 50, 80);*/

    // Display gyroscope values
    /*text("rotationX: " + rotationX, 300, 20);
    text("rotationY: " + rotationY, 300, 50);
    text("rotationZ: " + rotationZ, 300, 80);*/
  
}

function touchStarted() {
    //println("touchStarted");
}

function touchMoved() {
    //println("touchMoved");
}

function touchEnded() {
    //println("touchEnded");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Call Java function
function callJavaFunction() {
    Android.showToast("Called from Javascript");
}

// Called from Java
function changeBackgroundColor() {
    println("changeBackgroundColor() - Called from Java");
    // Inverse boolean variable value
    showWhiteBackgroundColor = !showWhiteBackgroundColor;
}