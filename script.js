function loadinganimation(){
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
  delay: 0,
});
tl.from("#page1",{
    y: 1600,
    duration: 0.5,
    delay:0.1,
    opacity: 0,
    ease: "power2"
})
tl.to("#loader",{
    display: "none",
    
})
tl.from("nav",{
    opacity: 0,
    
})

tl.from("#center1 h1,#center2 h1,#center3 h2,#center4 h1",{
  y: 110,
  stagger: 0.2,
})
}
loadinganimation();
function cursorAnimation(){
  document.addEventListener("mousemove",function(dets){
  gsap.to("#crsr", {
     left: dets.x,
      top: dets.y,
    })
})
Shery.makeMagnet("#nav-part2 h3" , {
  
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
   y: 0.7,
   x: 0.7,
  range: 180
});
}
cursorAnimation();