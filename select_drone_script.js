const drones = [
    { name: "Crop Analyser 1", latitude: 43.461833 ,longitude: 6.139694, temperature: 41, humidity: 21 },
    { name: "Spraying Drone 1", latitude:43.460167 ,longitude: 6.148361, temperature: 39, humidity: 22, tank: 40000},
    { name: "Crop Analyser 2",latitude: 43.466778 ,longitude: 6.146778, temperature: 35, humidity: 24 },
    { name: "Spraying Drone 2",latitude: 43.461667 ,longitude: 6.152306, temperature: 40, humidity: 25, tank: 25786},
    { name: "Crop Analyser 3", latitude: 43.469917 ,longitude: 6.151889, temperature: 39, humidity: 27 },
    { name: "Spraying Drone 3", latitude: 43.455111 ,longitude: 6.150306, temperature: 36, humidity: 28, tank: 12456}
];

let map, marker;

// Populate the list of drones
function populateDroneList() {
    const droneList = document.getElementById("drone-list");

    drones.forEach((drone, index) => {
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