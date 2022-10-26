"use strict";

const modal = () => {
    const buttons = document.querySelectorAll(".popup-btn");
    const modal = document.querySelector(".popup");
    const closeBtn = modal.querySelector(".popup-close");
    modal.style.transform = 'translateY(100%)';
    let count = 50;
    let modalHandle;


    buttons.forEach(item => item.addEventListener("click", () => {
        modal.style.display = "block";
        if (screen.width > 768)
            modalShow();
    }));
    closeBtn.addEventListener("click", () => {
        count = 50;
        modal.style.transform = 'translateY(100%)';
        modal.style.display = "none"
    });

    const modalShow = () => {
        if (count > 0) {
            count--;
            modalHandle = requestAnimationFrame(modalShow);
            modal.style.transform = `translateY(${-count * 3}%)`;
        } else {
            cancelAnimationFrame(modalHandle);
        }

    }


}

export default modal;