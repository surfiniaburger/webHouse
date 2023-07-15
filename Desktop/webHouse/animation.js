// Get the canvas element and its 2D rendering context
let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

// Set the initial speed, position, and radius of the ball
const speed = 4;
let position = 0;
let movespeed = speed;
let radius = 40;

// Function to move the ball horizontally
function moveBall() {
    // Check if the ball reaches the edges of the canvas
    if (position + radius > 640) {
        movespeed = -speed; // Reverse the direction if the ball reaches the right edge
    } else if (position - radius < 0) {
        movespeed = speed; // Reverse the direction if the ball reaches the left edge
    }
    position += movespeed; // Update the ball's position
}

// Function to draw the ball on the canvas
function drawBall() {
    // Clear the entire canvas
    context.clearRect(0, 0, 640, 480);

    // Set the fill style for the ball
    context.fillStyle = "#62687f";

    // Begin drawing a new path for the ball
    context.beginPath();

    // Draw a circle at the current position with the specified radius
    context.arc(position, 240, radius, 0, 2 * Math.PI);

    // Close the path before filling it
    context.closePath();

    // Fill the path with the specified fill style
    context.fill();
}

// Function to animate the ball movement
function animate() {
    moveBall(); // Move the ball horizontally
    drawBall(); // Draw the ball on the canvas
    window.requestAnimationFrame(animate); // Request the next animation frame
}

// Start the animation by requesting the first frame
window.requestAnimationFrame(animate);
