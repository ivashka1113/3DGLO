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
        const calcCountValue = 1 + 0.1 * +calcCount.value;
        const calcDayValue = !calcDay.value ? 1 : +calcDay.value >= 10 ? 1 : +calcDay.value > 5 ? 1.5 : 2;

        let oldValue = +total.textContent;
        let totalValue = 0;

        if (calcTypeValue && calcSquareValue) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
            let i = 0;
            id = setInterval(() => {

                if (totalValue > +total.textContent) {
                    total.textContent = oldValue + i;
                } else if (totalValue < +total.textContent) {
                    total.textContent = oldValue - i;
                } else if (totalValue === +total.textContent) {
                    total.textContent = totalValue;
                    oldValue = +total.textContent;
                    clearInterval(id);
                }

                i = Math.abs(totalValue - total.textContent) > 10000 ? i += 1000 : Math.abs(totalValue - total.textContent) > 1000 ? i += 100 : Math.abs(totalValue - total.textContent) > 100 ? i += 10 : Math.abs(totalValue - total.textContent) > 10 ? i++ : Math.abs(totalValue - total.textContent) < 1 ? i = i + 0.1 : i = 0;

            }, 1);

        } else {
            total.textContent = totalValue;
        }
    }

    calcBlock.addEventListener('input', () => {
        clearInterval(id);
        console.log("Калк")
        countCalc();
    })
}

export default calc;