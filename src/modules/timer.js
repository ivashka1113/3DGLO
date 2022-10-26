"use strict";

const timer = (deadline) => {
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");
    const timerDays = document.getElementById("timer-days");
    let timerInterval;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 3600 / 24);

        let hours = Math.floor((timeRemaining / 3600) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds
        }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining();
        timerDays.textContent = getTime.days.toString().length === 1 ? "0" + getTime.days : getTime.days;
        timerHours.textContent = getTime.hours.toString().length === 1 ? "0" + getTime.hours : getTime.hours;
        timerMinutes.textContent = getTime.minutes.toString().length === 1 ? "0" + getTime.minutes : getTime.minutes;
        timerSeconds.textContent = getTime.seconds.toString().length === 1 ? "0" + getTime.seconds : getTime.seconds;
        return getTime.timeRemaining;
    }

    // updateClock();

    if (updateClock() > 0) {
        timerInterval = setInterval(updateClock, 1000);
    } else {
        clearInterval(timerInterval);

        timerDays.textContent = "00";
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
    }

}



export default timer;