const countryInfoContainer = document.querySelector("#country-info-container");
const searchInput = document.querySelector("#search-input");

function displayCountries() {
  const countries = [];
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      function renderCountry(country) {
        const response = `
    <div class="country-info-flag">
      <img class="flag-img" src=${country.flags.png} alt="" />
      <p class="flag-name">${country.name.common}</p>
    </div>
    <div class="country-info-details">
      <p class="datail" ><strong>Capital: </strong> ${country.capital}</p>
      <p class="datail" >
        <strong>Continent: </strong> ${country.continents}
      </p>
      <p class="datail" >
        <strong>Population: </strong> ${country.population}
      </p>
      <p class="datail" >
        <strong>Currency: </strong> ${
          country.currencies[Object.keys(country.currencies)].name
        }
      </p>
      <p class="datail" >
        <strong>Language: </strong> ${Object.values(country.languages)
          .toString()
          .split(",")
          .join(", ")}
      </p>
    </div>`;
        countryInfoContainer.innerHTML = response;
      }
      countries.push(...data);
      console.log(searchInput.value);
      function findMatch(wordtToFind, countries) {
        return countries.filter((country) => {
          let regex = new RegExp(wordtToFind, "gi");
          return country.name.common.match(regex);
        });
      }
      const searchResponse = findMatch(searchInput.value, countries);
      renderCountry(searchResponse[0]);
    })
    .catch((error) => console.log(error));
}

console.log(countryInfoContainer);
