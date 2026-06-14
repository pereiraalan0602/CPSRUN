function animateReplay(cps, replayData) {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    let x = 50;
    let targetX = 50;
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
        
        x += (targetX - x) * 0.15;

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

        const progressBar =
            document.getElementById("replayProgress");

        function nextStep() {

            if (index >= replayData.length) {
                return;
            }

            targetX = Math.min(
                targetX + 15,
                canvas.width - 40
            );

            phase += Math.PI / 2;

            const delay = replayData[index];

            index++;

            const progress =
                (index / replayData.length) * 100;

            progressBar.style.width =
                `${progress}%`;

            setTimeout(nextStep, delay);
        }

        nextStep();
    }
}