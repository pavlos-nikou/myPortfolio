const tlAbout = gsap.timeline()

tlAbout.from(".stagger-text-animation", {
  duration: 2,
  text: "",
  ease: "power1",
}, 0)

tlAbout.from(".heading,.nav-menu-two li", {
  duration: 1.5,
  x: -50,
  opacity: 0,
  ease: "sine.out",
  stagger: 0.2
}, 1)

tlAbout.from(".heading-2", {
  duration: 1,
  opacity: 0,
  delay: 0.5,
  ease: "sine.out"
}, 0)
tlAbout.from(".hero-split img", {
  duration: 2,
  opacity: 0,
  rotate: -360,
  scale: 0,
  ease: "elastic.out(0.6,0.5)"
}, 0.5)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#myWork",
    start: "top center",
  }
})

tl.from(".centered-heading", {
  duration: 1,
  opacity: 0,
  scale: 0.8,
  ease: "sine.out"
})

tl.from(".centered-subheading", {
  duration: 2,
  text: "",
  ease: "power1",
})

tl.from(".card-block", {
  x: -20,
  opacity: 0,
  duration: 2,
  stagger: 0.3
})

// tl.from(".card-image, team-member-name-two")

// "clamp(top bottom)"

