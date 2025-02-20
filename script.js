// Liste de drones prédéfinis avec leurs données
const drones = [
    { name: "Crop Analyser 1", id: "CA", latitude: 46.21136335607866, longitude: -1.0540007933154585, humidity: 41, temperature: 21 , progressionMission : 50},
    { name: "Spraying Drone 1", id: "SD" , latitude: 46.21468459184598, longitude: -1.0492372620941983, humidity: 39, temperature: 22, tank: 40000, progressionMission : 100},
    { name: "Crop Analyser 2", id: "CA",latitude: 46.213123885767715, longitude: -1.0612723958994275, humidity: 35, temperature: 24, progressionMission : 2 },
    { name: "Spraying Drone 2" , id: "SD",latitude: 46.21293518604642, longitude: -1.0492439090964956, humidity: 40, temperature: 25, tank: 25786, progressionMission : 32},
    { name: "Crop Analyser 3", id: "CA", latitude: 46.21976497216588, longitude: -1.058556538536209, humidity: 39, temperature: 27, progressionMission : 82 },
    { name: "Spraying Drone 3", id: "SD", latitude: 46.21674423739498, longitude: -1.0650762680199144, humidity: 36, temperature: 28, tank: 12456, progressionMission : 25}
];

const champs = [
    { name: "Champ 1", latitude: 43.461833 ,longitude: 6.139694},
    { name: "Champ 2", latitude: 43.460167 ,longitude: 6.148361},
    { name: "Champ 3", latitude: 43.466778 ,longitude: 6.146778},
    { name: "Champ 4", latitude: 43.461667 ,longitude: 6.152306},
    { name: "Champ 5", latitude: 43.469917 ,longitude: 6.151889},
    { name: "Champ 6", latitude: 43.455111 ,longitude: 6.150306}
];

const champs1 = [
    { latitude: 46.21440624886372, longitude: -1.0509861785740087},
    { latitude: 46.21499353318045, longitude: -1.050540944063912},
    { latitude: 46.216206592386285, longitude: -1.0514522834517661},
    { latitude: 46.21874856507359, longitude: -1.050651146522187},
    { latitude: 46.2207092487575, longitude: -1.050912901781831},
    { latitude: 46.222098624790476, longitude: -1.0522790351868425},
    { latitude: 46.22311900469086, longitude: -1.0560774421215073},
    { latitude: 46.222281524498264, longitude: -1.056995738383948},
    { latitude:46.22168699944801, longitude:-1.060717868264874},
    { latitude: 46.218719684409905, longitude: -1.065691725081081},
    { latitude: 46.216476569213064, longitude: -1.0667630706999243},
    { latitude: 46.21303594758102, longitude: -1.0520940987242826}
];

const champs2 = [
    { latitude: 46.216476569213064, longitude: -1.0667630706999243},
    { latitude: 46.21409797848769, longitude: -1.05709199874125},
    { latitude: 46.21031269778707, longitude: -1.0586858172540468},
    { latitude: 46.21186496676211, longitude: -1.0646872326552475},
    { latitude: 46.21313125894602, longitude: -1.0677568089829974},
    { latitude: 46.21328103351373, longitude: -1.0693309508444286},
    { latitude: 46.21397543751875, longitude: -1.0689767689604575},
    { latitude: 46.21477875668802, longitude: -1.0695080417864142},
    { latitude: 46.21566375572804, longitude: -1.068720970933145}
];

const champs3 = [
    { latitude: 46.21409797848769, longitude: -1.05709199874125},
    { latitude: 46.21031269778707, longitude: -1.0586858172540468},
    { latitude: 46.20960463065998, longitude: -1.05547850339334},
    { latitude: 46.20854251292929, longitude: -1.0540027455434604},
    { latitude: 46.20754846106316, longitude: -1.0497328861644748},
    { latitude: 46.21151094430401, longitude: -1.0493787042805038},
    { latitude: 46.21303594758102, longitude: -1.0520940987242826}
];

const champs4 = [
    { latitude: 46.21247743837053, longitude: -1.0509263580887547},
    { latitude: 46.21388121810288, longitude: -1.0496249597048433},
    { latitude: 46.21307780138956, longitude: -1.047379409552212},
    { latitude: 46.21156805247484, longitude: -1.0493187483203934}
];

let map, marker, fieldMarker;

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

    // Draw a red line between every point listed in champs1 and link the first and last points
    const latlngs1 = champs1.map(point => [point.latitude, point.longitude]);
    latlngs1.push(latlngs1[0]); // Link the first and last points
    const polyline1 = L.polyline(latlngs1, { color: 'red' }).addTo(map);

    // Draw a blue line between every point listed in champs2 and link the first and last points
    const latlngs2 = champs2.map(point => [point.latitude, point.longitude]);
    latlngs2.push(latlngs2[0]); // Link the first and last points
    const polyline2 = L.polyline(latlngs2, { color: 'blue' }).addTo(map);

    // Draw a green line between every point listed in champs3 and link the first and last points
    const latlngs3 = champs3.map(point => [point.latitude, point.longitude]);
    latlngs3.push(latlngs3[0]); // Link the first and last points
    const polyline3 = L.polyline(latlngs3, { color: 'green' }).addTo(map);

    // Draw a yellow line between every point listed in champs4 and link the first and last points
    const latlngs4 = champs4.map(point => [point.latitude, point.longitude]);
    latlngs4.push(latlngs4[0]); // Link the first and last points
    const polyline4 = L.polyline(latlngs4, { color: 'yellow' }).addTo(map);

    // Zoom the map to the polyline
    map.fitBounds(polyline1.getBounds().extend(polyline2.getBounds()).extend(polyline3.getBounds()).extend(polyline4.getBounds()));
}

// Get the drone index from the query string
function getDroneIndexFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get("drone");
}

// Fonction pour afficher la liste des drones
function populateDroneList() {
    const droneList = document.getElementById("drone-list");

    // Sort drones by ID
    const sortedDrones = drones.sort((a, b) => a.id.localeCompare(b.id));

    sortedDrones.forEach((drone, index) => {
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

    // Display mission progression and remaining time
    const progressionElement = document.getElementById("progression");
    const remainingTimeElement = document.getElementById("remaining-time");
    const progressBarElement = document.getElementById("progress-bar");
    const remainingTime = ((100 - drone.progressionMission) / 100) * 45; // Remaining time in minutes
    const minutes = Math.floor(remainingTime);
    const seconds = Math.round((remainingTime - minutes) * 60);
    progressionElement.textContent = `${drone.progressionMission}%`;
    remainingTimeElement.textContent = `${minutes} minutes ${seconds} secondes`;
    progressBarElement.style.width = `${drone.progressionMission}%`;
    progressBarElement.querySelector("span").textContent = `${drone.progressionMission}%`; // Display percentage inside the progress bar

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
        const fieldLocation = [field.latitude, field.longitude];

        // Add or update the field marker
        if (fieldMarker) {
            fieldMarker.setLatLng(fieldLocation);
        } else {
            fieldMarker = L.marker(fieldLocation, { icon: L.icon({ iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png' }) }).addTo(map);
        }

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
