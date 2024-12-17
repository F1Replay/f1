// Seznam tratí F1 pro rok 2024
const tracks = [
    "Bahrajn", "Saúdská Arábie", "Austrálie", "Japonsko", "Čína",
    "Miami", "Emilia Romagna", "Monako", "Španělsko", "Kanada",
    "Rakousko", "Velká Británie", "Maďarsko", "Belgie", "Nizozemsko",
    "Itálie", "Singapur", "USA", "Mexiko", "Brazílie", "Las Vegas",
    "Katar", "Abú Zabí"
];

// Dynamické generování tratí
const trackList = document.querySelector(".track-list");
tracks.forEach(track => {
    const trackDiv = document.createElement("div");
    trackDiv.className = "track";

    trackDiv.innerHTML = `
        <h2>${track}</h2>
        <button onclick="playVideo('${track.toLowerCase()}_qualy.mp4')">Kvalifikace</button>
        <button onclick="playVideo('${track.toLowerCase()}_sprint.mp4')">Sprint</button>
        <button onclick="playVideo('${track.toLowerCase()}_race.mp4')">Závod</button>
    `;

    trackList.appendChild(trackDiv);
});

// Funkce pro přehrávání videí
function playVideo(filename) {
    const videoPath = `videos/${filename}`;
    const videoPlayer = document.createElement("video");
    videoPlayer.src = videoPath;
    videoPlayer.controls = true;
    videoPlayer.style.width = "80%";

    // Vyčištění a zobrazení přehrávače
    trackList.innerHTML = "";
    trackList.appendChild(videoPlayer);
    videoPlayer.play();
}
