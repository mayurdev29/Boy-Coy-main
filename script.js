function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  multiplier: .3
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
//telling scrollTrigger to use these proxy method for the ".smooth-scroll" element since Locomotive Scroll is hjacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  //we still not having a define a scroll left because we are only scrolling horizontally
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },





    
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  //locootiveScroll handles things completely differently on moblie device - it dosen't even tranform the container at all the last scroll of the finction
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});











// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//each time the window update, we should refresh Scrolltigger and then update LocomotiveScroll
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinned images
ScrollTrigger.refresh();

}
loco()

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var tl = gsap.timeline()
tl.to("#loader",{
  top:"-100%",
  delay:3,
  duration:2,
ease:Expo.easeInOut

  
})
tl.from("#page1",{
opacity:0,
y:100,

duration:1,
ease:Expo.easeInOut
},"-=.5")