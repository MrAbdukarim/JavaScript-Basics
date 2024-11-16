"use strict";

alert("Hello World")

const palce = confirm("Are you here?");
console.log(palce);

const currentPlace = prompt("Where are you?", "")
console.log(typeof currentPlace)

const age = +prompt("How old are you?");
console.log(age + 10);

const names = [];
names[0] = prompt("Enter your name");
console.log(names)

const youtuber = prompt("Enter your favourite YouTuber");
// console.log("https://youtube.com/" + youtuber + "/videos")
console.log(`https://www.youtube.com/${youtuber}`);