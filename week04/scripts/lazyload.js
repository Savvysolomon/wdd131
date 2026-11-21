
// CURRENT COPYRIGHT YEAR

const currentYear = document.querySelector("#currentyear");

currentYear.textContent = new Date().getFullYear();


// LAST MODIFIED DATE

const lastModified = document.querySelector("#lastModified");

lastModified.textContent = `Last Modified: ${document.lastModified}`;
