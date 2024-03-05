function iconManagement() {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document
        .getElementById(button.getAttribute("date-id"))
        .classList.add("active");
    });
  });
}

function lightMode() {
  document.querySelector(".theme-btn").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
  });

  document.querySelector(".theme-btn2").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
  });
}

iconManagement();
lightMode();

const typed = new Typed(".text", {
  strings: ["Développeur Web", "Youtubeur", "Coach Sportif"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*const textElement = document.querySelector(".text");
const textArray = ["Développeur Web", "Youtubeur", "Coach Sportif"];
const speed = 125;

function typeText(textElement, textArray, speed) {
  let charIndex = 0;
  let arrayIndex = 0;
  let text = "";
  let isDeleting = false;

  function type() {
    const currentText = textArray[arrayIndex];
    if (isDeleting) {
      text = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      text = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    textElement.textContent = text;

    let typeSpeed = speed;
    if (isDeleting) {
      typeSpeed / 2;
    }

    if (!isDeleting && text === currentText) {
      isDeleting = true;
      typeSpeed = speed * 2;
    } else if (isDeleting && text === "") {
      isDeleting = false;
      arrayIndex++;
      if (arrayIndex >= textArray.length) {
        arrayIndex = 0;
      }
    }
    setTimeout(type, typeSpeed);
  }
  setTimeout(type, speed);
}

typeText(textElement, textArray, speed);*/
