// Data závodů
const raceData = {
    2024: [
        { name: "Závod 1", video: "video2024_1.mp4" },
        { name: "Závod 2", video: "video2024_2.mp4" }
    ],
    2025: [
        { name: "Závod 1", video: "video2025_1.mp4" },
        { name: "Závod 2", video: "video2025_2.mp4" }
    ],
    // Další roky...
};

// Načtení závodů podle roku
function loadRaces(year) {
    const raceList = document.getElementById("race-list");
    raceList.innerHTML = ""; // Vyčištění obsahu

    if (!raceData[year] || raceData[year].length === 0) {
        raceList.innerHTML = `<p>Žádné závody pro rok ${year}.</p>`;
        return;
    }

    raceData[year].forEach(race => {
        const raceDiv = document.createElement("div");
        raceDiv.className = "race";
        raceDiv.innerHTML = `
            <h3>${race.name}</h3>
            <video controls width="600">
                <source src="${race.video}" type="video/mp4">
                Váš prohlížeč nepodporuje přehrávání videa.
            </video>
        `;
        raceList.appendChild(raceDiv);
    });
}
