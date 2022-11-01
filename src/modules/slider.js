"use strict";

const slider = (sliderBlockClass, slidesClass, dotsBlockClass, dotsClass, itemActiveClass = "portfolio-item-active", dotActiveClass = "dot-active", slideBtnClass) => {

    const sliderBlock = document.querySelector(`.${sliderBlockClass}`);
    const slides = document.querySelectorAll(`.${slidesClass}`);
    const dotsBlock = document.querySelector(`.${dotsBlockClass}`);
    const dots = [];

    if (!(sliderBlockClass && slidesClass && dotsBlockClass && dotsClass && slideBtnClass)) return;

    let currentSlide = 0;
    let interval;
    const timeInterval = 2000;

    const createDots = () => {
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('li');
            dot.classList.add(dotsClass);
            if (i === 0) dot.classList.add(dotActiveClass);
            dots.push(dot);
            dotsBlock.append(dot);
        }
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, itemActiveClass);
        prevSlide(dots, currentSlide, dotActiveClass);

        currentSlide++;

        if (currentSlide === slides.length) currentSlide = 0;
        nextSlide(slides, currentSlide, itemActiveClass);
        nextSlide(dots, currentSlide, dotActiveClass);
    }

    const startSlide = (timerInterval) => {
        interval = setInterval(autoSlide, timerInterval);
    }

    const stopSlide = () => {
        clearInterval(interval);
    }

    sliderBlock.addEventListener("click", (e) => {
        e.preventDefault();

        if (!e.target.matches(`.${dotsClass}, .${slideBtnClass}`)) {
            return;
        }

        prevSlide(slides, currentSlide, itemActiveClass);
        prevSlide(dots, currentSlide, dotActiveClass);

        if (e.target.matches("#arrow-right")) {
            currentSlide++;
        } else if (e.target.matches("#arrow-left")) {
            currentSlide--;
        } else if (e.target.matches(`.${dotsClass}`)) {
            currentSlide = dots.indexOf(e.target);
        }

        if (currentSlide === slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;

        nextSlide(slides, currentSlide, itemActiveClass);
        nextSlide(dots, currentSlide, dotActiveClass);
    })

    sliderBlock.addEventListener("mouseenter", (e) => {
        if (e.target.matches(`.${dotsClass}, .${slideBtnClass}`)) stopSlide();
    }, true)

    sliderBlock.addEventListener("mouseleave", (e) => {
        if (e.target.matches(`.${dotsClass}, .${slideBtnClass}`)) startSlide(timeInterval);
    }, true)

    createDots();
    startSlide(timeInterval);

}

export default slider;