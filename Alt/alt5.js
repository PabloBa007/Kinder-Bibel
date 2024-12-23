document.getElementById("start-animation").addEventListener("click", () => {
    const animationScene = document.querySelector(".animation-scene");
    const king = document.querySelector(".king");
    const army = document.querySelector(".army");
    const singers = document.querySelector(".singers");
    const victory = document.querySelector(".victory");

    // Zeige die Animation
    animationScene.classList.remove("hidden");

    // Schritt 1: Der König tritt auf
    setTimeout(() => {
        king.style.transform = "translateX(0)";
    }, 1000);

    // Schritt 2: Das feindliche Heer tritt auf
    setTimeout(() => {
        army.style.transform = "translateX(0)";
    }, 3000);

    // Schritt 3: Die Sänger erscheinen
    setTimeout(() => {
        singers.style.transform = "translateX(-50%) scale(1)";
        singers.style.opacity = "1";
    }, 5000);

    // Schritt 4: Das Heer verschwindet, und der Sieg wird angezeigt
    setTimeout(() => {
        army.style.opacity = "0";
        victory.classList.remove("hidden");
        victory.style.opacity = "1";
    }, 8000);
});

document.getElementById("start-animation").addEventListener("click", () => {
    // Elemente zurücksetzen
    const king = document.querySelector(".king");
    const army = document.querySelector(".army");
    const singers = document.querySelector(".singers");
    const victory = document.querySelector(".victory");

    // Zurücksetzen der Anfangszustände
    king.style.transform = "translateX(-150%)";
    army.style.transform = "translateX(150%)";
    singers.style.transform = "translateX(-50%) scale(0)";
    singers.style.opacity = "0";
    army.style.opacity = "1";
    victory.style.opacity = "0";
    victory.classList.add("hidden");

    // Animation erneut starten
    setTimeout(() => {
        // Wiederhole die ursprüngliche Animation
        king.style.transform = "translateX(0)";
        setTimeout(() => {
            army.style.transform = "translateX(0)";
        }, 2000);
        setTimeout(() => {
            singers.style.transform = "translateX(-50%) scale(1)";
            singers.style.opacity = "1";
        }, 4000);
        setTimeout(() => {
            army.style.opacity = "0";
            victory.classList.remove("hidden");
            victory.style.opacity = "1";
        }, 7000);
    }, 200); // Kleiner Puffer, um sicherzustellen, dass der Reset abgeschlossen ist
});