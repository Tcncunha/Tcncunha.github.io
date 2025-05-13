document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".section");
  
    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("data-target");
  
        // Hide all sections
        sections.forEach(section => {
          section.classList.remove("active");
        });
  
        // Remove active class from all links
        links.forEach(l => l.classList.remove("active"));
  
        // Show target section
        document.getElementById(targetId).classList.add("active");
        link.classList.add("active");
      });
    });
  });
  