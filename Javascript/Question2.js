//Q2. Calculate properties of a circle

"use strict";
// circumference of a circle
const circumference=(radius) =>{
    console.log("The circumference of a circle is "+2*Math.PI*radius);
}

//area of a circle
const area=(radius) =>{
    console.log("The area is "+Math.PI*radius**2);
}
const r=3;
circumference(r);
area(r);
