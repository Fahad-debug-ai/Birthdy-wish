/*==================================================
                GIFT SECTION
==================================================*/

function initializeGift() {

    if (window.giftInitialized) return;
window.giftInitialized = true;

    const giftBox = document.getElementById("giftBox");
    const giftReveal = document.getElementById("giftReveal");
    const openLetterBtn = document.getElementById("openLetterBtn");

    if (!giftBox || !giftReveal) {
        console.warn("Gift section not found.");
        return;
    }

    let opened = false;
    giftBox.addEventListener("click", () => {
        if (opened) return;
        opened = true;
        giftBox.classList.add("open");

        //heart brust
        const heartContainer = document.querySelector(".gift-hearts");
if (heartContainer) {
    heartContainer.innerHTML = "";
    for (let i = 0; i < 18; i++) {
        const heart = document.createElement("span");
        heart.className = "gift-heart";
        heart.textContent = Math.random() > 0.5 ? "❤️" : "💖";
        heart.style.left = (Math.random() * 80 + 10) + "%";
        heart.style.setProperty(
            "--x",
            (Math.random() * 200 - 100) + "px"
        );

        heartContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 2500);

        /* Sparkles */

for(let i=0;i<12;i++){
    const sparkle=document.createElement("span");
    sparkle.className="gift-sparkle";
    sparkle.textContent="✨";
    sparkle.style.setProperty(
        "--sx",
        (Math.random()*240-120)+"px"
    );

    sparkle.style.setProperty(
        "--sy",
        (-Math.random()*180)+"px"
    );

    heartContainer.appendChild(sparkle);
    setTimeout(()=>{
        sparkle.remove();
    },1800);
}
    }
}

        setTimeout(() => {
            giftReveal.classList.remove("gift-hidden");
            giftReveal.classList.add("show");
            giftReveal.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 800);
    });

    if (openLetterBtn) {
        openLetterBtn.addEventListener("click", () => {
            const letterSection = document.getElementById("letter");
            if (letterSection) {
                letterSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }
}

