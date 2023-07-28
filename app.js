// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */

// Five arrays (Subject, Verbs, Adjectives, Nouns, Nouns)
var first = ["The Turkey","Mom","Dad","The dog","My teacher","The elephant","The cat"]
var second = ["sat on","ate","danced with","saw","doesn't like","kissed"]
var third = ["a funny","a scary","a goofy","a slimy","a braking","a fat"]
var four = ["goat","monkey","fish","cow","frog","bug","worm"]
var five = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"]


//Import all the important tags to access
let b1= document.querySelector("#num1")
let b2 = document.querySelector("#num2")
let b3= document.querySelector("#num3")
let b4 = document.querySelector("#num4")
let b5= document.querySelector("#num5")

let para = document.querySelector("#para")


// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
const speakButton = document.querySelector('button');
let textToSpeak = "";

function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

speakButton.addEventListener('click', function () {
	speakNow(textToSpeak);
	para.textContent = textToSpeak;
});


//Listener for the first button
b1.addEventListener('click',function(){
	textToSpeak += first[Math.floor(Math.random()*first.length)] + " ";
})

//Listener for the second button
b2.addEventListener('click',function(){
	textToSpeak += second[Math.floor(Math.random()*second.length)] + " ";
})

//Listener for the third button
b3.addEventListener('click',function(){
	textToSpeak += third[Math.floor(Math.random()*third.length)] + " ";
})

//Listener for the forth button
b4.addEventListener('click',function(){
	textToSpeak += four[Math.floor(Math.random()*four.length)] + " ";
})

//Listener for the fifth button
b5.addEventListener('click',function(){
	textToSpeak += five[Math.floor(Math.random()*five	.length)] + " ";
})


//Create listener
storyCreator.addEventListener('click',function(){
	let story = makeRandomStory()
	speakNow(story)
	para.textContent = story
})

//Reset event listener
reset.addEventListener('click', function(){
	para.textContent = "";
	textToSpeak = "";
})