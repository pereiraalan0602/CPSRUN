const TEST_DURATION = 10;

let clicks = [];
let startTime = 0;
let running = false;

function startTest() {

    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";

    clicks = [];
    running = true;

    startTime = performance.now();

    let timeLeft = TEST_DURATION;

    document.getElementById("timer").textContent = timeLeft;

    const countdown = setInterval(() => {

        timeLeft--;

        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(countdown);

            finishTest();
        }

    }, 1000);
}

function registerClick() {

    if (!running) return;

    const now = performance.now();

    clicks.push(now - startTime);
}

function finishTest() {

    running = false;

    document.getElementById("game").style.display = "none";
    document.getElementById("result").style.display = "block";

    const cps = (clicks.length / TEST_DURATION).toFixed(2);

    document.getElementById("cpsText").textContent =
        `CPS: ${cps}`;

    let style = "";

    if (cps < 4) {
        style = "Caminante";
    }
    else if (cps < 7) {
        style = "Trotador";
    }
    else if (cps < 10) {
        style = "Corredor";
    }
    else {
        style = "Hiperactivo";
    }

    document.getElementById("styleText").textContent =
        `Estilo: ${style}`;

    const replay = buildReplayData(clicks);

    animateReplay(
        Number(cps),
        replay
    );
}

document.addEventListener("DOMContentLoaded", () => {

    const clickArea = document.getElementById("clickArea");

    clickArea.addEventListener("click", registerClick);

});