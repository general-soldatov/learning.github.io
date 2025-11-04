let tg = window.Telegram.WebApp;

tg.expand();
// tg.MainButton.textColor = "#FFFFFF";
// tg.MainButton.color = "2cab37";

let item = "";

let btn = document.querySelector("#click");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");

btn.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы погладили котика! И он этому рад!");
        tg.MainButton.show();
    }
}


btn1.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар морковь!");
        item = "морковь";
        tg.MainButton.show();
    }
}

btn2.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар кабачок!");
        item = "кабачок";
        tg.MainButton.show();
    }
}

btn3.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар картофель!");
        item = "картофель";
        tg.MainButton.show();
    }
}

btn4.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар баклажан!");
        item = "баклажан";
        tg.MainButton.show();
    }
}

btn5.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар помидор!");
        item = "помидор";
        tg.MainButton.show();
    }
}

btn6.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар огурец!");
        item = "огурец";
        tg.MainButton.show();
    }
}

// Telegram.WebApp.onEvent("mainButtonClicked", function() {
//     tg.sendData(item);
// })







