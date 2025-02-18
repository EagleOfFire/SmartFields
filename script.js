// Liste de drones prédéfinis avec leurs données
const drones = [
    { name: "Crop Analyser 1", latitude: 43.461833 ,longitude: 6.139694, humidity: 41, temperature: 21 },
    { name: "Spraying Drone 1", latitude:43.460167 ,longitude: 6.148361, humidity: 39, temperature: 22, tank: 40000},
    { name: "Crop Analyser 2",latitude: 43.466778 ,longitude: 6.146778, humidity: 35, temperature: 24 },
    { name: "Spraying Drone 2",latitude: 43.461667 ,longitude: 6.152306, humidity: 40, temperature: 25, tank: 25786},
    { name: "Crop Analyser 3", latitude: 43.469917 ,longitude: 6.151889, humidity: 39, temperature: 27 },
    { name: "Spraying Drone 3", latitude: 43.455111 ,longitude: 6.150306, humidity: 36, temperature: 28, tank: 12456}
];

const champs = [
    { name: "Champ 1", latitude: 43.461833 ,longitude: 6.139694},
    { name: "Champ 2", latitude: 43.460167 ,longitude: 6.148361},
    { name: "Champ 3", latitude: 43.466778 ,longitude: 6.146778},
    { name: "Champ 4", latitude: 43.461667 ,longitude: 6.152306},
    { name: "Champ 5", latitude: 43.469917 ,longitude: 6.151889},
    { name: "Champ 6", latitude: 43.455111 ,longitude: 6.150306}
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

// Get the drone index from the query string
function getDroneIndexFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get("drone");
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
    if (index === null || isNaN(index) || index >= drones.length) {
        document.getElementById("drone-name").textContent = "Drone introuvable";
        return;
    }

    const drone = drones[index];
    document.getElementById("drone-name").textContent = drone.name;
    document.getElementById("temperature").textContent = drone.temperature;
    document.getElementById("humidity").textContent = drone.humidity;

    // Display tank information if available
    const tankElement = document.getElementById("tank");
    const tankValueElement = document.getElementById("tank-value");
    if (drone.tank !== undefined) {
        tankElement.style.display = "block";
        tankValueElement.textContent = drone.tank;
    } else {
        tankElement.style.display = "none";
    }

    // Update map location
    const newLocation = [drone.latitude, drone.longitude];
    map.setView(newLocation, 15);
    marker.setLatLng(newLocation);
}

// Function to call the drone back
function callDroneBack() {
    alert("Le drone est rappelé à la base.");
}

// Function to select the target field
function selectTargetField(fieldIndex) {
    const field = champs[fieldIndex];
    const droneIndex = getDroneIndexFromQuery();
    const drone = drones[droneIndex];

    if (drone.latitude === field.latitude && drone.longitude === field.longitude) {
        alert("Le drone est déjà à cet endroit.");
    } else {
        const newLocation = [field.latitude, field.longitude];
        map.setView(newLocation, 15);
        marker.setLatLng(newLocation);
        alert(`Le drone se dirige vers ${field.name}.`);
    }
}

// Function to populate the field buttons
function populateFieldButtons() {
    const controlZone = document.querySelector(".control-drone");

    champs.forEach((field, index) => {
        const button = document.createElement("button");
        button.textContent = field.name;
        button.addEventListener("click", () => selectTargetField(index));
        controlZone.appendChild(button);
    });
}

// Charger la liste de drones et initialiser la carte au chargement
document.addEventListener("DOMContentLoaded", () => {
    populateDroneList();
    initMap();
    const droneIndex = getDroneIndexFromQuery();
    displayDroneData(droneIndex);
    populateFieldButtons();
});
