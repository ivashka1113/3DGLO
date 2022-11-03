"use strict";

const calc = (price = 100) => {
    const calcBlock = document.querySelector(".calc-block");
    const calcType = document.querySelector(".calc-type");
    const calcSquare = document.querySelector(".calc-square");
    const calcCount = document.querySelector(".calc-count");
    const calcDay = document.querySelector(".calc-day");
    const total = document.getElementById("total");

    let id;



    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = +calcSquare.value;
        const calcCountValue = 1 + (0.1 * (+calcCount.value));
        const calcDayValue = !calcDay.value ? 1 : +calcDay.value >= 10 ? 1 : +calcDay.value > 5 ? 1.5 : 2;
        let totalValue = 0;

        let i;
        let oldValue = total.textContent;

        if (calcTypeValue && calcSquareValue) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
            console.log(price, calcTypeValue, calcSquareValue, calcCountValue, calcDayValue);
            i = 0;
            id = setInterval(() => {
                if (totalValue > +total.textContent) {
                    console.log(10 ** Math.abs(totalValue - total.textContent).toString().length - 1);
                    total.textContent = +oldValue + i;
                } else if (totalValue < +total.textContent) {
                    total.textContent = +oldValue - i;
                } else if (+total.textContent === totalValue) {
                    oldValue = totalValue;
                    clearInterval(id);
                }

                i += (10 ** (Math.abs(totalValue - total.textContent).toString().length - 1));

            }, 100);

        } else {
            total.textContent = totalValue;
        }
    }

    calcBlock.addEventListener('input', () => {
        clearInterval(id);
        console.log("calc")
        countCalc();
    })
}

export default calc;