const link = document.getElementById(".link")

gsap.to(link,{
	opacity : 0,
	x : -50,
	duration : 1,
	stagger : 0.5,
	ease : "power2.out",
})
