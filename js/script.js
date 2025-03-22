const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const menu = document.querySelector(".menu");
const media = window.matchMedia("(width < 768px)");
const main = document.querySelector("main");

function setupTopNav(e) {
  if (e.matches) {
    // mobile
    console.log("is mobile");
    // menu.setAttribute("inert", "");
    menu.style.transition = "none";
  } else {
    // tablet/desktop
    console.log("is desktop");
    // menu.removeAttribute("inert");
  }
}

function openMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
  menu.style.translate = "0";
  // menu.removeAttribute("inert");
  menu.removeAttribute("style");
  // main.setAttribute("inert", "");
  btnClose.focus();
}

function closeMenu() {
  btnClose.setAttribute("aria-expanded", "false");
  menu.style.translate = "100vw 0";
  // menu.setAttribute("inert", "");
  // main.removeAttribute("inert");

  btnOpen.focus();

  setTimeout(() => {
    menu.style.transition = "none";
  }, 800);
}

setupTopNav(media);

btnOpen.addEventListener("click", openMenu);

btnClose.addEventListener("click", closeMenu);

media.addEventListener("change", function (e) {
  setupTopNav(e);
});

// Radio form --------------------------------------------
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const selectedSong = document.querySelector("input[name='song']:checked");

  if (!selectedSong) {
    alert("Please select a song before submitting."); // Show an alert if nothing is selected
    return;
  }

  if (selectedSong.value === "God's Plan") {
    window.open("https://www.youtube.com/watch?v=xpVfcZ0ZcFM", "_blank");
  } else if (selectedSong.value === "Blessings") {
    window.open("https://www.youtube.com/watch?v=M6t47RI4bns", "_blank");
  } else if (selectedSong.value === "Churchill Downs") {
    window.open("https://www.youtube.com/watch?v=GGOyFnrZRt0", "_blank");
  } else if (selectedSong.value === "Laugh Now Cry Later") {
    window.open("https://www.youtube.com/watch?v=JFm7YDVlqnI", "_blank");
  } else {
    alert("Please select a song before submitting."); // Show an alert if nothing is selected
    return;
  }
  console.log(selectedSong);
});
