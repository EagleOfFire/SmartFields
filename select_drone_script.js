const drones = [
    { name: "Crop Analyser 1", id: "CA", latitude: 46.21136335607866, longitude: -1.0540007933154585, humidity: 41, temperature: 21 , progressionMission : 50},
    { name: "Spraying Drone 1", id: "SD" , latitude: 46.21468459184598, longitude: -1.0492372620941983, humidity: 39, temperature: 22, tank: 40000, progressionMission : 100},
    { name: "Crop Analyser 2", id: "CA",latitude: 46.213123885767715, longitude: -1.0612723958994275, humidity: 35, temperature: 24, progressionMission : 2 },
    { name: "Spraying Drone 2" , id: "SD",latitude: 46.21293518604642, longitude: -1.0492439090964956, humidity: 40, temperature: 25, tank: 25786, progressionMission : 32},
    { name: "Crop Analyser 3", id: "CA", latitude: 46.21976497216588, longitude: -1.058556538536209, humidity: 39, temperature: 27, progressionMission : 82 },
    { name: "Spraying Drone 3", id: "SD", latitude: 46.21674423739498, longitude: -1.0650762680199144, humidity: 36, temperature: 28, tank: 12456, progressionMission : 25}
];


let map, marker;

// Populate the list of drones
function populateDroneList() {
    const droneList = document.getElementById("drone-list");

    // Sort drones by ID
    const sortedDrones = drones.sort((a, b) => a.id.localeCompare(b.id));

    sortedDrones.forEach((drone, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = drone.name;
        listItem.classList.add("drone-item");
        listItem.dataset.index = index; // Store the index in a data attribute
        listItem.addEventListener("click", () => navigateToDashboard(index));
        droneList.appendChild(listItem);
    });
}

// Navigate to the dashboard page with the selected drone index
function navigateToDashboard(index) {
    window.location.href = `dashboard.html?drone=${index}`;
}

document.addEventListener("DOMContentLoaded", () => {
    populateDroneList();
});