"use strict";

const modal = () => {
    const buttons = document.querySelectorAll(".popup-btn");
    const modal = document.querySelector(".popup");
    modal.style.transform = 'translateY(100%)';
    let count = 50;


    buttons.forEach(item => item.addEventListener("click", () => {
        modal.style.display = "block";
        screen.width > 768 ? modalShow() : modal.style.transform = '';

    }));


    const modalShow = () => {
        if (count > 0) {
            count--;
            let modalHandle = requestAnimationFrame(modalShow);
            modal.style.transform = `translateY(${-count * 3}%)`;
        } else {
            cancelAnimationFrame(modalHandle);
        }

    }

    modal.addEventListener("click", (e) => {
        if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
            count = 50;
            modal.style.transform = 'translateY(100%)';
            modal.style.display = "none";
        }
    })
}

export default modal;