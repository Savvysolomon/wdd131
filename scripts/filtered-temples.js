
// TEMPLE ARRAY

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // additional temple objects

    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-66076.jpg"
    },
    {
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area: 19860,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-75601.jpg"
    },
    
];


// select html elements 

const gallery = document.querySelector("#gallery");
const viewTitle = document.querySelector(".view-title");
const navigationLinks = document.querySelectorAll("#nav-menu a");


// display temple cards

function displayTemples(templeList) {

    gallery.innerHTML = "";

    if (templeList.length === 0) {
        gallery.innerHTML = "<p>No temples found for this category.</p>";
        return;
    }

    templeList.forEach((temple) => {

        const card = document.createElement("article");

        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>

            <p>
                <span>Location:</span>
                ${temple.location}
            </p>

            <p>
                <span>Dedicated:</span>
                ${temple.dedicated}
            </p>

            <p>
                <span>Area:</span>
                ${temple.area.toLocaleString()} sq ft
            </p>

            <img
                src="${temple.imageUrl}"
                alt="${temple.templeName}"
                loading="lazy">
        `;

        gallery.appendChild(card);

    });
}


// filter temples 

function filterTemples(filter) {

    let filteredTemples = [];

    switch (filter) {

        case "home":
            filteredTemples = temples;
            break;

        case "old":
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.split(",")[0]);
                return year < 1900;
            });
            break;

        case "new":
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.split(",")[0]);
                return year > 2000;
            });
            break;

        case "large":
            filteredTemples = temples.filter((temple) => {
                return temple.area > 90000;
            });
            break;

        case "small":
            filteredTemples = temples.filter((temple) => {
                return temple.area < 10000;
            });
            break;

        default:
            filteredTemples = temples;
    }

    displayTemples(filteredTemples);
}


// navigation event listeners

navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const filter = link.dataset.filter;

        filterTemples(filter);

        viewTitle.textContent = link.textContent;

        navigationLinks.forEach((navLink) => {
            navLink.classList.remove("active");
            navLink.removeAttribute("aria-current");
        });

        link.classList.add("active");
        link.setAttribute("aria-current", "page");

        // close mobile menu after selection
        navMenu.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = "☰";

    });

});


// display all temples when on page load

displayTemples(temples);


// current copyright year

const currentYear = document.querySelector("#currentyear");

currentYear.textContent = new Date().getFullYear();


// last modified date

const lastModified = document.querySelector("#lastModified");

lastModified.textContent = `Last Modified: ${document.lastModified}`;


// mobile navigation menu

const menuButton = document.querySelector("#menu-btn");

const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");

    menuButton.innerHTML = isOpen ? "✖" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );

});
