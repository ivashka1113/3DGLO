"use strict";

const sendForm = ({
    formId,
    someElement = []
}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement("div");
    statusBlock.style.color = "white"
    const loadText = "Загрузка...";
    const errorText = "Ошибка...";
    const successText = "Спасибо, наш менеджер свяжется с вами!";

    const validate = (list) => {
        let success = true;

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

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val;
        })

        someElement.forEach(elem => {
            const element = document.getElementById(elem.id)
            if (elem.type === "block") {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === "input") {
                formBody[elem.id] = element.value;
            }
        })

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                    formElements.forEach(input => {
                        statusBlock.textContent = successText;
                        input.value = "";
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                });
        } else {
            alert("Данные не валидны");
            statusBlock.textContent = "";
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
        console.log(error.message)
    }

}

export default sendForm