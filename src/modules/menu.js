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
        switch (true) {
            case !!e.target.closest(".close-btn"):
            case !!e.target.closest(".menu"):
                handleMenu();
                break;
            case !!(e.target.matches("menu>ul>li>a")):
                handleMenu();
                smoothScroll(e, e.target);
                break;
            case !!(e.target.closest('main>a')):
                smoothScroll(e, e.target.closest('main>a'));
                break;
            case !e.target.closest("menu"):
                if (menu.classList.contains("active-menu")) {
                    handleMenu();
                }
                break;
        }


    })
}



export default menu;