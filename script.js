// Scientific information is summarized from NASA Solar System Exploration.
// Astrology notes are labeled as cultural traditions rather than science.
const planetInformation = {
    mercury: {
        name: "Mercury",
        image: "images/mercury.png",
        fact: "Mercury is the closest planet to the Sun and the smallest planet in our Solar System. Its fast orbit creates a year lasting only 88 Earth days.",
        distance: "36 million miles (58 million km)",
        moons: "0",
        temperature: "333°F (167°C) mean",
        day: "About 59 Earth days",
        scienceFact: "Temperatures swing from about 800°F (430°C) during the day to −290°F (−180°C) at night because Mercury has almost no atmosphere to hold heat.",
        astrologyFact: "In Western astrology, Mercury traditionally symbolizes communication, learning, and travel."
    },
    venus: {
        name: "Venus",
        image: "images/venus.png",
        fact: "Venus is similar in size to Earth, but its dense carbon-dioxide atmosphere creates an extreme greenhouse effect.",
        distance: "67.2 million miles (108 million km)",
        moons: "0",
        temperature: "867°F (464°C) mean",
        day: "About 243 Earth days",
        scienceFact: "Venus rotates in the opposite direction from most planets, so the Sun would appear to rise in the west and set in the east.",
        astrologyFact: "In Western astrology, Venus traditionally symbolizes affection, beauty, pleasure, and values."
    },
    earth: {
        name: "Earth",
        image: "images/earth.png",
        fact: "Earth is the third planet from the Sun and the only world currently known to support life. Liquid-water oceans cover about 71% of its surface.",
        distance: "93 million miles (150 million km)",
        moons: "1",
        temperature: "59°F (15°C) mean",
        day: "23.9 hours",
        scienceFact: "Earth's Moon helps stabilize our planet's axial wobble, contributing to a more stable climate over long periods.",
        astrologyFact: "Earth itself is not normally treated as a planet in geocentric Western astrology because the system observes the sky from Earth."
    },
    mars: {
        name: "Mars",
        image: "images/mars.png",
        fact: "Mars is called the Red Planet because iron minerals in its rocks and soil oxidize, or rust, coloring the surface.",
        distance: "142 million miles (228 million km)",
        moons: "2",
        temperature: "−85°F (−65°C) mean",
        day: "24.6 hours",
        scienceFact: "Mars is home to Olympus Mons, the largest known volcano in the Solar System, and the immense Valles Marineris canyon system.",
        astrologyFact: "In Western astrology, Mars traditionally symbolizes action, drive, courage, and conflict."
    },
    jupiter: {
        name: "Jupiter",
        image: "images/jupiter.png",
        fact: "Jupiter is the largest and oldest planet in our Solar System. Its colorful bands are clouds moving in opposite directions.",
        distance: "484 million miles (778 million km)",
        moons: "95 officially recognized",
        temperature: "−166°F (−110°C) mean",
        day: "9.9 hours",
        scienceFact: "Jupiter has the shortest day of any planet, and its Great Red Spot is a storm larger than Earth that has raged for centuries.",
        astrologyFact: "In Western astrology, Jupiter traditionally symbolizes growth, opportunity, wisdom, and abundance."
    },
    saturn: {
        name: "Saturn",
        image: "images/saturn.png",
        fact: "Saturn is a gas giant surrounded by an elaborate system of rings composed mainly of ice and rock particles.",
        distance: "886 million miles (1.4 billion km)",
        moons: "274 confirmed (March 2025)",
        temperature: "−220°F (−140°C) mean",
        day: "10.7 hours",
        scienceFact: "Saturn's average density is lower than water, and a persistent six-sided jet stream circles its north pole.",
        astrologyFact: "In Western astrology, Saturn traditionally symbolizes structure, responsibility, limits, and time."
    },
    uranus: {
        name: "Uranus",
        image: "images/uranus.png",
        fact: "Uranus is a cold ice giant whose extreme axial tilt makes it appear to roll around the Sun on its side.",
        distance: "1.8 billion miles (2.9 billion km)",
        moons: "28",
        temperature: "−320°F (−195°C) mean",
        day: "About 17 hours",
        scienceFact: "A Uranian pole can face decades of sunlight followed by decades of darkness because the planet is tilted by nearly 98 degrees.",
        astrologyFact: "In modern Western astrology, Uranus traditionally symbolizes innovation, disruption, independence, and sudden change."
    },
    neptune: {
        name: "Neptune",
        image: "images/neptune.png",
        fact: "Neptune is the farthest major planet from the Sun, a dark and frigid ice giant with extremely powerful winds.",
        distance: "2.8 billion miles (4.5 billion km)",
        moons: "16 known",
        temperature: "−330°F (−200°C) mean",
        day: "About 16 hours",
        scienceFact: "Sunlight takes roughly four hours to reach Neptune, and one Neptunian year lasts about 165 Earth years.",
        astrologyFact: "In modern Western astrology, Neptune traditionally symbolizes imagination, dreams, spirituality, and illusion."
    }
};

const spaceFacts = [
    "The Solar System contains eight planets and five officially recognized dwarf planets.",
    "The Sun contains about 99.8% of the mass in our Solar System.",
    "Jupiter's moon Ganymede is larger than the planet Mercury.",
    "A day on Venus lasts longer than a Venusian year.",
    "The four giant planets—Jupiter, Saturn, Uranus, and Neptune—all have rings.",
    "Mars has nearly the same amount of land area as Earth because oceans cover most of Earth's surface.",
    "Our Solar System is located in the Orion Spur of the Milky Way galaxy.",
    "It takes our Solar System roughly 230 million years to orbit the center of the Milky Way."
];

const planetButtons = document.querySelectorAll(".planet");
const planetModal = document.getElementById("planet-modal");
const modalPlanetImage = document.getElementById("modal-planet-image");
const modalPlanetName = document.getElementById("modal-planet-name");
const modalPlanetFact = document.getElementById("modal-planet-fact");
const modalDistance = document.getElementById("modal-distance");
const modalMoons = document.getElementById("modal-moons");
const modalTemperature = document.getElementById("modal-temperature");
const modalDay = document.getElementById("modal-day");
const modalScienceFact = document.getElementById("modal-science-fact");
const modalAstrologyFact = document.getElementById("modal-astrology-fact");
const closeButton = document.getElementById("close-button");
const progressText = document.getElementById("progress-text");
const progressMessage = document.getElementById("progress-message");
const progressFill = document.getElementById("progress-fill");
const progressTrack = document.querySelector(".progress-track");
const randomFact = document.getElementById("random-fact");
const newFactButton = document.getElementById("new-fact-button");

const exploredPlanets = new Set();
let lastFocusedElement = null;
let currentFactIndex = -1;

function updateProgress(selectedPlanet) {
    exploredPlanets.add(selectedPlanet);
    const exploredCount = exploredPlanets.size;
    const percentComplete = (exploredCount / planetButtons.length) * 100;

    progressText.textContent = `Planets Explored: ${exploredCount}/${planetButtons.length}`;
    progressFill.style.width = `${percentComplete}%`;
    progressTrack.setAttribute("aria-valuenow", exploredCount);

    if (exploredCount === planetButtons.length) {
        progressMessage.textContent = "Mission complete—you explored every planet!";
    } else if (exploredCount >= 4) {
        progressMessage.textContent = "More than halfway across the Solar System!";
    } else {
        progressMessage.textContent = `${planetButtons.length - exploredCount} planetary profiles remain.`;
    }

    planetButtons.forEach(function (button) {
        if (exploredPlanets.has(button.dataset.planet)) {
            button.classList.add("explored");
            button.setAttribute("aria-label", `${planetInformation[button.dataset.planet].name}, explored. Open again`);
        }
    });
}

function openPlanetModal(button) {
    const selectedPlanet = button.dataset.planet;
    const info = planetInformation[selectedPlanet];
    lastFocusedElement = button;

    modalPlanetImage.src = info.image;
    modalPlanetImage.alt = info.name;
    modalPlanetName.textContent = info.name;
    modalPlanetFact.textContent = info.fact;
    modalDistance.textContent = info.distance;
    modalMoons.textContent = info.moons;
    modalTemperature.textContent = info.temperature;
    modalDay.textContent = info.day;
    modalScienceFact.textContent = info.scienceFact;
    modalAstrologyFact.textContent = info.astrologyFact;

    updateProgress(selectedPlanet);
    planetModal.classList.add("active");
    planetModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    closeButton.focus();
}

function closePlanetModal() {
    planetModal.classList.remove("active");
    planetModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

planetButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        openPlanetModal(button);
    });
});

closeButton.addEventListener("click", closePlanetModal);

planetModal.addEventListener("click", function (event) {
    if (event.target === planetModal) {
        closePlanetModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && planetModal.classList.contains("active")) {
        closePlanetModal();
    }

    // Keep keyboard focus inside the open dialog.
    if (event.key === "Tab" && planetModal.classList.contains("active")) {
        event.preventDefault();
        closeButton.focus();
    }
});

function showRandomFact() {
    let nextFactIndex;

    do {
        nextFactIndex = Math.floor(Math.random() * spaceFacts.length);
    } while (nextFactIndex === currentFactIndex && spaceFacts.length > 1);

    currentFactIndex = nextFactIndex;
    randomFact.textContent = spaceFacts[currentFactIndex];
}

newFactButton.addEventListener("click", showRandomFact);
showRandomFact();

// Reveal sections as they enter the viewport. Respect reduced-motion preferences.
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealSections = document.querySelectorAll(".reveal");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealSections.forEach(function (section) {
        section.classList.add("visible");
    });
} else {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealSections.forEach(function (section) {
        revealObserver.observe(section);
    });
}