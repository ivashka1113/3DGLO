"use strict";

const menu = () => {

    const menu = document.querySelector("menu");

    const smoothScroll = (e, item) => {
        e.preventDefault(); //отключяем стандартную прокрутку якоря
        const blockID = item.getAttribute('href').substr(1); //получаем id элемента, к которому нужно прокрутить

        document.getElementById(blockID).scrollIntoView({ //получаем элемент по id, затем совершается прокрутка с заданными параметрами
            behavior: 'smooth',
            block: 'start'
        })

    }

    const handleMenu = () => {
        menu.classList.toggle("active-menu");
    }

    document.addEventListener("click", (e) => {
        if (menu.classList.contains("active-menu") && !e.target.closest("menu")) {
            handleMenu();
        } else if (e.target.closest(".menu") || e.target.closest(".close-btn")) {
            handleMenu();
        } else if (e.target.matches("menu>ul>li>a")) {
            handleMenu();
            smoothScroll(e, e.target);
        } else if (e.target.closest('main>a')) {
            smoothScroll(e, e.target.closest('main>a'));
        }
        console.log(e.target);
    })

}

export default menu;