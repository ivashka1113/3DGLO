"use strict";

import {
    animate
} from "./helpers";

const calc = (price = 100) => {
    const calcBlock = document.querySelector(".calc-block");
    const calcType = document.querySelector(".calc-type");
    const calcSquare = document.querySelector(".calc-square");
    const calcCount = document.querySelector(".calc-count");
    const calcDay = document.querySelector(".calc-day");
    const total = document.getElementById("total");
    let oldValue = 0;
    let totalValue = 0;




    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = +calcSquare.value;
        const calcCountValue = 1 + (0.1 * (+calcCount.value));
        const calcDayValue = !calcDay.value ? 1 : +calcDay.value >= 10 ? 1 : +calcDay.value > 5 ? 1.5 : 2;
        oldValue = totalValue;
        totalValue = 0;


        if (calcTypeValue && calcSquareValue) {
            totalValue = Math.round(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue);
            console.log(calcTypeValue, calcSquareValue, calcCountValue, calcDayValue, totalValue);
            animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    if (totalValue > oldValue) {
                        total.textContent = oldValue + parseInt((totalValue - oldValue) * progress);
                    } else if (totalValue < oldValue) {
                        total.textContent = parseInt((oldValue - ((oldValue - totalValue) * progress)));
                    } else {
                        total.textContent = totalValue;
                    }
                }
            });

        } else {
            total.textContent = 0;
        }
    }

    calcBlock.addEventListener('input', () => {
        countCalc();
    })
}

export default calc;