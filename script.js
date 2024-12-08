function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.onhashchange = function() {
    // Trigger a full page refresh when navigating to a new section
    window.location.reload();
};
