const countries = [];
const countryInfoContainer = document.querySelector("#country-info-container");

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const response = `<p>${data[0].name.common}</p>`;
    // countryInfoContainer.innerHTML = response;
  })
  .catch((error) => console.log(error));

console.log(countryInfoContainer);
