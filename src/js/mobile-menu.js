(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const menuItem = document.querySelectorAll('.navigation-list__link');


  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open");
  });

    for (i in menuItem) {
    const item = menuItem[i];
    item.addEventListener('click', () => {
      mobileMenuRef.classList.remove('is-open');
      menuBtnRef.classList.remove('is-open');
    });
  }
})();


