import "./styles.css";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let penDown = false;
let last_x = 0;
let last_y = 0;

// put canvas in all available screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "beige";
ctx.fillRect(0,0, canvas.width,canvas.height);


canvas.addEventListener("mousedown", function(evt){
positionXY(evt);
})


canvas.addEventListener("mousemove", function(evt){
  brushHappen(evt);
    })
  
    canvas.addEventListener("mouseup", function(evt){
      penDown = false;
      })
  

function positionXY(evt){
  penDown = true;
  
  let x = evt.clientX;
  let y = evt.clientY;
  
  last_x = x;
  last_y = y;
  }


function brushHappen(evt){
  if (penDown === false){
      return;
    }
    let x = evt.clientX;
    let y = evt.clientY;
  
    ctx.strokeStyle = "blue";
  ctx.fillStyle ="blue";
  
    ctx.beginPath();
  let thickness = 20;
    // to draw a line need to have beginig and ending point
    ctx.lineWidth = thickness;
  ctx.moveTo(last_x,last_y);
  ctx.lineTo(x, y);
  
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(x, y, thickness/2, 0, Math.PI+2);
  ctx.fill();
  last_x = x;
  last_y = y;
  }


