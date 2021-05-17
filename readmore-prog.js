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