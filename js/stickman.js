function animateReplay(cps, replayData) {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    let x = 50;
    let phase = 0;

    function drawStickman() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const y = 180;

        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;

        const swing = Math.sin(phase) * 15;

        // Cabeza
        ctx.beginPath();
        ctx.arc(x, y - 60, 15, 0, Math.PI * 2);
        ctx.stroke();

        // Cuerpo
        ctx.beginPath();
        ctx.moveTo(x, y - 45);
        ctx.lineTo(x, y);
        ctx.stroke();

        // Brazos
        ctx.beginPath();

        ctx.moveTo(x, y - 30);
        ctx.lineTo(x + swing, y - 10);

        ctx.moveTo(x, y - 30);
        ctx.lineTo(x - swing, y - 10);

        ctx.stroke();

        // Piernas
        ctx.beginPath();

        ctx.moveTo(x, y);
        ctx.lineTo(x + swing, y + 25);

        ctx.moveTo(x, y);
        ctx.lineTo(x - swing, y + 25);

        ctx.stroke();
    }

    function renderLoop() {

        drawStickman();

        requestAnimationFrame(renderLoop);
    }

    renderLoop();

    playReplay();
    
    function playReplay() {

        if (replayData.length === 0) {
            return;
        }

        let index = 0;

        function nextStep() {

            if (index >= replayData.length) {
                return;
            }

            x += 15;

            phase += Math.PI / 2;

            if (x > canvas.width + 30) {
                x = -30;
            }

            const delay = replayData[index];

            index++;

            setTimeout(nextStep, delay);
        }

        nextStep();
    }
}