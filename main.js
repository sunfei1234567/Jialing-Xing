// Mobile Menu Toggle
const mobileMenuButton = document.querySelector(".mobile-menu-toggle");
const navigationMenu = document.querySelector(".navigation-menu");

if (mobileMenuButton && navigationMenu) {
    mobileMenuButton.addEventListener("click", () => {
        navigationMenu.classList.toggle("dis");
        document.body.classList.toggle("overflow");
    });
}
