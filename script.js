// Information displayed for each planet
const planetInformation = {
    mercury: {
        name: "Mercury",
        image: "images/mercury.png",
        fact: "Mercury is the closest planet to the Sun and the smallest planet in our Solar System. A year on Mercury lasts only 88 Earth days."
    },

    venus: {
        name: "Venus",
        image: "images/venus.png",
        fact: "Venus is the hottest planet in our Solar System. Its thick atmosphere traps heat through an extreme greenhouse effect."
    },

    earth: {
        name: "Earth",
        image: "images/earth.png",
        fact: "Earth is the third planet from the Sun and the only known planet that supports life. About 71% of its surface is covered by water."
    },

    mars: {
        name: "Mars",
        image: "images/mars.png",
        fact: "Mars is known as the Red Planet because iron minerals in its soil oxidize, giving the surface its reddish color."
    },

    jupiter: {
        name: "Jupiter",
        image: "images/jupiter.png",
        fact: "Jupiter is the largest planet in our Solar System. Its Great Red Spot is a massive storm that has existed for centuries."
    },

    saturn: {
        name: "Saturn",
        image: "images/saturn.png",
        fact: "Saturn is famous for its spectacular rings, which are made primarily of countless pieces of ice and rock."
    },

    uranus: {
        name: "Uranus",
        image: "images/uranus.png",
        fact: "Uranus rotates almost completely on its side. Scientists believe a massive collision may have caused its unusual tilt."
    },

    neptune: {
        name: "Neptune",
        image: "images/neptune.png",
        fact: "Neptune is the farthest major planet from the Sun and has some of the fastest winds measured anywhere in the Solar System."
    }
};


// Select the interactive elements from the HTML
const planetButtons = document.querySelectorAll(".planet");
const planetModal = document.getElementById("planet-modal");
const modalPlanetImage = document.getElementById("modal-planet-image");
const modalPlanetName = document.getElementById("modal-planet-name");
const modalPlanetFact = document.getElementById("modal-planet-fact");
const closeButton = document.getElementById("close-button");


// Open the modal when a planet is clicked
planetButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedPlanet = button.dataset.planet;
        const selectedInformation = planetInformation[selectedPlanet];

        // Update the modal with the selected planet
        modalPlanetImage.src = selectedInformation.image;
        modalPlanetImage.alt = selectedInformation.name;
        modalPlanetName.textContent = selectedInformation.name;
        modalPlanetFact.textContent = selectedInformation.fact;

        // Display the modal
        planetModal.classList.add("active");
        planetModal.setAttribute("aria-hidden", "false");

        // Prevent the page from scrolling behind the modal
        document.body.style.overflow = "hidden";
    });
});


// Function for closing the modal
function closePlanetModal() {
    planetModal.classList.remove("active");
    planetModal.setAttribute("aria-hidden", "true");

    // Allow page scrolling again
    document.body.style.overflow = "";
}


// Close using the X button
closeButton.addEventListener("click", closePlanetModal);


// Close when clicking the dark area outside the modal box
planetModal.addEventListener("click", function (event) {
    if (event.target === planetModal) {
        closePlanetModal();
    }
});


// Close when pressing the Escape key
document.addEventListener("keydown", function (event) {
    if (
        event.key === "Escape" &&
        planetModal.classList.contains("active")
    ) {
        closePlanetModal();
    }
});