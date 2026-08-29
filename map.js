const mapContainer =
document.querySelector("#map-container");

fetch("world.svg")
    .then(response => response.text())
    .then(svg => {
        mapContainer.innerHTML = svg;

        const uk = document.querySelector("#GB");

        uk.addEventListener("click", function(){
            console.log("You clicked the United Kingdom");
        });
    });

