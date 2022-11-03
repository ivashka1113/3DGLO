"use strict";

import {
    animate
} from "./helpers";

const modal = () => {
    const buttons = document.querySelectorAll(".popup-btn");
    const modal = document.querySelector(".popup");
    const modalContent = modal.querySelector(".popup-content");
    modal.style.transform = 'translateY(100%)';
    modalContent.style.opacity = 0;


    buttons.forEach(item => item.addEventListener("click", () => {
        modalShow();
    }));

    const modalShow = () => {
        if (screen.width > 768) {
            animate({
                duration: 2000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.display = "block";
                    modal.style.transform = `translateY(${ 100 *(1 - progress)}%)`;
                    setTimeout(() => {
                        modalContent.style.opacity = progress;
                    }, 2000)
                }
            });
        } else {
            modal.style.transform = '';
            modalContent.style.opacity = 1;
            modal.style.display = "block";
        }
    }

    modal.addEventListener("click", (e) => {
        if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
            if (screen.width > 768) {
                animate({
                    duration: 2000,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modalContent.style.opacity = 1 - progress;
                        setTimeout(() => {
                            modal.style.transform = `translateY(${(100 * progress)}%)`;
                        }, 1000)

                        setTimeout(() => {
                            modal.style.display = "none";
                        }, 3000)

                    }

                });
            } else {
                modal.style.transform = `translateY(100%)`;
                modal.style.display = "none";
                modalContent.style.opacity = 0;
            }

        }
    })
}

export default modal;