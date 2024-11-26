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
  });

  // Close sidebar on click of the X icon
  closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });
});

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
  });

  // Close sidebar on click of the X icon
  closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });
});
