const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const menu = document.querySelector(".menu");
const media = window.matchMedia("(width < 40em)");
const main = document.querySelector("main");

// Modal --------------------------------------------

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

function menuOpen() {
  menu.classList.add("show");
  menu.removeAttribute("style");
  // menu.removeAttribute("inert");
  // main.setAttribute("inert", "");
  btnClose.focus();
}

function menuClose() {
  menu.classList.remove("show");
  // menu.setAttribute("inert", "");
  // main.removeAttribute("inert");
  btnOpen.focus();

  setTimeout(() => {
    menu.style.transition = "none";
  }, 300);
}

btnOpen.addEventListener("click", menuOpen);

btnClose.addEventListener("click", menuClose);

media.addEventListener("change", function (e) {
  setupTopNav(e);
});

setupTopNav(media);

// Radio form --------------------------------------------
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const selectedMovie = document.querySelector("input[name='movie']:checked");

  if (!selectedMovie) {
    alert("Please select a movie.");
    return;
  }

  if (selectedMovie.value === "Training Day") {
    openModal();
    boxFact.innerHTML =
      "Director Antoine Fuqua secured permission from local gang leaders to film in the Imperial Courts housing project. ";
  } else if (selectedMovie.value === "The Equalizer") {
    openModal();
    boxFact.innerHTML =
      "The Equalizer was inspired by the 1980s television series of the same name, which starred Edward Woodward as a retired intelligence operative who helps those in need.";
  } else if (selectedMovie.value === "The Equalizer 2") {
    openModal();
    boxFact.innerHTML =
      "The Equalizer 2 is notable for being Denzel Washington's first sequel in his career, as he typically avoids sequels.";
  } else if (selectedMovie.value === "American Gangster") {
    openModal();
    boxFact.innerHTML =
      "American Gangster is based on the true story of Frank Lucas, a heroin dealer in Harlem during the 1970s, and his battle with law enforcement.";
  } else {
    alert("Please select a movie.");
    return;
  }
  console.log(selectedMovie.value);
}); // Prevent default form submission

// // Modal --------------------------------------------
const closeButton = document.querySelector(".close");
const dialog = document.querySelector(".dialog");
const boxFact = document.querySelector(".box-fact");

function openModal() {
  if (dialog) {
    dialog.style.display = "block"; // Show the modal
  } else {
    console.error("Modal not found"); // Log an error if the modal is not found
  }
}

closeButton.addEventListener("click", function () {
  dialog.style.display = "none"; // Close the modal
}); // Close the modal when the close button is clicked
