import '@fortawesome/fontawesome-free/css/all.min.css';



document.addEventListener("DOMContentLoaded", () => {
  // Select all elements you want to animate
  const animatedDivs = document.querySelectorAll(".education, svg circle");

  // Intersection Observer callback
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate"); // Add animation class
      } else {
        entry.target.classList.remove("animate"); // Optionally remove the class if not visible
      }
    });
  };

  // Create an Intersection Observer instance
  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.1, // Trigger when 10% of the div is visible
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each selected element
  animatedDivs.forEach((div) => observer.observe(div));
});
