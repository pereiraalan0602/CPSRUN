function animateReplay(cps) {

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

    function loop() {

        drawStickman();

        x += cps * 0.5;

        phase += cps * 0.05;

        if (x > canvas.width + 30) {
            x = -30;
        }

        requestAnimationFrame(loop);
    }

    loop();
}