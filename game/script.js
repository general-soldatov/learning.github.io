let tg = window.Telegram.WebApp;
tg.expand()

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF8979";

result = "";

let player = document.querySelector("#player");
let score_label = document.querySelector("#score");
let score = 0;

player.onclick = () => {
    score += 1;
    score_label.innerHTML = "Score: " + score;
    win_check();
}

let result = document.querySelector("#result");

function win_check() {
    if (score > 3) {
        bomb.style.display = "none";
        player.style.display = "none";
        result.style.display = "block";
        tg.MainButton.setText("Вы выиграли!");
        result = "win";
        tg.MainButton.show();
        clearInterval(timer);
    }
}

let timer = setInterval(function() {
    let chance = Math.random();
    if (chance > 0.5) {
        player.style.display = "none";
        bomb.style.display = "block";
    } else {
        player.style.display = "block";
        bomb.style.display = "none";
    }
    player.style.top = Math.random() * 500 + "px";
    player.style.left = Math.random() * 290 + "px";
    bomb.style.top = Math.random() * 500 + "px";
    bomb.style.left = Math.random() * 290 + "px";
}, 1000);

let bomb = document.querySelector("#bomb");

bomb.onclick = () => {
    score -= 1;
    score_label.innerHTML = "Score: " + score;
    lose_check();
}

function lose_check() {
    if (score < -3) {
        bomb.style.display = "none";
        player.style.display = "none";
        result.src = "https://i.pinimg.com/736x/b5/83/49/b583495e48a6b8ed40a388ee5c8e6d11.jpg";
        result.style.display = "block";
        tg.MainButton.setText("Вы проиграли!");
        result = "lose";
        tg.MainButton.show();
        clearInterval(timer);
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(result);
})


