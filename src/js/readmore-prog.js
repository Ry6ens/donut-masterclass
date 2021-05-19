(() => {
  const menuBtnRef = document.querySelector(".read-more--program-btn")
  const mobileMenuRef = document.querySelector(".read-more--program-text")
  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)
    
    mobileMenuRef.classList.toggle("is-open")
  })
})()