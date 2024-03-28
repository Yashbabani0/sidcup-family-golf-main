gsap.to("nav", {
  backgroundColor: "black",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,

  }
})

gspa.to("main", {
    backgroundColor: "black",
    scrollTrigger:{
        trigger: "main",
        scroller: "body",
        markers: true,
        start: "top -50%"
    }
})