window.addEventListener("load", () => {
  const hue = Math.floor(Math.random() * 360);
  document.querySelectorAll(".flower").forEach((flower) => {
    flower.style.setProperty("--hue", hue);
  });

  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);
});