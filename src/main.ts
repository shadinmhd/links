import gsap from "gsap"
const items = document.querySelectorAll(".item")

gsap.from(items, {
	duration: 1,
	opacity: 0,
	y: 20,
	stagger: 0.2,
	ease: "Power2.easeInOut"
})

items.forEach((e) => {
	e.addEventListener("mouseenter", () => {
		gsap.to(e, {
			duration: 0.3,
			scale: 1.1,
			y: 0,
			ease: "Power2.easeOut"
		})
	})

	e.addEventListener("mouseleave", () => {
		gsap.to(e, {
			duration: 0.3,
			scale: 1,
			y: 0,
			ease: "Power2.easeOut"
		})
	})
})
