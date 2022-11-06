"use strict";

const validator = (formItem) => {
    let flag = true;

    formItem.forEach((item) => {
        switch (true) {
            case item.matches("form input[type=text]"):
                if (!item.value.match(/[a-яA-я]{2}/gi)) {
                    flag = false;
                    item.classList.add("error");
                    break;
                } else {
                    item.classList.remove("error");
                    break;
                }
                case item.matches("form input[type=email]"):
                    if (!item.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/gi)) {
                        flag = false;
                        item.classList.add("error");
                        break;
                    } else {
                        item.classList.remove("error");
                        break;
                    }
                    case item.matches("form input[type=tel]"):
                        if (!item.value.match(/\+?[0-9]{6,9}/gi)) {
                            flag = false;
                            item.classList.add("error");
                        } else {
                            item.classList.remove("error");
                        }
        }
        return flag;
    })
}



export default validator;