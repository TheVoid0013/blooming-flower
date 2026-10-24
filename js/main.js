window.addEventListener("load", () => {
  const flowers = document.querySelectorAll(".flower");

  let hue = Math.random() * 360;
  const degreesPerSecond = 6; // full color cycle every 60s, tweak to taste

  // each flower gets a fixed offset so they stay in a nice analogous spread
  flowers.forEach((flower, i) => {
    flower.style.setProperty("--offset", i * 25);
  });

  let last = performance.now();
  const tick = (now) => {
    const dt = (now - last) / 1000;
    last = now;
    hue = (hue + degreesPerSecond * dt) % 360;

    flowers.forEach((flower) => {
      flower.style.setProperty("--hue", hue.toFixed(1));
    });

    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);
});