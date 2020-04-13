function animateWhenVisible() {
  var targets = document.querySelectorAll(".animateWhenVisible");
  var intersectionObserverOptions = {
    root: null,
    rootMargin: "100px",
    threshold: 0.1
  };
  var observer = new IntersectionObserver(
    onIntersection,
    intersectionObserverOptions
  );
  targets.forEach(q => {
    observer.observe(q);
  });
  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("animated", "fadeInUp");
      }
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
      }
    });
  }
}
animateWhenVisible();

function lazyLoad() {
  var targets = document.querySelectorAll(".lazy-load");
  var intersectionObserverOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0.1
  };

  var observer = new IntersectionObserver(
    onIntersection,
    intersectionObserverOptions
  );
  targets.forEach(q => {
    observer.observe(q);
  });

  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.src = entry.target.dataset.src;
        entry.target.classList.remove("lazy-load");
        observer.unobserve(entry.target);
      }
    });
  }
}
lazyLoad();

const copyPostLink = document.querySelector("#copyPostLink");
const postLink = document.querySelector("#postLink");
const originalPostLink = postLink.value;

copyPostLink.addEventListener("click", () => {
  postLink.select();
  document.execCommand("copy");
  postLink.value = "Link has been copied to your clipboard!";
  setTimeout(function() {
    postLink.value = originalPostLink;
  }, 2500);
});
