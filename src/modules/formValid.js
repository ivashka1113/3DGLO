"use strict";

const formValid = () => {
    const formItemsText = document.querySelectorAll("form input[type=text], form input[placeholder='Ваше сообщение']");
    const formItemsEmail = document.querySelectorAll("form input[type=email]");
    const formItemsTel = document.querySelectorAll("form input[type=tel]");

    // formItemsText.forEach((formItemText) => {
    //     formItemText.addEventListener("input", () => {
    //         console.log("Сообщение");
    //         formItemText.value = formItemText.value.replace(/[^а-яА-Я\s\-]+/, "");
    //     })
    // })

    // formItemsEmail.forEach((formItemEmail) => {
    //     formItemEmail.addEventListener("input", () => {
    //         formItemEmail.value = formItemEmail.value.replace(/[^а-яА-Я\d\@\-\_\.\!\~\*\']+/, "");
    //     })
    // })

    // formItemsTel.forEach((formItemTel) => {
    //     formItemTel.addEventListener("input", () => {
    //         formItemTel.value = formItemTel.value.replace(/[^\d\\(\\)\-]+/, "");
    //     })
    // })

    formItemsText.forEach((formItemText) => {
        formItemText.addEventListener("blur", () => {
            console.log("Сообщение");
            formItemText.value = formItemText.value.replace(/[^а-яА-Я\s\-]+/, "");
            formItemText.value = formItemText.value.replace(/[\s]+/, " ");
            formItemText.value = formItemText.value.replace(/[\-]+/, "-");
            formItemText.value = formItemText.value.replace(/^[\s\-]+/, "");
            formItemText.value = formItemText.value.replace(/( |^)[а-яА-Я]/g, function (x) {
                return x.toUpperCase();
            });

        })
    })

    formItemsEmail.forEach((formItemEmail) => {
        formItemEmail.addEventListener("blur", () => {
            formItemEmail.value = formItemEmail.value.replace(/[^а-яА-Я\d\@\-\_\.\!\~\*\']+/, "");
            formItemEmail.value = formItemEmail.value.replace(/[\-]+/, "-");
            formItemEmail.value = formItemEmail.value.replace(/^[\s\-]+/, "");
        })
    })

    formItemsTel.forEach((formItemTel) => {
        formItemTel.addEventListener("blur", () => {
            formItemTel.value = formItemTel.value.replace(/[^\d\\(\\)\-]+/, "");
            formItemTel.value = formItemTel.value.replace(/[\-]+/, "-");
            formItemTel.value = formItemTel.value.replace(/^[\s\-]+/, "");
        })
    })




}

export default formValid;