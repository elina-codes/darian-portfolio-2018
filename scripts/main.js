const mobileNav = document.getElementById("js--mobile-nav");
const mobileNavToggle = document.getElementById("js--mobile-nav-toggle");
const mobileNavOverlay = document.getElementById("js--mobile-nav-overlay");
const activeClass = "active";

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
    document
      .querySelector("#js--mobile-nav a.active")
      .classList.remove(activeClass);
    e.target.parentElement.classList.add(activeClass);
  }
});

if (!window.location.hostname.includes("uxitall")) {
  document.querySelector(".nav-secondary").classList.remove("hide");
}
