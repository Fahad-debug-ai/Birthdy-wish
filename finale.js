function initializeFinale(){

    if(window.finaleInitialized) return;
    window.finaleInitialized = true;

    const card=document.querySelector(".finale-card");
    const effects=document.querySelector(".finale-effects");

    if(!card) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                card.classList.add("show");

            }

        });

    },{

        threshold:.3

    });

    observer.observe(card);

    if(effects){

        setInterval(()=>{

            const heart=document.createElement("span");

            heart.className="finale-heart";

            heart.textContent="💖";

            heart.style.left=Math.random()*100+"%";

            heart.style.bottom="0";

            effects.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

                const celebrateBtn = document.getElementById("celebrateBtn");

if(celebrateBtn){

    celebrateBtn.addEventListener("click",()=>{

        // Heart Burst
        for(let i=0;i<30;i++){

            const heart=document.createElement("span");

            heart.className="finale-heart";

            heart.textContent=Math.random()>.5?"💖":"❤️";

            heart.style.left=(45+Math.random()*10)+"%";
            heart.style.top="55%";

            effects.appendChild(heart);

            const x=(Math.random()-0.5)*500;
            const y=-150-Math.random()*250;

            heart.animate([

                {
                    transform:"translate(0,0) scale(.5)",
                    opacity:1
                },

                {
                    transform:`translate(${x}px,${y}px) scale(1.5)`,
                    opacity:0
                }

            ],{

                duration:2200,
                easing:"ease-out"

            });

            setTimeout(()=>heart.remove(),2200);

        }

        // Sparkle Burst
        for(let i=0;i<20;i++){

            const sparkle=document.createElement("span");

            sparkle.className="finale-sparkle";

            sparkle.textContent="✨";

            sparkle.style.left=(45+Math.random()*10)+"%";
            sparkle.style.top="55%";

            effects.appendChild(sparkle);

            const x=(Math.random()-0.5)*450;
            const y=-120-Math.random()*220;

            sparkle.animate([

                {
                    transform:"translate(0,0) rotate(0deg)",
                    opacity:1
                },

                {
                    transform:`translate(${x}px,${y}px) rotate(360deg)`,
                    opacity:0
                }

            ],{

                duration:1800,
                easing:"ease-out"

            });

            setTimeout(()=>sparkle.remove(),1800);

        }

        // Scroll to Hero
        setTimeout(()=>{

            const hero=document.getElementById("hero");

            if(hero){

                hero.scrollIntoView({

                    behavior:"smooth",
                    block:"start"

                });

            }

        },600);

    });

}

            },3000);

        },900);

        setInterval(()=>{

            const sparkle=document.createElement("span");

            sparkle.className="finale-sparkle";

            sparkle.textContent="✨";

            sparkle.style.left=Math.random()*100+"%";

            sparkle.style.bottom="10%";

            effects.appendChild(sparkle);

            setTimeout(()=>{

                sparkle.remove();

            },2500);

        },1200);

    }

}