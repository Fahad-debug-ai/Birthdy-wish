function initializeLetter() {

      if(window.letterInitialized) return;
    window.letterInitialized = true;

    const envelope = document.getElementById("envelope");

    if (!envelope) return;

    envelope.addEventListener("click", () => {

        if (envelope.classList.contains("open")) return;

        envelope.classList.add("open");

        const title = document.getElementById("letterTitle");
        const text = document.getElementById("letterText");
        const signature = document.getElementById("letterSignature");

        title.textContent = CONFIG.letterTitle;
        signature.textContent = CONFIG.letterSignature;

        text.textContent = "";

        const message = CONFIG.letterMessage;

        let i = 0;

        const typing = setInterval(() => {

            text.textContent += message.charAt(i);

            i++;

            if (i >= message.length) {

                clearInterval(typing);

            }

        }, 25);

        const effects=document.querySelector(".letter-effects");

if(effects){

    /* Hearts */

    for(let i=0;i<12;i++){

        const heart=document.createElement("span");

        heart.className="letter-heart";

        heart.textContent="❤️";

        heart.style.setProperty(
            "--x",
            (Math.random()*260-130)+"px"
        );

        heart.style.setProperty(
            "--y",
            (-Math.random()*220)+"px"
        );

        effects.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },2400);

    }

    /* Sparkles */

    for(let i=0;i<14;i++){

        const sparkle=document.createElement("span");

        sparkle.className="letter-sparkle";

        sparkle.textContent="✨";

        sparkle.style.setProperty(
            "--sx",
            (Math.random()*260-130)+"px"
        );

        sparkle.style.setProperty(
            "--sy",
            (-Math.random()*220)+"px"
        );

        effects.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.remove();

        },1800);

    }

}

    });

}