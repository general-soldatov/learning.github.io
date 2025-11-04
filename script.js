let tg = window.Telegram.WebApp;

tg.expand();
 tg.MainButton.textColor = "#FFFFFF";
 tg.MainButton.color = "#2cab37";

let name = "";
let phone = "";
let email = "";
let items = {
    carrot: 0,
    zukkiny: 0,
    potato: 0,
    eggplant: 0,
    tomato: 0,
    cucumber: 0
}

let price = 0;

let prices = {
    carrot: 5,
    zukkiny: 3,
    potato: 2,
    eggplant: 8,
    tomato: 4,
    cucumber: 2
}

let btn = document.querySelector("#click");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");

let username = document.querySelector("#user-name");
let userphone = document.querySelector("#user-phone");
let usermail = document.querySelector("#user-email");

let submit = document.querySelector("#submit");

submit.onclick = () => {
    tg.MainButton.setText("Нажмите кнопку для оформления заказа!");
    tg.MainButton.show();
}

username.onchange = () => {
    name = username.value;
}

userphone.onchange = () => {
    phone = userphone.value;
}

usermail.onchange = () => {
    email = usermail.value;
}

btn.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы погладили котика! И он этому рад!");
        tg.MainButton.show();
    }
}


btn1.onclick = () => {
//    tg.MainButton.setText("Вы выбрали товар морковь!");
    items['carrot'] += 1;
//    tg.MainButton.show();
    update_orders();
}

btn2.onclick = () => {
    items['zukkiny'] += 1;
    update_orders();
}

btn3.onclick = () => {
    items['potato'] += 1;
    update_orders();
}

btn4.onclick = () => {
    items['eggplant'] += 1;
    update_orders();
}

btn5.onclick = () => {
    items['tomato'] += 1;
    update_orders();
}

btn6.onclick = () => {
    items['cucumber'] += 1;
    update_orders();
}

function update_orders() {
    while (usercard.hasChildNodes()) {
        usercard.removeChild(usercard.lastChild);
    }
    usercard.innerHTML = "Ваши заказы";
    if (name != "") {
        let userinfo = document.createElement("li");
        userinfo.innerHTML = "Имя - " + name;
        usercard.appendChild(userinfo);
    }
    if (phone != "") {
        let userinfo = document.createElement("li");
        userinfo.innerHTML = "Телефон - " + phone;
        usercard.appendChild(userinfo);
    }
    if (email != "") {
        let userinfo = document.createElement("li");
        userinfo.innerHTML = "Email - " + email;
        usercard.appendChild(userinfo);
    }
    price = 0;
    for (let item in items) {
        if (items[item] != 0) {
            let li = document.createElement("li");
            li.innerHTML = item + ": " + items[item];
            usercard.appendChild(li);
            price += items[item] * prices[item];
        }
    }
    if (price != 0) {
        let userinfo = document.createElement("li");
        userinfo.innerHTML = "Итого: " + price + "$";
        usercard.appendChild(userinfo);
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    let result = "";
    if (name != "") {
        result += "Ваше имя: " + name + "\n";
    }
    if (phone != "") {
        result += "Ваш телефон: " + phone + "\n";
    }
    if (email != "") {
        result += "Ваш email: " + email + "\n";
    }
    result += "Ваш заказ: " + "\n";
    for (let item in items) {
        if (items[item] != 0) {
            result +=  item + ": " + items[item] + "\n";
        }
    }
    result += "\n\nС вас " + price + "$";
    tg.sendData(result);
})
