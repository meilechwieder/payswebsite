
// <!-- ====== SCROLL TO TOP SCRIPT ====== -->
var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll - 0.15 is the percentage the page has to scroll before the button appears
  // This can be changed - experiment
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal) > 0.02) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)




// for countdown

document.addEventListener("DOMContentLoaded", function () {
  function startCounter(el, start, end, duration) {
      let range = end - start;
      let current = start;
      let increment = end > start ? 1 : -1;
      let stepTime = Math.abs(Math.floor(duration / range));
      let timer = setInterval(function () {
          current += increment;
          el.innerText = current + (el.dataset.suffix || "");
          if (current == end) {
              clearInterval(timer);
          }
      }, stepTime);
  }

  function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              let el = entry.target.querySelector("h1");
              let endValue = parseInt(el.dataset.count);
              let suffix = el.dataset.suffix || "";
              startCounter(el, 0, endValue, 2000);
              observer.unobserve(entry.target);
          }
      });
  }

  let observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
  });

  document.querySelectorAll(".count-number-div > div").forEach((div) => {
      let h1 = div.querySelector("h1");
      let text = h1.innerText;
      let num = parseInt(text.replace(/\D/g, "")); // Extracts numbers only
      let suffix = text.replace(/[0-9]/g, ""); // Extracts non-numeric part
      h1.dataset.count = num;
      h1.dataset.suffix = suffix;
      h1.innerText = "0" + suffix;
      observer.observe(div);
  });
});






