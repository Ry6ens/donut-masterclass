// function readMore() {
//     var more = document.getElementById("more");
//     var btn = document.getElementById("btn");
//     if (more.style.display === "inline") {
//         btn.innerHTML = "Read More";
//         more.style.display = "none"
//     } else {
//         btn.innerHTML = "Less";
//         more.style.display = "inline";
//     }
// }

(() => {
  const menuBtnRef = document.querySelector("[more-button-program]")
  const mobileMenuRef = document.querySelector("[more-text-program]")
  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)
    
    mobileMenuRef.classList.toggle("is-open")
  })
})()