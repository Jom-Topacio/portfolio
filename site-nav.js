document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");

    if (!menuButton || !siteNav) {
        return;
    }

    function closeMenu() {
        siteNav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
    }

    menuButton.addEventListener("click", function() {
        const isOpen = siteNav.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    siteNav.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function(event) {
        if (!siteNav.contains(event.target) && !menuButton.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
});
