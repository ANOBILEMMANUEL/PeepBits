document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.getElementById("hamburger");
  const closeSidebarBtn = document.getElementById("closeSidebar");
  const navLinks = document.querySelectorAll(".nav-link");
  const contactModal = document.getElementById("contactModal");
  const closeModal = document.getElementById("closeModal");
  const contactForm = document.getElementById("contactForm");

  // Page Switching Logic
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active class from all pages
      pages.forEach((page) => page.classList.remove("active"));

      // Show the selected page
      const target = e.target.getAttribute("data-target") + "Page";
      document.getElementById(target).classList.add("active");

      // Close the sidebar when navigating (optional for mobile UX)
      sidebar.classList.remove("show");
      hamburger.style.display = "block";
    });
  });

  // Contact modal logic
  document
    .querySelector('.nav-link[data-target="contact"]')
    .addEventListener("click", () => {
      contactModal.style.display = "flex";
    });

  closeModal.addEventListener("click", () => {
    contactModal.style.display = "none";
    // Ensure hamburger icon remains visible
    hamburger.style.display = "block";
  });

  // Form submission logic (for demo purposes)
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    contactModal.style.display = "none";
    contactForm.reset();
  });

  // Hamburger menu toggle
  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("show");
    hamburger.style.display = sidebar.classList.contains("show")
      ? "block"
      : "none";
  });

  // Close sidebar on click of the X icon
  closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
    hamburger.style.display = "block";
  });

  // Ensure hamburger icon reappears after sidebar transitions
  sidebar.addEventListener("transitionend", () => {
    if (!sidebar.classList.contains("show")) {
      hamburger.style.display = "block";
    }
  });

  // Preloader logic
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none"; // Hide preloader
  });
});
