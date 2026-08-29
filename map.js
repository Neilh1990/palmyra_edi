const mapContainer = document.querySelector("#map-container");

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
          console.log(`You clicked ${id}`);
        });
      }
    });
  });
