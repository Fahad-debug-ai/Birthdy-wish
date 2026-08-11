function initializeReasons(){

    if(window.reasonsInitialized) return;
    window.reasonsInitialized = true;

    const cards = document.querySelectorAll(".reason-card");
    const effects = document.querySelector(".reasons-effects");

    if(!cards.length) return;
    if(typeof CONFIG === "undefined") return;

    // CONFIG DATA
    cards.forEach((card,index)=>{

        const data = CONFIG.reasons[index];

        if(!data) return;

        const icon = card.querySelector(".reason-icon");
        const title = card.querySelector("h3");
        const text = card.querySelector("p");

        if(icon) icon.textContent = data.icon;
        if(title) title.textContent = data.title;
        if(text) text.textContent = data.text;

    });

    // Scroll Reveal
    const observer = new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.25

    });

    cards.forEach((card,index)=>{

        card.style.transitionDelay = (index * 0.18) + "s";

        observer.observe(card);

    });

    // Floating Effects
    if(effects){

        setInterval(()=>{

            const heart = document.createElement("span");

            heart.className = "reason-heart";
            heart.textContent = "❤️";
            heart.style.left = Math.random()*100 + "%";
            heart.style.bottom = "0";

            effects.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },2500);

        },800);

        setInterval(()=>{

            const sparkle = document.createElement("span");

            sparkle.className = "reason-sparkle";
            sparkle.textContent = "✨";
            sparkle.style.left = Math.random()*100 + "%";
            sparkle.style.bottom = "10%";

            effects.appendChild(sparkle);

            setTimeout(()=>{

                sparkle.remove();

            },2000);

        },1000);

    }

}