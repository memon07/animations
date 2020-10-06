import gsap from 'gsap';

gsap.set(".demo", { autoAlpha: 1 });

const animation = gsap.timeline({ 
  repeat: -1, 
  repeatDelay: 2
})

gsap.utils.toArray(".text").forEach((text, i) => {
  const duration = 3 / (i + 1);
  
  // The translation
  animation.fromTo(text, { y: 80 }, {
    y: -80,
    ease: "slow(0.5, 1, false)",
    duration: duration
  });
  
  // The opacity
  animation.fromTo(text, { opacity: 0 }, {
    opacity: 1,
    ease: "slow(0.3, 0.3, true)",
    duration: duration
  }, '<');
});
