import "./styles/tailwind.css";

// Your JavaScript Code
const elementsToAnimate = document.querySelectorAll(".animate");

function animateElement(element) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const el = entries[0].target;
      el.classList.add("active");
      observer.disconnect();
    }
  }, {});

  observer.observe(element);
}

elementsToAnimate.forEach(animateElement);
