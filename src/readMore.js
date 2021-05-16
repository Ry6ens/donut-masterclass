// let btn = document.querySelector('.about-us__button');
// btn.onclick = function () {
//   let more = document.querySelector(".more");
//   let btn = document.querySelector(".about-us__button");
//   if (more.style.display === "inline") {
//     btn.innerHTML = "Read More";
//     more.style.display = "none"
//   } else {
//     btn.innerHTML = "Less";
//     more.style.display = "inline";
//   }
// }

(() => {
  const menuBtnRef = document.querySelector("[more-button]")
  const mobileMenuRef = document.querySelector("[more-text]")
  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)
    
    mobileMenuRef.classList.toggle("is-open")
  })
})()