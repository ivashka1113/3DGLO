"use strict";

import validator from "./validator";

const sendForm = ({
    formId,
    someElement = []
}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement("img");
    statusBlock.classList.add("load-img");
    const loadUrl = "./images/loading-svgrepo-com.svg";
    const successUrl = "./images/success-svgrepo-com.svg";
    const errorUrl = "./images/error-svgrepo-com.svg";

    statusBlock.style.width = "50px";

    const validate = (list) => {
        let success = true;

        validator(list);

        list.forEach(input => {
            if (input.classList.contains("error")) success = false;
        })

        return success;
    }

    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {

        const formData = new FormData(form);
        const formBody = {};
        const formElements = form.querySelectorAll("input");

        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val;
        })

        someElement.forEach(elem => {
            const element = document.getElementById(elem.id)
            if (elem.type === "block" && element.textContent != 0) {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === "input" && element.textContent != "") {
                formBody[elem.id] = element.value;
            }
        })

        if (validate(formElements)) {
            statusBlock.src = loadUrl;
            sendData(formBody).then(data => {
                    formElements.forEach(input => {
                        statusBlock.src = successUrl;
                        statusBlock.classList.add("active");
                        input.value = "";
                    })
                }).then(data => {
                    setTimeout(() => {
                        statusBlock.remove();
                        statusBlock.classList.remove("active");
                    }, 2000)
                })
                .catch(error => {
                    statusBlock.src = errorUrl;
                });
        } else {
            statusBlock.src = errorUrl;
            setTimeout(() => {
                statusBlock.remove();
            }, 2000)
        }

    }
    try {
        if (!form) {
            throw new Error("Верните форму на место")
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            submitForm();
        })
    } catch (error) {
        console.log(error.message);
    }

}

export default sendForm;