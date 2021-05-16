let btn = document.querySelector('.about-us__button');
btn.onclick = function () {
  let more = document.querySelector(".more");
  let btn = document.querySelector(".about-us__button");
  if (more.style.display === "inline") {
    btn.innerHTML = "Read More";
    more.style.display = "none"
  } else {
    btn.innerHTML = "Less";
    more.style.display = "inline";
  }
}