var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.2,
});
tl.from(".line-part1", {
  opacity: 0,
  onStart: function () {
    var timer = document.querySelector(".line-part1 h5");
    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        timer.innerHTML = grow++;
      } else {
        timer.innerHTML = grow;
      }
    }, 33);
  },
});
tl.to(".line h2",{
    animationName: "anime",
    opacity: 1,
})
tl.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 3.4,
});
tl.from("#page1",{
    y: 1600,
    duration: 0.5,
    delay:0.2,
    opacity: 0,
    ease: "power2"
})
tl.to("#loader",{
    display: "none",
    
})
