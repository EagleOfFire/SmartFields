// Liste de drones prédéfinis avec leurs données
const drones = [
    { name: "Crop Analyser 1", latitude: 43.461833 ,longitude: 6.139694, temperature: 41, humidity: 21 },
    { name: "Spraying Drone 1", latitude:43.460167 ,longitude: 6.148361, temperature: 39, humidity: 22, tank: 40000},
    { name: "Crop Analyser 2",latitude: 43.466778 ,longitude: 6.146778, temperature: 35, humidity: 24 },
    { name: "Spraying Drone 2",latitude: 43.461667 ,longitude: 6.152306, temperature: 40, humidity: 25, tank: 25786},
    { name: "Crop Analyser 3", latitude: 43.469917 ,longitude: 6.151889, temperature: 39, humidity: 27 },
    { name: "Spraying Drone 3", latitude: 43.455111 ,longitude: 6.150306, temperature: 36, humidity: 28, tank: 12456}
];

let map, marker;

// Fonction pour initialiser la carte Leaflet
function initMap() {
    // Par défaut, la carte sera centrée sur Paris
    const defaultLocation = [48.8566, 2.3522]; // Latitude et longitude de Paris

    // Initialisation de la carte
    map = L.map('map').setView(defaultLocation, 8);

    // Ajouter des tuiles de carte (OpenStreetMap via Leaflet)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Ajouter un marqueur par défaut
    marker = L.marker(defaultLocation).addTo(map);
}

// Fonction pour afficher la liste des drones
function populateDroneList() {
    const droneList = document.getElementById("drone-list");

    drones.forEach((drone, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = drone.name;
        listItem.classList.add("drone-item");
        listItem.dataset.index = index; // Stocker l'index du drone dans l'attribut data
        listItem.addEventListener("click", () => displayDroneData(index));
        droneList.appendChild(listItem);
    });
}

// Fonction pour afficher les données d'un drone sélectionné
function displayDroneData(index) {
    const drone = drones[index];

    document.getElementById("drone-name").textContent = drone.name;
    document.getElementById("temperature").textContent = drone.temperature;
    document.getElementById("humidity").textContent = drone.humidity;

    const tankElement = document.getElementById("tank");
    const tankValueElement = document.getElementById("tank-value");
    if (drone.tank !== undefined) {
        tankElement.style.display = "block"; // Afficher l'élément
        tankValueElement.textContent = drone.tank; // Mettre à jour la valeur
    } else {
        tankElement.style.display = "none"; // Masquer l'élément si pas de réservoir
    }

    // Mise à jour de la position sur la carte
    const newLocation = [drone.latitude, drone.longitude];
    map.setView(newLocation, 15); // Recentrer la carte sur le drone sélectionné
    marker.setLatLng(newLocation); // Déplacer le marqueur
}

// Charger la liste de drones et initialiser la carte au chargement
document.addEventListener("DOMContentLoaded", () => {
    populateDroneList();
    initMap();
});
