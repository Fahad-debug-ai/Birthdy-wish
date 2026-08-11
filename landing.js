function initializeWebsite() {

    if (typeof CONFIG === "undefined") {
        console.error("CONFIG not found.");
        return;
    }
    const flash = document.querySelector(".unlock-flash");
    const form = document.getElementById("lockForm");
    const input = document.getElementById("birthYear");
    const hero = document.getElementById("hero");
    const landing = document.getElementById("landing");
    const overlay = document.querySelector(".unlock-overlay");
    const heroName = document.getElementById("girlName");
    const heroHeading = document.getElementById("heroHeading");
    const heroSubtitle = document.getElementById("heroSubtitle");
    const heroButton = document.getElementById("heroButton");
    const heroImage = document.getElementById("heroImage");
    if (heroHeading) heroHeading.textContent = CONFIG.heroHeading;
    if (heroName) heroName.textContent = CONFIG.girlName;
    if (heroSubtitle) heroSubtitle.textContent = CONFIG.heroSubtitle;
    if (heroButton) heroButton.textContent = CONFIG.heroButton;
    if (heroImage) heroImage.src = CONFIG.heroImage;
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (input.value === CONFIG.birthdayYear) {
            overlay.classList.add("overlay-active");
            const lock = document.querySelector(".lock-icon");
            const card = document.querySelector(".landing-card");
            if (lock) {
                lock.classList.add("lock-break");
            }
            if (card) {
                card.classList.add("landing-exit");
            }
            if (flash) {
                flash.classList.add("active");
                setTimeout(() => {
                    flash.classList.remove("active");
                }, 800);
            }
            setTimeout(() => {
                landing.style.display = "none";
                hero.classList.remove("hidden");
                hero.classList.add("reveal");
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                galleryFeatures();
                initializeGift();
                initializeLetter();
            }, 1000);
        }

        else {
            input.classList.add("shake");
            input.value = "";
            input.placeholder = "Wrong Birth Year";
            setTimeout(() => {
                input.classList.remove("shake");
            }, 600);
        }
    });
}

// HERO FEATURES

document.addEventListener("DOMContentLoaded", () => {
    heroParallax();
    heroButtonScroll();
});

// Image Parallax

function heroParallax() {
    const image = document.querySelector(".image-frame");
    if (!image) return;
    document.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 60;
        const y = (window.innerHeight / 2 - e.clientY) / 60;
        image.style.transform =
            `translate(${x}px,${y}px)`;
    });
}

// Button

function heroButtonScroll() {
    const btn = document.getElementById("heroButton");
    const gallery = document.getElementById("gallery");
    if (!btn || !gallery) return;
    btn.addEventListener("click", () => {
        gallery.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

// ======================================
// Gallery
// ======================================


function galleryFeatures() {

    if (!CONFIG) return;

    if (!Array.isArray(CONFIG.galleryImages)) {
        console.warn("galleryImages not found in config.");
        return;
    }

    const heading = document.getElementById("galleryHeading");
    const subtitle = document.getElementById("gallerySubtitle");

    const images = [
        document.getElementById("galleryImage1"),
        document.getElementById("galleryImage2"),
        document.getElementById("galleryImage3")
    ];

    if (heading) {
        heading.textContent = CONFIG.galleryHeading || "";
    }

    if (subtitle) {
        subtitle.textContent = CONFIG.gallerySubtitle || "";
    }

    images.forEach((img, index) => {

        if (img && CONFIG.galleryImages[index]) {

            img.src = CONFIG.galleryImages[index];

        }

    });

    const lightbox = document.getElementById("lightbox");
    const preview = document.getElementById("lightboxImage");
    const close = document.getElementById("closeLightbox");

    images.forEach((img) => {

        if (!img) return;

        img.addEventListener("click", () => {

            preview.src = img.src;
            lightbox.classList.add("active");

        });

    });

    if (close) {

        close.addEventListener("click", () => {

            lightbox.classList.remove("active");

        });

    }

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            lightbox.classList.remove("active");

        }

    });

}

function initializeFloatingEffects() {

    createFloating(
        ".floating-hearts",
        "❤️",
        "floating-heart",
        1400,
        14
    );

    createFloating(
        ".floating-sparkles",
        "✨",
        "floating-sparkle",
        1100,
        18
    );

    createFloating(
        ".floating-petals",
        "🌸",
        "floating-petal",
        1700,
        10
    );

    createBubbles();

    createFloatingIcons();

    initializeLandingParallax();

}

function createFloating(container, emoji, className, speed, size) {

    const parent = document.querySelector(container);

    if (!parent) return;

    setInterval(() => {

        const item = document.createElement("span");

        item.className = className;

        item.textContent = emoji;

        item.style.left = Math.random() * 100 + "%";

        item.style.fontSize =
            (Math.random() * size + 18) + "px";

        item.style.animationDuration =
            (Math.random() * 6 + 8) + "s";

        parent.appendChild(item);

        setTimeout(() => {

            item.remove();

        }, 15000);

    }, speed);

}

function createBubbles() {

    const container = document.querySelector(".floating-bubbles");

    if (!container) return;

    setInterval(() => {

        const bubble = document.createElement("span");

        bubble.className = "glass-bubble";

        const size = Math.random() * 70 + 25;

        bubble.style.width = size + "px";

        bubble.style.height = size + "px";

        bubble.style.left = Math.random() * 100 + "%";

        bubble.style.animationDuration = (Math.random() * 6 + 10) + "s";

        container.appendChild(bubble);

        setTimeout(() => {

            bubble.remove();

        }, 16000);

    }, 900);

}

function createFloatingIcons() {

    const container = document.querySelector(".floating-icons");

    if (!container) return;

    const icons = [

        "🎁",

        "💖",

        "🌹",

        "✨",

        "🎂"

    ];

    setInterval(() => {

        const icon = document.createElement("span");

        icon.className = "floating-icon-bg";

        icon.textContent =

            icons[Math.floor(Math.random() * icons.length)];

        icon.style.left = Math.random() * 100 + "%";

        icon.style.fontSize = (Math.random() * 16 + 24) + "px";

        icon.style.animationDuration = (Math.random() * 5 + 9) + "s";

        container.appendChild(icon);

        setTimeout(() => {

            icon.remove();

        }, 15000);

    }, 1800);

}

function initializeLandingParallax() {

    const landing = document.getElementById("landing");

    if (!landing) return;

    document.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 45;

        const y = (window.innerHeight / 2 - e.clientY) / 45;

        landing.style.backgroundPosition =

            `${x}px ${y}px`;

    });

}

function initializeButtonRipple() {

    const btn = document.querySelector("#lockForm button");

    if (!btn) return;

    btn.addEventListener("click", (e) => {

        const ripple = document.createElement("span");

        ripple.className = "btn-ripple";

        ripple.style.left = e.offsetX + "px";

        ripple.style.top = e.offsetY + "px";

        btn.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 700);

    });

}

function initializeCursorHearts() {

    document.addEventListener("mousemove", (e) => {

        if (Math.random() > .15) return;

        const heart = document.createElement("span");

        heart.className = "cursor-heart";

        heart.textContent = "❤️";

        heart.style.left = e.pageX + "px";

        heart.style.top = e.pageY + "px";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 1500);

    });

}

function initializeMouseLight() {

    const light = document.querySelector(".mouse-light");

    const landing = document.getElementById("landing");

    if (!light || !landing) return;

    landing.addEventListener("mousemove", (e) => {

        const rect = landing.getBoundingClientRect();

        light.style.left = (e.clientX - rect.left) + "px";

        light.style.top = (e.clientY - rect.top) + "px";

    });

}