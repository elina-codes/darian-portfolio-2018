const mobileNav = document.getElementById("js--mobile-nav");
const mobileNavToggle = document.getElementById("js--mobile-nav-toggle");
const mobileNavOverlay = document.getElementById("js--mobile-nav-overlay");

const toggleMobileNav = () => {
    document.body.classList.toggle("open-nav");
};

const closeMobileNav = () => {
    document.body.classList.remove("open-nav");
};

mobileNavToggle.onclick = toggleMobileNav;
mobileNavOverlay.onclick = closeMobileNav;

mobileNav.addEventListener("click", function(e) {
    if (e.target && (e.target.nodeName == "SPAN" || e.target.nodeName == "A")) {
        closeMobileNav();
    }
});
