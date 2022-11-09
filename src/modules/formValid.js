"use strict";

import validator from './validator.js';

const formValid = () => {
    const formItemsText = document.querySelectorAll("form input[type=text]");
    const formItemsEmail = document.querySelectorAll("form input[type=email]");
    const formItemsTel = document.querySelectorAll("form input[type=tel]");
    const formBtn = document.querySelectorAll(".form-btn");
    const formItemsMes = document.querySelectorAll("form input[name='user_message']");
    const formItems = document.querySelectorAll("form input")

    formItemsText.forEach((formItemText) => {
        formItemText.addEventListener("input", () => {
            formItemText.value = formItemText.value.replace(/[^а-яА-Я\s\-]+/g, "");
        })
    })

    formItemsMes.forEach((formItemMes) => {
        formItemMes.addEventListener("input", () => {
            formItemMes.value = formItemMes.value.replace(/[^а-яА-Я0-9\s\-\,\.\:\;]+/g, "");
        })
    })

    formItemsEmail.forEach((formItemEmail) => {
        formItemEmail.addEventListener("input", () => {
            formItemEmail.value = formItemEmail.value.replace(/[^a-zA-Z\d\@\-\_\.\!\~\*\']+/g, "");
        })
    })

    formItemsTel.forEach((formItemTel) => {
        formItemTel.addEventListener("input", () => {
            formItemTel.value = formItemTel.value.replace(/[^\d\\(\\)\-\+]+/g, "");
        })
    })

    formItemsText.forEach((formItemText) => {
        formItemText.addEventListener("blur", () => {
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

    formItemsMes.forEach((formItemMes) => {
        formItemMes.addEventListener("blur", () => {
            formItemMes.value = formItemMes.value.replace(/[\s]+/g, " ");
            formItemMes.value = formItemMes.value.replace(/[\-]+/g, "-");
            formItemMes.value = formItemMes.value.replace(/[\s\-]+/g, "-");
            formItemMes.value = formItemMes.value.replace(/^[\s\-]+/g, "");
            formItemMes.value = formItemMes.value.replace(/[\s\-]+$/g, "");

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

    formItems.forEach((item) => {
        item.addEventListener("input", (e) => {
            console.log("input")
            const form = e.target.closest("form");
            if (form === null) return;
            validator(e.target);
        })

    })

}

export default formValid;