gsap.to(".loading-greeting", {
    opacity: 1,
    y: -50,
    duration: 1,
    ease: "power2.out",
})

gsap.to(".loading-greeting", {
    opacity: 0,
    y: -100,
    duration: 0.8,
    delay: 2,
    ease: "power2.in",
})


gsap.to(".loading-greeting2", {
    opacity: 1,
    duration: 1,
    delay: 27,
    ease: "power2.in",

})

gsap.to(".loading-greeting2", {
    opacity: 0,
    duration: 1,
    delay: 29,
    ease: "power2.in",

})


gsap.to(".loader", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    delay: 4,
})

gsap.to(".loader", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 26,
})

gsap.to(".loading-screen", {
    duration: 1,
    y: "-110vh",
    ease: "power4.in",
    delay: 30,
})

gsap.from("#row-three", {
    scale : 0.95,
    opacity: 0,
    duration: 0.4,
    delay: 30.85,
    ease: "back.out(1.4)",
    duration: 0.5,
    ease: Back.easeOut.config(1.8)
})


gsap.from("#row-two", {
    scale : 0.95,
    opacity: 0,
    duration: 0.4,
    delay: 30.9,
    ease: "back.out(1.8)",
    duration: 0.5,
    ease: Back.easeOut.config(1.8)
})

gsap.from("#row-one", {
    scale : 0.95,
    opacity: 0,
    duration: 0.4,
    delay: 30.95,
    ease: "back.out(1.4)",
    duration: 0.5,
    ease: Back.easeOut.config(1.8)
})

gsap.from(".lower-heading", {
    scale : 0.95,
    opacity: 0,
    duration: 0.4,
    delay: 31,
    transform : 1.1,
    ease: "back.out(1.8)",
    duration: 0.5,
    ease: Back.easeOut.config(1.8)
})

gsap.from(".expenses-card", {
    scale : 0.95,
    opacity: 0,
    duration: 0.4,
    delay: 31.05,
    transform : 1.1,
    duration: 0.5,
    ease: Back.easeOut.config(1.8)
})


gsap.from(".upper", {
    scale : 0.95,
    opacity: 0,
    duration: 0.4,
    delay: 31.1,
    ease: "back.out(1.4)",
    duration: 0.5,
    ease: Back.easeOut.config(1.8)
})







// Ripple Effect

function animatedButton(clickedEl, redirectURL = null, e) {
    const isWhite = clickedEl.classList.contains("white-container");
    const isBlack = clickedEl.classList.contains("black-container");
    const isRed = clickedEl.classList.contains("red-container");
    const isGreen = clickedEl.classList.contains("green-container");

    if (!isWhite && !isBlack && !isRed && !isGreen) return;

    // 🌊 Add Ripple
    createRipple(clickedEl, event);

    const downColor = isWhite
        ? "#d5d5d5"
        : isBlack
            ? "#3a3a3a"
            : isRed
                ? "#ff4949"
                : "#1f7a1f"; // green press
    const upColor = isWhite
        ? "#e0e0e0"
        : isBlack
            ? "#212121"
            : isRed
                ? "#ff4949"
                : "#2ecc71"; // green release

    const duration = 0.15;
    const delay = 0.16;
    const redirectDelay = 400;

    // Animate
    gsap.to(clickedEl, {
        scale: 0.98,
        duration: duration,
        backgroundColor: downColor
    });

    gsap.to(clickedEl, {
        scale: 1,
        duration: duration,
        backgroundColor: upColor,
        delay: delay
    });

    if (redirectURL) {
        setTimeout(() => {
            window.location.href = redirectURL;
        }, redirectDelay);
    }
}

// 💧 Ripple Logic
function createRipple(button, event) {
    const rect = button.getBoundingClientRect();
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const circle = document.createElement("span");
    circle.style.width = circle.style.height = `${diameter}px`;

    // ✅ Use position relative to the element's bounding box
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;

    circle.classList.add("ripple");

    // Remove old ripple if exists
    const oldRipple = button.querySelector(".ripple");
    if (oldRipple) {
        oldRipple.remove();
    }

    button.appendChild(circle);
}


