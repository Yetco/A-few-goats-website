const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const menu = document.querySelector(".menu");
const media = window.matchMedia("(width < 40em)");
const form = document.querySelector("form");

function setupTopNav(e) {
  if (e.matches) {
    console.log("is mobile");
    menu.style.transition = "none";
  } else {
    console.log("is  desktop");
  }
}

function openMenu() {
  menu.classList.add("show");
  menu.removeAttribute("style");
  btnOpen.setAttribute("aria-expanded", "true");
  btnClose.setAttribute("aria-expanded", "true");

  // Remove inert from menu
  // menu.inert = false;
  btnClose.focus();
}

function closeMenu() {
  menu.classList.remove("show");
  btnOpen.setAttribute("aria-expanded", "false");
  btnClose.setAttribute("aria-expanded", "false");

  // Add inert to menu
  // menu.inert = true;
  btnOpen.focus();

  setTimeout(() => {
    menu.style.transition = "none";
  }, 300);
}

setupTopNav(media);

btnOpen.addEventListener("click", openMenu);

btnClose.addEventListener("click", closeMenu);

media.addEventListener("change", function (e) {
  setupTopNav(e);
});

// Modal --------------------------------------------

// Will hold previously focused element
let focusedElementBeforeModal;

// Find the modal and overlay in the DOM
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");

const modalToggle = document.querySelector(".modal-toggle");
modalToggle.addEventListener("click", openModal);

function openModal() {
  // Save current focus
  focusedElementBeforeModal = document.activeElement;

  // Listen for and trapped the keyboard
  modal.addEventListener("keydown", trapTabKey);

  // Listen for indicators to close the modal
  modalOverlay.addEventListener("click", closeModal);

  // form validation

  // const form = document.querySelector("form");

  // form.addEventListener("submit", function (event) {
  // Select input fields
  //   const fullName = document.getElementById("fullname").value.trim();
  //   const email = document.getElementById("email").value.trim();

  //   // Check if fields are empty
  //   if (fullName === "" || email === "") {
  //     alert("Please fill in all required fields before submitting!");
  //     event.preventDefault(); // Prevents form submission
  //   }
  // });

  // Sign up button
  const signUpBtn = document.querySelector("#signup");
  signUpBtn.addEventListener("click", () => {
    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();

    // Check if fields are empty
    if (fullName === "" || email === "") {
      alert("Please fill in all required fields before submitting!");
      // event.preventDefault(); // Prevents form submission
    } else {
      window.open(
        "https://www.instagram.com/reel/DG1L8RVTcnM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "_blank"
      );
      closeModal();
    }
  });

  // Find all focusable children
  let focusableElementsString = "button, input, select, textarea, a[href]";
  let focusableElements = modal.querySelectorAll(focusableElementsString);
  // Convert node list to an array
  focusableElements = Array.prototype.slice.call(focusableElements);

  let firstTabStop = focusableElements[0];
  let lastTabStop = focusableElements[focusableElements.length - 1];

  modal.style.display = "block";
  modalOverlay.style.display = "block";

  // Focus first child
  firstTabStop.focus();

  function trapTabKey(e) {
    // Check for the TAB key
    if (e.keyCode === 9) {
      // SHIFT + TAB
      if (e.shiftKey && document.activeElement === firstTabStop) {
        e.preventDefault();
        lastTabStop.focus();
      }
      // TAB
      else if (!e.shiftKey && document.activeElement === lastTabStop) {
        e.preventDefault();
        firstTabStop.focus();
      }
    }

    // ESCAPE
    if (e.keyCode === 27) {
      closeModal();
    }
  }
}

function closeModal() {
  modal.style.display = "none";
  modalOverlay.style.display = "none";

  // Return focus to the button that opened the modal
  modalToggle.focus();
}
