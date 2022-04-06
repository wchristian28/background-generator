// this can be writting in non dry format below

// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");


// function setGradient () {
// 	body.style.background = 
// 		"linear-gradient(to right," 
// 		+ color1.value 
// 		+ ", " 
// 		+ color2.value
// 		+ ")";
// }

// color1.addEventListener("input", function(){
// 	body.style.background = 
// 		"linear-gradient(to right," 
// 		+ color1.value 
// 		+ ", " 
// 		+ color2.value
// 		+ ")";
// })

// color2.addEventListener("input", function(){
// 	body.style.background = 
// 		"linear-gradient(to right," 
// 		+ color1.value 
// 		+ ", " 
// 		+ color2.value
// 		+ ")";
// })




var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient () {
	body.style.background = 
		"linear-gradient(to right," 
		+ color1.value 
		+ ", " 
		+ color2.value
		+ ")";

		css.textContent = body.style.background + ":";//textContent adds a text content 
}
// over here we can keep adding function , events
color1.addEventListener("input", setGradient);// ()); we don't need to call the function 
// we want this to be called everytime the input is selected

color2.addEventListener("input", setGradient);//cause the input event is triggered automacally
//second parameter get ran with the event



// function generateRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// var randomColor=generateRandomColor();