function random(min, max) {
    return min + Math.floor(Math.random() * max);
}

const abtTl = gsap.timeline();

abtTl.from(
    ".stagger-text-animation",
    {
        duration: 2,
        text: "",
        ease: "power1",
    },
    0
);

abtTl.from(
    ".heading,.nav-menu-two li",
    {
        duration: 1.5,
        x: -50,
        opacity: 0,
        ease: "sine.out",
        stagger: 0.2,
    },
    1
);
abtTl.from(
    ".heading-2",
    {
        duration: 1,
        opacity: 0,
        delay: 0.5,
        ease: "sine.out",
    },
    0
);
abtTl.from(
    ".hero-split #me",
    {
        duration: 2,
        opacity: 0,
        rotate: -360,
        scale: 0,
        ease: "elastic.out(0.6,0.5)",
    },
    0.5
);

const bubbles = document.querySelectorAll(".bubble");
bubbles.forEach((bubble) => {
    bubble.style.top = `${random(10, 80)}vh`;
    bubble.style.transform = `scale(${1 + random(1, 120) / 100})`;
});

const signYAnimation = gsap.timeline({ repeat: -1 });
signYAnimation
    .to(".bubble", {
        duration: 3,
        y: -200,
        ease: "power1.inOut",
    })
    .to(".bubble", {
        duration: 3,
        y: 0,
        ease: "power1.inOut",
    });

document.querySelectorAll(".bubble").forEach((bubble, i) => {
    const signYAnimation=gsap.timeline({ repeat: -1})
        .to(bubble, {
            duration: 3,
            y: -200,
            ease: "power1.inOut",
        })
        .to(bubble, {
            duration: 3,
            y: 0,
            ease: "power1.inOut",
        });
    signYAnimation.progress(Math.random());
});

document.querySelectorAll(".bubbleContainer").forEach((bubble, i) => {
    gsap.to(bubble, {
        duration: random(9, 15),
        x: -window.innerWidth - 700,
        ease: "linear",
        delay: i * random(1, 5),
        repeat: -1,
    });
});

const educationTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#education",
        start: "top center",
    },
});

educationTl.from(
    "#education-title",
    {
        opacity: 0,
        // scale: 2,
        duration: 1,
    },
    0.5
);

educationTl.from(
    ".education-intro",
    {
        opacity: 0,
        duration: 2,
    },
    0.7
);

educationTl.from(
    ".line",
    {
        height: 0,
        duration: 1,
        ease: "power2.inOut",
    },
    2.5
);

educationTl.from(
    ".dot",
    {
        scale: 0,
        duration: 0.3,
        stagger: 0.2,
        ease: "power2.inOut",
    },
    1
);

educationTl.from(
    ".date",
    {
        duration: 1,
        rotationY: 90,
        transformOrigin: "100% 50% 100%",
        ease: "power2.inOut",
        stagger: 0.25,
    },
    1.5
);

educationTl.from(
    ".info",
    {
        duration: 1,
        opacity: 0,
        stagger: 0.25,
        rotationY: -90,
        transformOrigin: "0% 50% 100%",
        ease: "power2.inOut",
    },
    1.5
);

educationTl.from(
    "#skill-title",
    {
        opacity: 0,
        duration: 2,
        ease: "sine.out",
    },
    1
);

educationTl.from(
    ".skill",
    {
        duration: 2,
        stagger: 0.09,
        opacity: 0,
    },
    1.5
);

educationTl.from(
    ".inner-bar",
    {
        duration: 1.5,
        stagger: 0.1,
        width: 0,
        ease: "power1.out",
    },
    2.7
);

const myWorkTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#myWork",
        start: "top center",
    },
});

myWorkTl.from(".centered-heading", {
    duration: 1,
    opacity: 0,
    scale: 0.8,
    ease: "sine.out",
});

myWorkTl.from(
    ".centered-subheading",
    {
        duration: 2,
        opacity: 0,
        ease: "power1",
    },
    0.3
);

myWorkTl.from(
    ".card-block",
    {
        x: -20,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
    },
    0.6
);
