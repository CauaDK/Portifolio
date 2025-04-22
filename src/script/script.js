function menuButton(){

    let dropdown = document.getElementById("dropdown");

    if (dropdown.classList.contains("hidden")){
        dropdown.classList.remove("hidden");
        dropdown.classList.add("flex");
    } else {
        dropdown.classList.remove("flex");
        dropdown.classList.add("hidden");
    }
}

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#00aaff",
    "#25a0fe",
    "#3696fe",
    "#448cfd",
    "#4f80fc",
    "#5974fc",
    "#6366fc",
    "#6d57fb",
    "#7644f9",
    "#7f2bf5",
    "#841ee4",
    "#841ee4",
    "#ff00c8"
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index];
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
  
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
      circle.style.left = x + "px";
      circle.style.top = y + "px";
      
      circle.style.scale = (circles.length - index) / circles.length;
      
      circle.x = x;
      circle.y = y;
  
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();