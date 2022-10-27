"use strict";

const calcValid = () => {
    const calcItems = document.querySelectorAll("input.calc-item");
    calcItems.forEach((calcItem) => {
        calcItem.addEventListener("input", () => {
            calcItem.value = calcItem.value.replace(/[^\d]/, "");
        })
    })

}

export default calcValid;