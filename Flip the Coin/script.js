const coin = document.querySelector(".coin");
const shadow = document.querySelector(".shadow");
const result = document.querySelector(".result");

function flipBtn() {
  const isHeads = Math.random() < 0.5;

  coin.style.transition = "transform 1s ease, top 0.4s ease";
  shadow.style.transition = "width 0.4s ease, opacity 0.4s ease";

  // Animate jump + shadow shrink
  coin.style.transform = `translateY(-50px) rotateY(${
    isHeads ? 1800 : 1980
  }deg)`;
  shadow.style.transform = "scale(0.8)";
  shadow.style.opacity = "0.5";

  setTimeout(() => {
    // Show result
    result.textContent = isHeads ? "HEADS!" : "TAILS!";

    // Reset after flip
    coin.style.transform = isHeads ? "rotateY(0deg)" : "rotateY(180deg)";
    shadow.style.transform = "scale(1)";
    shadow.style.opacity = "0.8";
  }, 1000);
}
