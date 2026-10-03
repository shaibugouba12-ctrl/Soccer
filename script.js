let score = 0;

function shoot(direction) {
    let goalkeeper = Math.floor(Math.random() * 3);

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

    document.getElementById("score").textContent =
        "🏆 Score: 0";

    document.getElementById("result").textContent = "";
});
