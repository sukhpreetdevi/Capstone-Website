document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const navigation = document.querySelector(".navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", isOpen);
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
      });
    });
  }

  document.querySelectorAll("[data-dashboard-link]").forEach((link) => {
    link.href = campaignConfig.dashboardUrl;
  });

  document.querySelectorAll("[data-figma-link]").forEach((link) => {
    link.href = campaignConfig.figmaUrl;
  });

  const scrollButton = document.querySelector(".scroll-top");

  if (scrollButton) {
    window.addEventListener("scroll", () => {
      scrollButton.classList.toggle("visible", window.scrollY > 500);
    });

    scrollButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  document.querySelectorAll(".transcript-button").forEach((button) => {
    button.addEventListener("click", () => {
      const transcript = document.getElementById(button.dataset.target);

      if (!transcript) return;

      const isHidden = transcript.hasAttribute("hidden");

      if (isHidden) {
        transcript.removeAttribute("hidden");
        button.textContent = "Hide transcript";
      } else {
        transcript.setAttribute("hidden", "");
        button.textContent = "Show transcript";
      }
    });
  });
});
