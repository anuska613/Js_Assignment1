//Q4. The Calculator

"use strict";

function calculator(number){
    const half= number/2;
    const square= half**2;
    const area= Math.pi*square**2;

    coonsole.log("The half of given number is" + half +
        "\n The square of half is "+square +
        "\n THe area of circle is" +area);
}
calculator(40);

