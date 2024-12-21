window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const headerOffset = header.offsetTop;

  if (window.scrollY > headerOffset) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
