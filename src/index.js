import timer from './modules/timer.js';
import menu from './modules/menu.js';
import modal from './modules/modal.js';
import calcValid from './modules/calcValid.js';
import formValid from './modules/formValid.js';
import tabs from './modules/tabs.js';
import slider from './modules/slider.js';
import calc from './modules/calc.js';


timer("28 november 2022");
menu();
modal();
calcValid();
formValid();
tabs();
slider("portfolio-content", "portfolio-item", "portfolio-dots", "dot", "portfolio-btn", "portfolio-item-active", "dot-active");
calc(100);