gsap.registerPlugin(ScrollTrigger);

/* ELEMENTOS */

let brillo = document.getElementById('brillo');
let imgNombre = document.getElementById('imgNombre');
let daySentada = document.getElementById('daySentada');

/* PANTALLA INICIALES */

gsap.to(brillo, {
    x: 450,
    ease: "power4.easeInOut",
    scrollTrigger: {
        start: "top top",
        end: "+=1000",
        scrub: 1,
    }
});

gsap.to(brillo, {
    opacity: 0,
    scrollTrigger: {
        start: "top+=1000",
        end: "+=10",
        scrub: 1,
    }
});

gsap.to(imgNombre, {
    scale: 45,
    x: -450,
    opacity: 0,
    ease: "sine.inOut",
    scrollTrigger: {
        start: "top+=1000",
        end: "+=2000",   
        scrub: 1,
    }
});

/* PRIMERA FOTO */

gsap.to(daySentada, {
    opacity: 1,
    filter: "sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%) blur(0px)",
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=3500",
        end: "+=1500",
        scrub: 1,
    }
});

gsap.fromTo(daySentada, {
        filter: "sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%) blur(0px)",
    },
    {
        filter: "sepia(100%) saturate(400%) hue-rotate(195deg) brightness(65%) contrast(130%) blur(5px)",
        ease: "power1.inOut",
        scrollTrigger: {
            start: "top+=6000",
            end: "+=2000",
            scrub: 1,
        }
    });
    
/* COLLAGE DE FOTOS */

gsap.from("#day01", {
    x: 400,
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=8000",
        end: "+=2000",   
        scrub: 1,
    }
});

gsap.from("#day04", {
    y: 650,
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=10000",
        end: "+=2000",   
        scrub: 1,
    }
});

gsap.from("#day02", {
    x: 300,
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=12000",
        end: "+=2000",   
        scrub: 1,
    }
});

gsap.from("#day07", {
    y: 500,
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=14000",
        end: "+=2000",   
        scrub: 1,
    }
});

gsap.from("#day03", {
    x: 200,
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=16000",
        end: "+=2000",   
        scrub: 1,
    }
});

gsap.from("#day10", {
    y: 400,
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=18000",
        end: "+=2000",   
        scrub: 1,
    }
});

gsap.from("#day05", {
    x: 300,
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=20000",
        end: "+=2000",   
        scrub: 1,
    }
});

gsap.from("#day13", {
    y: 250,
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=22000",
        end: "+=2000",   
        scrub: 1,
    }
});

gsap.from("#day06", {
    x: 200,
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=24000",
        end: "+=2000",   
        scrub: 1,
    }
});

gsap.from("#day08", {
    y: 500,
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=26000",
        end: "+=2000",   
        scrub: 1,
    }
});

gsap.from("#day09", {
    x: 200,
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=28000",
        end: "+=2000",   
        scrub: 1,
    }
});

gsap.from("#day11", {
    y: 400,
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=30000",
        end: "+=2000",   
        scrub: 1,
    }
});

gsap.from("#day12", {
    x: 200,
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=32000",
        end: "+=2000",   
        scrub: 1,
    }
});

gsap.from("#day14", {
    y: 250,
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=34000",
        end: "+=2000",   
        scrub: 1,
    }
});

gsap.from("#day15", {
    x: 200,
    ease: "power1.inOut",
    scrollTrigger: {
        start: "top+=36000",
        end: "+=2000",   
        scrub: 1,
    }
});