// footer date
const yearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

// static weather values
const temperature = 9;
const windSpeed = 12;  

// wind chill Calculation
const calculateWindChill = (temp, speed) => (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

// display wind chill if conditions are met
const windChillElement = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillElement.textContent = "N/A";
}
