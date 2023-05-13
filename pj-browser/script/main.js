const countries = [];
const countryInfoContainer = document.querySelector("#country-info-container");
const searchInput = document.querySelector("#search-input");
function passIndex() {
  displayCountries(searchInput.value);
  console.log("Passed");
}

function displayCountries(index) {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      const response = `
    <div class="country-info-flag">
      <img class="flag-img" src=${data[index].flags.png} alt="" />
      <p class="flag-name">${data[index].name.common}</p>
    </div>
    <div class="country-info-details">
      <p class="datail" ><strong>Capital: </strong> ${data[index].capital}</p>
      <p class="datail" >
        <strong>Continent: </strong> ${data[index].continents}
      </p>
      <p class="datail" >
        <strong>Population: </strong> ${data[index].population}
      </p>
      <p class="datail" >
        <strong>Currency: </strong> ${
          data[index].currencies[Object.keys(data[index].currencies)].name
        }
      </p>
      <p class="datail" >
        <strong>Language: </strong> ${Object.values(data[index].languages)
          .toString()
          .split(",")
          .join(", ")}
      </p>
    </div>`;
      countryInfoContainer.innerHTML = response;
      console.log(searchInput.value);
    })
    .catch((error) => console.log(error));
}

console.log(countryInfoContainer);
