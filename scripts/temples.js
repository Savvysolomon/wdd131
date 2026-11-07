document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
    }

    const menuButton = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("open");

            if (navMenu.classList.contains("open")) {
                menuButton.innerHTML = "&#10006;"; 
                menuButton.setAttribute("aria-expanded", "true");
            } else {
                menuButton.innerHTML = "&#9776;";  
                menuButton.setAttribute("aria-expanded", "false");
            }
        });
    }
});
