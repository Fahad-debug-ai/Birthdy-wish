function initializeTimeline(){

    if(window.timelineInitialized) return;
    window.timelineInitialized = true;

    if(typeof CONFIG==="undefined") return;

    const items=document.querySelectorAll(".timeline-item");

    if(!items.length) return;

    items.forEach((item,index)=>{

        const data=CONFIG.timeline[index];

        if(!data) return;

        const date=item.querySelector(".timeline-date");
        const title=item.querySelector("h3");
        const text=item.querySelector("p");
        const image=item.querySelector("img");

        if(date) date.textContent=data.date;
        if(title) title.textContent=data.title;
        if(text) text.textContent=data.text;
        if(image) image.src=data.image;

    });

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.25

    });

    items.forEach((item,index)=>{

        item.style.transitionDelay=(index*0.2)+"s";

        observer.observe(item);

    });

}