// establish that 'i' will change as questions are guessed


var i = 0;
var name = " ";

function greeting() {
name = prompt("Welcome! What's your name?");
mylog("Welcome " + name + "! Let's play!");}

var myconsole = document.getElementById("myconsole");
function mylog(v) {
 myconsole.innerHTML += (v + "<br>");
}



// asking questions

function answer1() {
var answer1 = prompt("Does Adin come from San Francisco?");
if (answer1 === "YES" || answer1 === "yes" || answer1 === "y" || answer1 === "Yes") {
	i++;
	mylog("You're right!");
} else {
	mylog("Sorry, you're wrong. Adin IS from San Francisco.");
}
console.log(answer1);}

function answer2() {
var answer2 = prompt("Does Adin speak Russian?"); 
if (answer2 === "NO" || answer2 === "no" || answer2 === "n" || answer2 === "No") {
	i++;
	mylog("You're right!");
} else {
	mylog("Sorry, you're wrong. Adin DOESN'T speak Russian.");
}
console.log(answer2);}

function answer3() {
var answer3 = prompt("Adin was a high school teacher before moving to PDX?");
if (answer3 === "YES" || answer3 === "yes" || answer3 === "y" || answer3 === "Yes") {
	i++;
	mylog("You're right!");
} else {
	mylog("Sorry you're wrong. Adin WAS a high school teacher.");
}
	mylog("You guessed " + i + " right! Thank you for playing, " + name + "!");
	console.log(answer3);}

greeting();
answer1();
answer2();
answer3();

