document.addEventListener('DOMContentLoaded', (e) => {
      
  gsap.registerPlugin(ScrollTrigger);

  // const smoother = ScrollSmoother.create({
  //   smooth: 2,
  //   speed: 2,
  //   effects: true,
  //  // normalizeScroll: true,
  //   smoothTouch: 0.1,
  // });

  let paths = gsap.utils.toArray("#wrapper_lp_text, #wrapper_lp_image");

  let distPaths = gsap.utils.distribute({
    base: -300,
    amount: 600,
  });

  let logoTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".logo-section",
      scrub: 1,
      start: "bottom 95%",
      end: "bottom center"
    }
  });

  logoTl.to(paths, { x: distPaths })
    .to([...paths], { opacity: 0 }, 0);
    
  gsap.from(".token-details-wrapper", {
    scale: 2/3,
    scrollTrigger: {
      trigger: ".token-details-wrapper",
      scrub: 1
    }
  });
    
  let gridTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".grid-section",
      scrub: 1,
      start: "top center",
      end: "bottom+=10% bottom",
    },
    defaults: {
      ease: "power1.inOut"
    }
  });


  gridTl.add("start")
    .from(".grid-layout", {
      ease: "power1",
      scale: 3
    }, "start")
    .from(".column-1 .grid-image", {
      duration: 0.6,
      xPercent: i => -((i + 1) * 40 + i * 100),
      yPercent: i => (i + 1) * 40 + i * 100
    }, "start")
    .from(".column-3 .grid-image", {
      duration: 0.6,
      xPercent: i => (i + 1) * 40 + i * 100,
      yPercent: i => (i + 1) * 40 + i * 100
    }, "start");

  gsap.from(".parallax-section", {
    scale: 1/3,
    scrollTrigger: {
      trigger: ".parallax-section",
      scrub: 1
    }
  });

  let pinSection = document.querySelector(".pin-section");
  let pinContent1 = document.querySelector(".pin-content-1");
  let pinContent2 = document.querySelector(".pin-content-2");

  let pinTl = gsap.timeline({
    scrollTrigger: {
      pin: true,
      trigger: pinSection,
      scrub: 0,
      start: "-30px top",
      end: () => `$+=${pinContent1.offsetWidth}`,
      invalidateOnRefresh: true
    }
  });

  pinTl.fromTo(".pin-content-1", {
    x: () => document.body.clientWidth * 0.3
  }, {
    x: () => -(pinContent1.offsetWidth),
    ease: "power1.inOut"
  }, 0)

  pinTl.fromTo(".pin-content-2", {
    x: () => -pinContent2.offsetWidth + document.body.clientWidth * 0.7
  }, {
    x: () => document.body.clientWidth, 
    ease: "power1.inOut"
  }, 0);


  
})

function buyNow() {
  location.href = "https://dexscreener.com/solana/8whlrugdhkaqafvyxenig5lb1ilpkhkau9z4ufskjhze";
}