document.addEventListener("DOMContentLoaded", function() {
    gsap.to("#nav", {
        backgroundColor:"#000",
        duration: 0.5,
        height:"75px",
        scrollTrigger:{
            trigger:"#nav",
            scroller:"body",
            // markers:true,
            start:"top -10%",
            end:"top -11%",
            scrub:1
        }
    });
    gsap.to("#main",{
        backgroundColor:"#000",
        scrollTrigger:{
            trigger:"#main",
            scroller:"body",
            // markers:true,
            start:"top -10%",
            end:"top -25%",
            scrub:2
        }
    })


});

