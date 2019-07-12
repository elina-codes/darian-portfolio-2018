const mobileNav = document.getElementById("js--mobile-nav");
const activeClass = "active";

mobileNav.addEventListener("click", function(e) {
  if (e.target && (e.target.nodeName == "SPAN" || e.target.nodeName == "A")) {
    if (document.querySelector("#js--mobile-nav a.active")) {
      document.querySelector("#js--mobile-nav a.active").classList.remove(activeClass);
    }
    e.target.parentElement.classList.add(activeClass);
  }
});

// append .html to links when developing locally
if (!window.location.hostname.includes("uxitall")) {
  const mainDoc = document.querySelector("main");
  Array.from(mainDoc.querySelectorAll("a"))
    .filter(link => link.hostname === "localhost" && link.pathname.match(/\//g).length > 0 && link.pathname.length > 1)
    .forEach(item => (item.href = item.href + ".html"));
}
