"use strict";

import validator from './validator.js';

const formValid = () => {
    const formItemsText = document.querySelectorAll("form input[type=text], form input[placeholder='Ваше сообщение']");
    const formItemsEmail = document.querySelectorAll("form input[type=email]");
    const formItemsTel = document.querySelectorAll("form input[type=tel]");
    const formBtn = document.querySelectorAll(".form-btn");

    formItemsText.forEach((formItemText) => {
        formItemText.addEventListener("input", () => {
            formItemText.value = formItemText.value.replace(/[^а-яА-Я\s\-]+/g, "");
        })
    })

    formItemsEmail.forEach((formItemEmail) => {
        formItemEmail.addEventListener("input", () => {
            formItemEmail.value = formItemEmail.value.replace(/[^a-zA-Z\d\@\-\_\.\!\~\*\']+/g, "");
        })
    })

    formItemsTel.forEach((formItemTel) => {
        formItemTel.addEventListener("input", () => {
            formItemTel.value = formItemTel.value.replace(/[^\d\\(\\)\-]+/g, "");
        })
    })

    formItemsText.forEach((formItemText) => {
        formItemText.addEventListener("blur", () => {
            console.log("Сообщение");
            formItemText.value = formItemText.value.replace(/[\s]+/g, " ");
            formItemText.value = formItemText.value.replace(/[\-]+/g, "-");
            formItemText.value = formItemText.value.replace(/[\s\-]+/g, "-");
            formItemText.value = formItemText.value.replace(/^[\s\-]+/g, "");
            formItemText.value = formItemText.value.replace(/[\s\-]+$/g, "");
            formItemText.value = formItemText.value.replace(/( |^)[а-яА-Я]/g, function (x) {
                return x.toUpperCase();
            });

        })
    })

    formItemsEmail.forEach((formItemEmail) => {
        formItemEmail.addEventListener("blur", () => {
            formItemEmail.value = formItemEmail.value.replace(/[\-]+/g, "-");
            formItemEmail.value = formItemEmail.value.replace(/[\s\-]+/g, "-");
            formItemEmail.value = formItemEmail.value.replace(/^[\s\-]+/g, "");
            formItemEmail.value = formItemEmail.value.replace(/[\s\-]+$/g, "");
        })
    })

    formItemsTel.forEach((formItemTel) => {
        formItemTel.addEventListener("blur", () => {
            formItemTel.value = formItemTel.value.replace(/[\-]+/g, "-");
            formItemTel.value = formItemTel.value.replace(/^[\s\-]+[\s\-]+/g, "");
            formItemTel.value = formItemTel.value.replace(/[\s\-]+$/g, "");
            formItemTel.value = formItemTel.value.replace(/[\s\-]+/g, "-");
        })
    })

    formBtn.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const form = e.target.closest("form");
            if (form === null) return;
            const formItem = [form.querySelector("form input[type=text]"), form.querySelector("form input[type=email]"), form.querySelector("form input[type=tel]")]
            validator(formItem);
        })

    })

}

export default formValid;