"use strict";

import inputValid from "./inputValid";

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
            if (formItemText.classList.contains("error")) inputValid(formItemText);
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
            if (formItemEmail.classList.contains("error")) inputValid(formItemEmail);
        })
    })

    formItemsTel.forEach((formItemTel) => {
        formItemTel.addEventListener("input", () => {
            formItemTel.value = formItemTel.value.replace(/[^\d\\(\\)\-\+]+/g, "");
            if (formItemTel.classList.contains("error")) inputValid(formItemTel);
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

}

export default formValid;