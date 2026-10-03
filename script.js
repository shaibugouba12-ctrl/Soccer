
let score = 0;

function shoot(direction) {
    let ball = document.querySelector(".ball");

    // Remove old movement
    ball.classList.remove(
        "shoot-left",
        "shoot-center",
        "shoot-right"
    );

    // Start from the player's position
    void ball.offsetWidth;

    // Move the ball
    if (direction === 0) {
        ball.classList.add("shoot-left");
    } else if (direction === 1) {
        ball.classList.add("shoot-center");
    } else {
        ball.classList.add("shoot-right");
    }

    let goalkeeper = Math.floor(Math.random() * 3);

    setTimeout(function() {
        if (direction === goalkeeper) {
            document.getElementById("result").textContent =
                "🧤 SAVED!";
        } else {
            score++;

            document.getElementById("result").textContent =
                "⚽ GOAL! 🎉";

            document.getElementById("score").textContent =
                "🏆 Score: " + score;
        }
    }, 800);
}

document.getElementById("left").addEventListener("click", function() {
    shoot(0);
});

document.getElementById("center").addEventListener("click", function() {
    shoot(1);
});

document.getElementById("right").addEventListener("click", function() {
    shoot(2);
});

document.getElementById("reset").addEventListener("click", function() {
    score = 0;

    let ball = document.querySelector(".ball");

    ball.classList.remove(
        "shoot-left",
        "shoot-center",
        "shoot-right"
    );

    document.getElementById("score").textContent =
        "🏆 Score: 0";

    document.getElementById("result").textContent = "";
});
