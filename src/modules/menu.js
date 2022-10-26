"use strict";

const menu = () => {

    const menuBtn = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const closeBtn = menu.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul>li>a");
    const mouseScroll = document.querySelector("main>a");

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

    menuBtn.addEventListener("click", handleMenu);
    closeBtn.addEventListener("click", handleMenu);
    menuItems.forEach((item) => item.addEventListener("click", (event) => {
        handleMenu();
        smoothScroll(event, item);
    }));

    mouseScroll.addEventListener("click", (event) => {
        smoothScroll(event, mouseScroll);
    })
}

export default menu;