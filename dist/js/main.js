(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),r=document.getElementById("timer-days");let s;const l=()=>{let e=(()=>{let e=(new Date("28 october 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/3600/24),hours:Math.floor(e/3600%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();return r.textContent=1===e.days.toString().length?"0"+e.days:e.days,t.textContent=1===e.hours.toString().length?"0"+e.hours:e.hours,n.textContent=1===e.minutes.toString().length?"0"+e.minutes:e.minutes,o.textContent=1===e.seconds.toString().length?"0"+e.seconds:e.seconds,e.timeRemaining};l()>0?s=setInterval(l,1e3):(clearInterval(s),r.textContent="00",t.textContent="00",n.textContent="00",o.textContent="00")})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),r=document.querySelector("main>a"),s=(e,t)=>{e.preventDefault();const n=t.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})},l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),n.addEventListener("click",l),o.forEach((e=>e.addEventListener("click",(t=>{l(),s(t,e)})))),r.addEventListener("click",(e=>{s(e,r)}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-close");t.style.transform="translateY(100%)";let o,r=50;e.forEach((e=>e.addEventListener("click",(()=>{t.style.display="block",screen.width>768?s():t.style.transform=""})))),n.addEventListener("click",(()=>{r=50,t.style.transform="translateY(100%)",t.style.display="none"}));const s=()=>{r>0?(r--,o=requestAnimationFrame(s),t.style.transform=`translateY(${3*-r}%)`):cancelAnimationFrame(o)}})()})();