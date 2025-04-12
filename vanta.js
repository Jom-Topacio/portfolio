document.addEventListener("DOMContentLoaded", function() {
  VANTA.BIRDS({
      el: "#vanta-bg", // Apply directly to body instead of a div
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
      scale: 1.00,
      scaleMobile: 0.75,
      backgroundColor: 0x0,
      color1: 0xc03737,
      color2: 0xffffff,
      speedLimit: 4.00,
      quantity: 2.00
  });
  
  // Handle window resize to ensure effect covers entire screen
  window.addEventListener('resize', function() {
      if (window.VANTA) {
          window.VANTA.resize();
      }
  });
});