
window.onload = function () {
  var merrywrap = document.getElementById("merrywrap");
  var box = merrywrap.getElementsByClassName("giftbox")[0];
  var balloons = document.getElementsByClassName("balloon");
  var cakeContainer = document.querySelector(".cake-container");
  var step = 1;
  var stepMinutes = [2000, 2000, 1000, 1000];

  function init() {
    box.addEventListener("click", openBox, false);
    showBalloons();
  }

  // Show balloons
  function showBalloons() {
    for (let i = 0; i < balloons.length; i++) {
      setTimeout(function () {
        balloons[i].style.opacity = 1;
      }, i * 500); // Delay the appearance of each balloon
    }
  }

  function stepClass(step) {
    merrywrap.className = "merrywrap";
    merrywrap.className = "merrywrap step-" + step;
  }

  function openBox() {
    if (step === 1) {
      box.removeEventListener("click", openBox, false);
    }
    stepClass(step);

    if (step === 3) {
      showCake();
    }

    if (step === 4) {
      return;
    }

    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }

  // Show the cake after the gift box disappears
  function showCake() {
    cakeContainer.classList.add("show");
  }

  init();
};
