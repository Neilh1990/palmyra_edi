const mapContainer = document.querySelector("#map-container");
const countryTitle = document.querySelector("#country-title");
const countryStaff = document.querySelector("#country-staff");
const countryFact = document.querySelector("#country-fact");

const countryData = {
  GB: {
    name: "United Kingdom",
    staff: "Neil Harper",
    fact: "The UK is made up of four countries: England, Scotland, Wales and Northern Ireland.",
  },
  NG: {
    name: "Nigeria",
    staff: "Samiat Alejo",
    fact: "Nigeria is home to over 250 ethnic groups and languages",
  },
  IE: {
    name: "Ireland",
    staff: "Colleen Tigue",
    fact: "Ireland has two official languages: Irish (Gaeilge) and English.",
  },
};
const activeCountryID = ["GB", "NG", "IE"];
fetch("world.svg")
  .then((response) => response.text())
  .then((svg) => {
    mapContainer.innerHTML = svg;

    activeCountryID.forEach((id) => {
      const country = document.querySelector(`#${id}`);

      if (country) {
        country.classList.add("country-interactive");

        country.addEventListener("click", function () {
         const selectedCountry = countryData[id];
         countryTitle.textContent = selectedCountry.name;
         countryStaff.textContent = selectedCountry.staff;
         countryFact.textContent = selectedCountry.fact; 
        });
      }
    });
  });
