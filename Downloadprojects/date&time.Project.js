/*
program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
/*
const today = new Date();
const day = today.getDay();
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log(`Today is : ${daylist[day]}.`);
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
let am_pm = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && am_pm
===' PM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
am_pm=' Noon';
} 
else
{ 
hour=12;
am_pm=' PM';
} 
} 
if (hour===0 && am_pm
===' AM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
am_pm=' Midnight';
} 
else
{ 
hour=12;
am_pm=' AM';
} 
} 
console.log(`Current Time : ${hour}${am_pm} : ${minute} : ${second}`);
*/

const date = new Date();
const day = date.toLocaleDateString("en-US", { weekday: 'long' });
const hour = `${date.toLocaleString('en-US', { hour: 'numeric', hour12: true })} : ${date.getMinutes()} : ${date.getSeconds()}`;


console.log(`Today is : ${day}`);
console.log(`Current time is : ${hour}`);