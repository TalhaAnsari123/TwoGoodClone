function locoani(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  

}
locoani();
function animatenav(){
    gsap.to(".nvp1 svg", {
        transform : 'translateY(-120%)',
        scrollTrigger:{
            trigger:".page1",
            scroller:".main",
            start:"top 0",
            end:"top -5%",
            scrub: 1,
            
        }
    })
    
    gsap.to(".links .name", {
        transform : 'translateY(-100%)',
        opacity: 0,
        pointerEvents: "none",
        cursor: "default",
        scrollTrigger:{
            trigger:".page1",
            scroller:".main",
            start:"top 0",
            end:"top -5%",
            scrub: true,
            
        }
    })
}
animatenav();
function animatebuy() {
let part1 = document.querySelector(".video-container")
let buycur = document.querySelector(".buycur")
part1.addEventListener("mousemove", (e)=>{
    gsap.to(buycur,{
        left: e.x ,
        top: e.y
    })
})
part1.addEventListener("mouseenter", ()=>{
    gsap.to(buycur,{
        transform: 'translate(-50%,-50%) scale(1)',
        opacity: 90 + "%"
    })
})
part1.addEventListener("mouseleave", ()=>{
    gsap.to(buycur,{
        transform: 'translate(-50%,-50%) scale(0)',
        opacity: 0
    })
})
}
animatebuy();

function h1animate(){
    gsap.from(".page1 h1",{
        y: 80,
        opacity: 0,
        duration: 0.5,
        delay:0.1,
        stagger: 0.4 
    })
}
h1animate();

function animatecur(){
    document.addEventListener("mousemove", (b)=>{
        gsap.to(".cursor",{
            left: b.x,
            top: b.y
        })
    })
    
    document.querySelector("#child1").addEventListener("mouseenter", ()=>{
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(1)',
            backgroundColor:'#D4D0D3',
           
        })
    })
    document.querySelector("#child1").addEventListener("mouseleave", ()=>{
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
    document.querySelector("#child2").addEventListener("mouseenter", ()=>{
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(1)',
            backgroundColor: "#BCD6BB",
           
        })
    })
    document.querySelector("#child2").addEventListener("mouseleave", ()=>{
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
    document.querySelector("#child3").addEventListener("mouseenter", ()=>{
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(1)',
            backgroundColor: '#E6DFD7',
           
        })
    })
    document.querySelector("#child3").addEventListener("mouseleave", ()=>{
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
    document.querySelector("#child4").addEventListener("mouseenter", ()=>{
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(1)',
            backgroundColor: '#B4D5B6',
           
        })
    })
    document.querySelector("#child4").addEventListener("mouseleave", ()=>{
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
    
}
animatecur();