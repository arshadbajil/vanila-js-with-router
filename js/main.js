document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");
  const homeLink = document.getElementById("home-link");
  const aboutLink = document.getElementById("about-link");
  const wallLink = document.getElementById("wall-link");
  const loginLink = document.getElementById("login-link");
  const registerLink = document.getElementById("register-link");

  homeLink.addEventListener("click", loadPage.bind(null, "pages/home.js"));
  aboutLink.addEventListener("click", loadPage.bind(null, "pages/about.js"));
  wallLink.addEventListener("click", loadPage.bind(null, "pages/wall.js"));
  loginLink.addEventListener("click", loadPage.bind(null, "auth/login.js"));
  registerLink.addEventListener(
    "click",
    loadPage.bind(null, "auth/register.js")
  );

  // Initial load
  loadPage("pages/home.js");

  function loadPage(pageUrl) {
    console.log(pageUrl);
    fetch({
      url: "js/pages/home.js",
      method: "GET",
      headers: { "Content-Type": "application/javascript" }
    })
      .then(async (response) => await response.text())
      .then((html) => {
        mainContent.innerHTML = html;
      })
      .catch((error) => {
        alert(error);
        console.error("Error loading page:", error);
      });
  }
});
