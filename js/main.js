document.addEventListener("DOMContentLoaded", () => {

    const startButton = document.getElementById("startButton");
    const retryButton = document.getElementById("retryButton");

    startButton.addEventListener("click", startTest);

    retryButton.addEventListener("click", () => {
        location.reload();
    });

});