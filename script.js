window.addEventListener('load', () => {
    const logo = document.querySelector('.home-content img');
    const beforeSpan = document.querySelector('.before-name');
    const nameSpan = document.querySelector('.name');
    const infoItems = document.querySelectorAll('.info-item');
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');

    // === Logo fade-in ===
    logo.style.opacity = 0;
    logo.style.transition = "opacity 1s ease";
    setTimeout(() => logo.style.opacity = 1, 100);

    // === Typewriter text ===
    const beforeText = "hello! I'm ";
    const nameText = "Silvia ☺︎";
    let i = 0, j = 0;

    function typeBefore() {
        if (i < beforeText.length) {
            beforeSpan.textContent += beforeText[i];
            i++;
            setTimeout(typeBefore, 80);
        } else {
            typeName();
        }
    }

    function typeName() {
        if (j < nameText.length) {
            nameSpan.textContent += nameText[j];
            j++;
            setTimeout(typeName, 80);
        } else {
            fadeInInfoAndButtons();
        }
    }

    function fadeInInfoAndButtons() {
        // Fade in info items
        infoItems.forEach((item, idx) => {
            item.style.opacity = 0;
            item.style.transform = "translateY(10px)";
            item.style.transition = `opacity 0.8s ease ${idx * 0.3}s, transform 0.8s ease ${idx * 0.3}s`;
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = "translateY(0)";
            }, 50);
        });

        // Fade in buttons
        ctaButtons.forEach((btn, idx) => {
            btn.style.opacity = 0;
            btn.style.transform = "translateY(10px)";
            btn.style.transition = `opacity 0.8s ease ${idx * 0.2 + 1}s, transform 0.8s ease ${idx * 0.2 + 1}s`;
            setTimeout(() => {
                btn.style.opacity = 1;
                btn.style.transform = "translateY(0)";
            }, 50);
        });
    }

    setTimeout(typeBefore, 1000); // start after logo fades in
});
