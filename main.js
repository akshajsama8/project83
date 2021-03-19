var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;

new_width =  screen.width - 70; 
new_height = screen.height - 300;
	if(width < 992)
	{
	document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
	}
	canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
	console.log("my_touchstart");
  //Additional Activity
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;
  //End Additional Activity
         
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{

	console.log("my_touchMove");
    ("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY-canvas.offsetTop;
  
canvas = document.getElementById("myCanvas"); 
ctx= canvas.getContext("2d"); 
color = "red"; ctx.beginPath(); 
ctx.strokeStyle = color; 
ctx.lineWidth = 2; 
ctx.arc(200, 200, 40 ,5 , 2*Math.PI); 
ctx.stroke(); 
canvas.addEventListener("mousedown", my_mousedown); 
function my_mousedown(e) 
{ 
    //taking color from input box 
    //additional activity start 

    //addition activity ends 
 
function circle(mouse_x , mouse_y) { 
    ctx.beginPath(); 
    ctx.strokeStyle = color; 
    ctx.lineWidth = 2; 
    ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI); ctx.stroke(); 
} 

//additional activity 
function clearArea() { 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
}

var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;

new_width =  screen.width - 70; 
new_height = screen.height - 300;
	if(width < 992)
	{
	document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
	}
	canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
	console.log("my_touchstart");
  //Additional Activity
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;
  //End Additional Activity
         
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{

	console.log("my_touchMove");
    ("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY-canvas.offsetTop;
 
  
