let map;
let currentMarker;
let markers = {}; // Store markers for all schools
const initialMapView = [14.871389, 120.462722];
const initialZoomLevel = 12;

function initMap() {
    map = L.map('map').setView(initialMapView, initialZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add markers for all schools
    const schoolCoordinates = {
        'Kataasan Elementary School': [14.87138563833667, 120.46311702132928],
        'Luacan Elementary School': [14.864871, 120.448727],
        'San Ramon Elementary School': [14.869406, 120.462788],
        'Dinalupihan Elementary School': [14.868442, 120.469059],
        'Dalao Elementary School': [14.896644398038891, 120.44886918249934],
        'Happy Valley Elementary School': [14.846875, 120.400921],
        'Colo Elementary School': [14.84791067665282, 120.41237564349694],
        'Layac Elementary School': [14.854665565647522, 120.47377787513796],
        'Magsaysay Elementary School': [14.846832001738328, 120.42028898830547],
        'Jose C. Payumo Elementary School': [14.867038957618753, 120.4339747945352],
        'Daang Bago Elementary School': [14.857376631882765, 120.4796381799686],
        'Bayan-Bayanan Elementary School': [14.89127025450671, 120.43524969215159],
        'Bangal Elementary School': [14.845210944268672, 120.34011573870171],



        'Maligaya Elementary School': [14.862531, 120.426610],
        'Naparing Elementary School': [14.846096, 120.407032],
        'Pag-Asa Elementary School': [14.85058, 120.41955],
        'Payangan Elementary School': [14.862813, 120.378695],
        'Pentor Elementary School': [14.87095, 120.47380],
        'Pinulot Elementary School': [14.849964, 120.389756],
        'Saguing Elementary School': [14.861774, 120.440554],


        'San Benito Elementary School': [14.847941, 120.424810],
        'San Simon Elementary School': [14.913620, 120.478486],
        'San Pablo Elementary School': [14.852609, 120.378833],
        'Sapang Balas Elementary School': [14.885716, 120.446960],
        'Santa Isabel Elementary School': [14.860015, 120.471733],
        'Santo Nino Elementary School': [14.876524, 120.458879],
        'Tucop Integrated School': [14.897273, 120.472482],
        'Tubo-Tubo Integrated School': [14.860007, 120.408932],


    };

    for (const schoolName in schoolCoordinates) {
        if (schoolCoordinates.hasOwnProperty(schoolName)) {
            const location = schoolCoordinates[schoolName];
            const marker = L.marker(location).addTo(map);
            markers[schoolName] = marker;

            // Add click event listener to each marker
            marker.on('click', function() {
                locateSchool(schoolName);
            });
        }
    }
}

function locateSchool(schoolName) {
    const schoolCoordinates = {
        'Kataasan Elementary School': [14.87138563833667, 120.46311702132928],
        'Luacan Elementary School': [14.864871, 120.448727],
        'San Ramon Elementary School': [14.869406, 120.462788],
        'Dinalupihan Elementary School': [14.868442, 120.469059],
        'Dalao Elementary School': [14.896644398038891, 120.44886918249934],
        'Happy Valley Elementary School': [14.846875, 120.400921],
        'Colo Elementary School': [14.84791067665282, 120.41237564349694],
        'Layac Elementary School': [14.854665565647522, 120.47377787513796],
        'Magsaysay Elementary School': [14.846832001738328, 120.42028898830547],
        'Jose C. Payumo Elementary School': [14.867038957618753, 120.4339747945352],
        'Daang Bago Elementary School': [14.857376631882765, 120.4796381799686],
        'Bayan-Bayanan Elementary School': [14.89127025450671, 120.43524969215159],
        'Bangal Elementary School': [14.845210944268672, 120.34011573870171],

        'Maligaya Elementary School': [14.862531, 120.426610],
        'Naparing Elementary School': [14.846096, 120.407032],
        'Pag-Asa Elementary School': [14.85058, 120.41955],
        'Payangan Elementary School': [14.862813, 120.378695],
        'Pentor Elementary School': [14.87095, 120.47380],
        'Pinulot Elementary School': [14.849964, 120.389756],
        'Saguing Elementary School': [14.861774, 120.440554],


        'San Benito Elementary School': [14.847941, 120.424810],
        'San Simon Elementary School': [14.913620, 120.478486],
        'San Pablo Elementary School': [14.852609, 120.378833],
        'Sapang Balas Elementary School': [14.885716, 120.446960],
        'Santa Isabel Elementary School': [14.860015, 120.471733],
        'Santo Nino Elementary School': [14.876524, 120.458879],
        'Tucop Integrated School': [14.897273, 120.472482],
        'Tubo-Tubo Integrated School': [14.860007, 120.408932],
    };

    const schoolDetails = {
        'Kataasan Elementary School': {
            name: 'Kataasan Elementary School',
            distanceFromNearestFault: 'Approximately 43.5 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 71.3 KM',
            numberOfBuildings: 20,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 15 },
                { type: 'Moderately Susceptible', count: 2 },
                { type: 'Low Susceptible', count: 3 }
            ],
            image: './iimg/schools/Kataasan ES-Model.png'
        },
        'Luacan Elementary School': {
            name: 'Luacan Elementary School',
            distanceFromNearestFault: 'Approximately 43.2 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 72.5 km',
            numberOfBuildings: 20,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 15 },
                { type: 'Moderately Susceptible', count: 2 },
                { type: 'Low Susceptible', count: 3 }
            ],
            image: './iimg/schools/Luacan or Luakan ES-Model.png'
        },
        'Saguing Elementary School': { 
            name: 'Saguing Elementary School',
            distanceFromNearestFault: 'Approximately 43.1 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 73.2 km',
            numberOfBuildings: 7,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 1 },
                { type: 'Moderately Susceptible', count: 0 },
                { type: 'Low Susceptible', count: 6 }
            ],
            image: './iimg/schools/Saguing ES-Model.png'
        },
        'San Ramon Elementary School': { /* Add relevant details */ },
        'Dinalupihan Elementary School': { 
            name: 'Dinalupihan Elementary School',
            distanceFromNearestFault: 'Approximately 44.2 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 70.6 km',
            numberOfBuildings: 21,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 9 },
                { type: 'Moderately Susceptible', count: 8 },
                { type: 'Low Susceptible', count: 4 }
            ],
            image: './iimg/schools/Dinalupihan ES-Model.png'
        },
        'Dalao Elementary School': {
            name: 'Dalao Elementary School',
            distanceFromNearestFault: 'Approximately 40.4 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 73.8 km',
            numberOfBuildings: 6,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 1 },
                { type: 'Moderately Susceptible', count: 0 },
                { type: 'Low Susceptible', count: 5 }
            ],
            image: './iimg/schools/Dalao ES-Model.png'
        },
        'Happy Valley Elementary School': {
            name: 'Happy Valley Elementary School',
            distanceFromNearestFault: 'Approximately 42.4 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 76.7 km',
            numberOfBuildings: 5,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 2 },
                { type: 'Moderately Susceptible', count: 1 },
                { type: 'Low Susceptible', count: 2 }
            ],
            image: './iimg/schools/Happy Valley ES-Model.png'
        },
        'Colo Elementary School': {
            name: 'Colo Valley Elementary School',
            distanceFromNearestFault: 'Approximately 42.8 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 75.6 km',
            numberOfBuildings: 9,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 4 },
                { type: 'Moderately Susceptible', count: 2 },
                { type: 'Low Susceptible', count: 3 }
            ],
            image: './iimg/schools/Colo ES-Model.png'
        },
        'Layac Elementary School': { 
            name: 'Layac Elementary School',
            distanceFromNearestFault: 'Approximately 45.8 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 69.6 km',
            numberOfBuildings: 4,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 1 },
                { type: 'Moderately Susceptible', count: 2 },
                { type: 'Low Susceptible', count: 1 }
            ],
            image: './iimg/schools/Layac ES-Model.png'
        },
        'Magsaysay Elementary School': {
            name: 'Magsaysay Elementary School',
            distanceFromNearestFault: 'Approximately 43.4 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 74.7 KM',
            numberOfBuildings: 20,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 15 },
                { type: 'Moderately Susceptible', count: 2 },
                { type: 'Low Susceptible', count: 3 }
            ],
            image: './iimg/schools/Magsaysay ES-Model.png'
        },
        'Jose C. Payumo Elementary School': { 
            name: 'Jose C. Payumo Elementary School',
            distanceFromNearestFault: 'Approximately 42.2 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 70.6 km',
            numberOfBuildings: 11,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 1 },
                { type: 'Moderately Susceptible', count: 1 },
                { type: 'Low Susceptible', count: 9 }
            ],
            image: './iimg/schools/JC Payumo ES-Model.png'
        },
        'Daang Bago Elementary School': {
            name: 'Daang Bago Elementary School',
            distanceFromNearestFault: 'Approximately 45.9 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 69.1 km',
            numberOfBuildings: 20,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 15 },
                { type: 'Moderately Susceptible', count: 2 },
                { type: 'Low Susceptible', count: 3 }
            ],
            image: './iimg/schools/Daang Bago ES-Model.png'
        },
        'Bayan-Bayanan Elementary School': {
            name: 'Bayan-Bayanan Elementary School',
            distanceFromNearestFault: 'Approximately 40 km south of the Iba Fault',
            distanceFromWestValley: 'Approximately 75.5 km',
            numberOfBuildings: 3,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 0 },
                { type: 'Moderately Susceptible', count: 2 },
                { type: 'Low Susceptible', count: 1 }
            ],
            image: './iimg/schools/bayan bayanan-Model.png'
        },
        'Bangal Elementary School': {
            name: 'Bangal Elementary School',
            distanceFromNearestFault: 'Approximately 40 km south of the Iba Fault',
            distanceFromWestValley: 'Approximately 82.9 km',
            numberOfBuildings: 20,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 15 },
                { type: 'Moderately Susceptible', count: 2 },
                { type: 'Low Susceptible', count: 3 }
            ],
            image: './iimg/schools/Bangal ES-Model.png'
        },
        'Maligaya Elementary School': {
            name: 'Maligaya Elementary School',
            distanceFromNearestFault: 'Approximately 42.2 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 74.7 km',
            numberOfBuildings: 5,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 1 },
                { type: 'Moderately Susceptible', count: 0 },
                { type: 'Low Susceptible', count: 4 }
            ],
            image: './iimg/schools/Maligaya ES-Model.png'
        },
        'Naparing Elementary School': {
            name: 'Naparing Elementary School',
            distanceFromNearestFault: 'Approximately 42.8 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 76.1 km',
            numberOfBuildings: 7,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 0 },
                { type: 'Moderately Susceptible', count: 4 },
                { type: 'Low Susceptible', count: 3 }
            ],
            image: './iimg/schools/Naparing ES-Model.png'
        },
        'Pag-asa Elementary School': {
            name: 'Pag-asa Elementary School',
            distanceFromNearestFault: 'Approximately 42.6 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 74.9 km',
            numberOfBuildings: 6,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 0 },
                { type: 'Moderately Susceptible', count: 1 },
                { type: 'Low Susceptible', count: 5 }
            ],
            image: './iimg/schools/Pag-asa ES.png'
        },
        'Payangan Elementary School': {
            name: 'Payangan Elementary School',
            distanceFromNearestFault: 'Approximately 39.7 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 79.5 km',
            numberOfBuildings: 3,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 0 },
                { type: 'Moderately Susceptible', count: 0 },
                { type: 'Low Susceptible', count: 3 }
            ],
            image: './iimg/schools/Payangan ES-Model.png'
        },
        'Pentor Elementary School': {
            name: 'Pentor Elementary School',
            distanceFromNearestFault: 'Approximately 44.5 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 70.2 km',
            numberOfBuildings: 2,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 0 },
                { type: 'Moderately Susceptible', count: 1 },
                { type: 'Low Susceptible', count: 1 }
            ],
            image: './iimg/schools/Bangal ES-Model.png'
        },
        'Pinulot Elementary School': {
            name: 'Pinulot Elementary School',
            distanceFromNearestFault: 'Approximately 40.1 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 78 km',
            numberOfBuildings: 12,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 1 },
                { type: 'Moderately Susceptible', count: 4 },
                { type: 'Low Susceptible', count: 7 }
            ],
            image: './iimg/schools/Pinulot ES-Model.png'
        },






















        'San Benito Elementary School': {
            name: 'San Benito Elementary School',
            distanceFromNearestFault: 'Approximately 43.5 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 74.3 km',
            numberOfBuildings: 7,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 6 },
                { type: 'Moderately Susceptible', count: 1 },
                { type: 'Low Susceptible', count: 0 }
            ],
            image: './iimg/schools/San Benito ES-Model.png'
        },
        'San Pablo Elementary School': {
            name: 'San Pablo Elementary School',
            distanceFromNearestFault: 'Approximately 40.8 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 79.1 km',
            numberOfBuildings: 11,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 1 },
                { type: 'Moderately Susceptible', count: 3 },
                { type: 'Low Susceptible', count: 7 }
            ],
            image: './iimg/schools/San Pablo-Model.png'
        },
        'San Simon Elementary School': {
            name: 'San Simon Elementary School',
            distanceFromNearestFault: 'Approximately 41 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 71.5 km',
            numberOfBuildings: 6,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 0 },
                { type: 'Moderately Susceptible', count: 2 },
                { type: 'Low Susceptible', count: 4 }
            ],
            image: './iimg/schools/San Simon ES-Model.png'
        },
        'Sapang Balas Elementary School': {
            name: 'Sapang Balas Elementary School',
            distanceFromNearestFault: 'Approximately 41.3 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 73.5 km',
            numberOfBuildings: 4,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 0 },
                { type: 'Moderately Susceptible', count: 2 },
                { type: 'Low Susceptible', count: 2 }
            ],
            image: './iimg/schools/SAPANG BALAS ES-Model.png'
        },
        'Santa Isabel Elementary School': {
            name: 'Santa Isabel Elementary School',
            distanceFromNearestFault: 'Approximately 45.1 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 70 km',
            numberOfBuildings: 5,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 0 },
                { type: 'Moderately Susceptible', count: 5 },
                { type: 'Low Susceptible', count: 2 }
            ],
            image: './iimg/schools/Sta.Isabel ES-Model.png'
        },
        'Santo Nino Elementary School': {
            name: 'Santo Nino Elementary School',
            distanceFromNearestFault: 'Approximately 42.9 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 71.9 km',
            numberOfBuildings: 2,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 1 },
                { type: 'Moderately Susceptible', count: 1 },
                { type: 'Low Susceptible', count: 0 }
            ],
            image: './iimg/schools/STO.NINO-Model.png'
        },
        'Tubo-Tubo Integrated School': {
            name: 'Tubo-Tubo Integrated School',
            distanceFromNearestFault: 'Approximately 41.5 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 76.3 km',
            numberOfBuildings: 6,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 0 },
                { type: 'Moderately Susceptible', count: 2 },
                { type: 'Low Susceptible', count: 4 }
            ],
            image: './iimg/schools/Tubo-Tubo Es-Model.png'
        },
        'Tucop Integrated School': {
            name: 'Tucop Integrated School',
            distanceFromNearestFault: 'Approximately 42 km southeast of the Iba Fault',
            distanceFromWestValley: 'Approximately 71.4 km',
            numberOfBuildings: 7,
            vulnerabilityLevels: [
                { type: 'Highly Susceptible', count: 1 },
                { type: 'Moderately Susceptible', count: 1 },
                { type: 'Low Susceptible', count: 5 }
            ],
            image: './iimg/schools/Tucop IS-Model.png'
        },

    };

    const location = schoolCoordinates[schoolName];
    const details = schoolDetails[schoolName];

    if (location && details) {
        map.setView(location, 17);

        // Hide all markers except the selected school's marker
        for (const markerName in markers) {
            if (markers.hasOwnProperty(markerName)) {
                if (markerName === schoolName) {
                    markers[markerName].addTo(map);
                } else {
                    map.removeLayer(markers[markerName]);
                }
            }
        }

        // Create the table content
        let contentString = `
            <h2>${details.name}</h2>
            <span class="close-btn" onclick="closeCard()">&#10006;</span>
            <img src="${details.image}" alt="${details.name}" style="width:100%; height:auto; margin-bottom:10px;">
            <table>
                <tr>
                    <th colspan="2">General Information</th>
                </tr>
                <tr>
                    <td>Distance from Nearest Fault</td>
                    <td>${details.distanceFromNearestFault}</td>
                </tr>
                <tr>
                    <td>Distance from West Valley</td>
                    <td>${details.distanceFromWestValley}</td>
                </tr>
                <tr>
                    <td>Number of Buildings</td>
                    <td>${details.numberOfBuildings}</td>
                </tr>
                <tr>
                    <th colspan="2">Vulnerability Levels</th>
                </tr>
                ${details.vulnerabilityLevels.map(level => `
                <tr>
                    <td>${level.type} Buildings</td>
                    <td>${level.count}</td>
                </tr>`).join('')}
            </table>
            <button id="printBtn" class="print-btn" style="display: none;" onclick="printCard()">VIEW COMPLETE ASSESSMENT REPORT</button>
        `;

        const schoolDetailsElement = document.getElementById('schoolDetails');
        schoolDetailsElement.innerHTML = contentString;
        schoolDetailsElement.style.display = 'block';

        // Show the print button
    document.getElementById('printBtn').style.display = 'block';

    } else {
        alert('Details not available for ' + schoolName);
    }
}

function closeCard() {
    // Show all markers again
    for (const markerName in markers) {
        if (markers.hasOwnProperty(markerName)) {
            markers[markerName].addTo(map);
        }
    }

   // Reset the map view to the initial view
    map.setView(initialMapView, initialZoomLevel);

    // Hide the card
    const schoolDetailsElement = document.getElementById('schoolDetails');
    schoolDetailsElement.style.display = 'none';
}

function printCard() {
    const schoolDetailsElement = document.getElementById('schoolDetails');
    const tableContent = schoolDetailsElement.innerHTML;

    // Create a new window to print the content
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>School Details</title>');
    printWindow.document.write('<style>@media print {.close-btn, .print-btn {display: none;}}</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(tableContent);
    printWindow.document.write('</body></html>');

    printWindow.document.close(); // Necessary for IE >= 10
    printWindow.print();
}


document.addEventListener('DOMContentLoaded', function () {
    initMap();
});
