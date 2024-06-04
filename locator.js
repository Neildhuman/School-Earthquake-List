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
        'Saguing Elementary School': [14.861774, 120.440554],
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
        'Saguing Elementary School': [14.861774, 120.440554],
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
            buildings: [
                { id: 'Building 1', rvs: 2, hazardLevel: 'HIGH' },
                { id: 'Building 2', rvs: 3.1, hazardLevel: 'LOW' },
                { id: 'Building 3', rvs: 0.2, hazardLevel: 'HIGH' },
                { id: 'Building 4', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'Building 5', rvs: 2.3, hazardLevel: 'MEDIUM' },
                { id: 'Building 6', rvs: 2, hazardLevel: 'HIGH' },
                { id: 'Building 7', rvs: 1, hazardLevel: 'HIGH' },
                { id: 'Building 8', rvs: 0.5, hazardLevel: 'HIGH' },
                { id: 'Building 9', rvs: 3, hazardLevel: 'LOW' },
                { id: 'Building 10', rvs: 1.1, hazardLevel: 'HIGH' },
                { id: 'Building 11', rvs: 1.2, hazardLevel: 'HIGH' },
                { id: 'Building 12', rvs: 1.3, hazardLevel: 'HIGH' },
                { id: 'Building 13', rvs: 1.4, hazardLevel: 'HIGH' },
                { id: 'Building 14', rvs: 1.5, hazardLevel: 'HIGH' },
                { id: 'Building 15', rvs: 1.6, hazardLevel: 'HIGH' },
                { id: 'Building 16', rvs: 1.7, hazardLevel: 'HIGH' },
                { id: 'Building 17', rvs: 1.8, hazardLevel: 'HIGH' },
                { id: 'Building 18', rvs: 1.9, hazardLevel: 'HIGH' },
                { id: 'Building 19', rvs: 2, hazardLevel: 'HIGH' },
                { id: 'Building 20', rvs: 2.1, hazardLevel: 'MEDIUM' }
            ]
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
            buildings: [
                { id: 'Building 1', rvs: 2, hazardLevel: 'HIGH' },
                { id: 'Building 2', rvs: 3.1, hazardLevel: 'LOW' },
                { id: 'Building 3', rvs: 0.2, hazardLevel: 'HIGH' },
                { id: 'Building 4', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'Building 5', rvs: 2.3, hazardLevel: 'MEDIUM' },
                { id: 'Building 6', rvs: 2, hazardLevel: 'HIGH' },
                { id: 'Building 7', rvs: 1, hazardLevel: 'HIGH' },
                { id: 'Building 8', rvs: 0.5, hazardLevel: 'HIGH' },
                { id: 'Building 9', rvs: 3, hazardLevel: 'LOW' },
                { id: 'Building 10', rvs: 1.1, hazardLevel: 'HIGH' },
                { id: 'Building 11', rvs: 1.2, hazardLevel: 'HIGH' },
                { id: 'Building 12', rvs: 1.3, hazardLevel: 'HIGH' },
                { id: 'Building 13', rvs: 1.4, hazardLevel: 'HIGH' },
                { id: 'Building 14', rvs: 1.5, hazardLevel: 'HIGH' },
                { id: 'Building 15', rvs: 1.6, hazardLevel: 'HIGH' },
                { id: 'Building 16', rvs: 1.7, hazardLevel: 'HIGH' },
                { id: 'Building 17', rvs: 1.8, hazardLevel: 'HIGH' },
                { id: 'Building 18', rvs: 1.9, hazardLevel: 'HIGH' },
                { id: 'Building 19', rvs: 2, hazardLevel: 'HIGH' },
                { id: 'Building 20', rvs: 2.1, hazardLevel: 'MEDIUM' }
            ]
        },
        'Saguing Elementary School': { /* Add relevant details */ },
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
            buildings: [
                { id: 'CAB TYPE BLDG', rvs: 1.1, hazardLevel: 'HIGH' },
                { id: 'FVR TYPE BLDG', rvs: 2.3, hazardLevel: 'MEDIUM' },
                { id: 'US AID TYPE BLDG', rvs: 2.8, hazardLevel: 'MEDIUM' },
                { id: 'PR-CHINESE TYPE BLDG 4', rvs: 0.5, hazardLevel: 'HIGH' },
                { id: 'FFCCCI BLDG TYPE (5)', rvs: 2.8, hazardLevel: 'MEDIUM' },
                { id: 'PPP TYPE BLDG', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'SPECIAL BLDG TYPE', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'CAB TPYE BLDG 3', rvs: 1.1, hazardLevel: 'HIGH' },
                { id: 'TET GARCIA BLDG', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'CAB TPYE BLDG 3', rvs: 2.8, hazardLevel: 'MEDIUM' },
                { id: 'GERMAN GRANT BLDG', rvs: 0.6, hazardLevel: 'HIGH' },
                { id: 'GERMAN GRANT BLDG (12)', rvs: 2.3, hazardLevel: 'MEDIUM' },
                { id: 'MARCOS TYPE BLDG (13)', rvs: 2.8, hazardLevel: 'MEDIUM' },
                { id: 'MARCOS TYPE BLDG (14)', rvs: 1, hazardLevel: 'HIGH' },
                { id: 'ESP TYPE BLDG (15)', rvs: 1, hazardLevel: 'HIGH' },
                { id: 'GERMAN GRANT BLDG (16)', rvs: 1.1, hazardLevel: 'HIGH' },
                { id: 'SPECIAL BLDG TYPE (17)', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BUILDING 18 - BAYANIHAN BLDG', rvs: 0.6, hazardLevel: 'HIGH' },
                { id: 'BUILDING 19 - ALS BLDG', rvs: 2.8, hazardLevel: 'MEDIUM' },
                { id: 'BUILDING 20 - SPECIAL BLDG TYPE', rvs: 2.8, hazardLevel: 'MEDIUM' },
                { id: 'BLDG 21 - US AID TYPE #2', rvs: 1, hazardLevel: 'HIGH' }

            ]
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
            buildings: [
                { id: 'BUILDING 1', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BUILDING 2', rvs: 1.5, hazardLevel: 'HIGH' },
                { id: 'BUILDING 3', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BUILDING 4', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BUILDING 6', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BUILDING 7', rvs: 3.4, hazardLevel: 'LOW' }
            ]
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
            buildings: [
                { id: 'Building 1', rvs: 0.9, hazardLevel: 'HIGH' },
                { id: 'Building 2', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'Building 3', rvs: 1.5, hazardLevel: 'HIGH' },
                { id: 'Building 4', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'Building 5', rvs: 2.8, hazardLevel: 'MEDIUM' }
            ]
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
            buildings: [
                { id: 'BUILDING 1', rvs: 2.8, hazardLevel: 'MEDIUM' },
                { id: 'BUILDING 16', rvs: 2.8, hazardLevel: 'MEDIUM' },
                { id: 'BUILDING 12', rvs: 1.5, hazardLevel: 'HIGH' },
                { id: 'BUILDING 17', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BUILDING 10', rvs: 1.5, hazardLevel: 'HIGH' },
                { id: 'BUILDING 9', rvs: 1.5, hazardLevel: 'HIGH' },
                { id: 'BUILDING 6', rvs: 1.5, hazardLevel: 'HIGH' },
                { id: 'BUILDING 5', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BUILDING 14', rvs: 3.4, hazardLevel: 'LOW' }
            ]
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
            buildings: [
                { id: 'BLDG 4', rvs: 1.5, hazardLevel: 'HIGH' },
                { id: 'BLDG 3', rvs: 2.3, hazardLevel: 'MEDIUM' },
                { id: 'BLDG 1', rvs: 2.8, hazardLevel: 'MEDIUM' },
                { id: 'BLDG 2', rvs: 3.4, hazardLevel: 'LOW' },
            ]
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
            buildings: [
                { id: 'BUILDING 1', rvs: 2, hazardLevel: 'HIGH' },
                { id: 'BUILDING 2', rvs: 3.1, hazardLevel: 'LOW' },
                { id: 'BUILDING 3', rvs: 0.2, hazardLevel: 'HIGH' },
                { id: 'BUILDING 4', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BUILDING 5', rvs: 2.3, hazardLevel: 'MEDIUM' },
                { id: 'BUILDING 6', rvs: 2, hazardLevel: 'HIGH' },
                { id: 'BUILDING 7', rvs: 1, hazardLevel: 'HIGH' },
                { id: 'BUILDING 8', rvs: 0.5, hazardLevel: 'HIGH' },
                { id: 'BUILDING 9', rvs: 3, hazardLevel: 'LOW' },
                { id: 'BUILDING 10', rvs: 1.1, hazardLevel: 'HIGH' },
                { id: 'BUILDING 11', rvs: 1.2, hazardLevel: 'HIGH' },
                { id: 'BUILDING 12', rvs: 1.3, hazardLevel: 'HIGH' },
                { id: 'BUILDING 13', rvs: 1.4, hazardLevel: 'HIGH' },
                { id: 'BUILDING 14', rvs: 1.5, hazardLevel: 'HIGH' },
                { id: 'BUILDING 15', rvs: 1.6, hazardLevel: 'HIGH' },
                { id: 'BUILDING 16', rvs: 1.7, hazardLevel: 'HIGH' },
                { id: 'BUILDING 17', rvs: 1.8, hazardLevel: 'HIGH' },
                { id: 'BUILDING 18', rvs: 1.9, hazardLevel: 'HIGH' },
                { id: 'BUILDING 19', rvs: 2, hazardLevel: 'HIGH' },
                { id: 'BUILDING 20', rvs: 2.1, hazardLevel: 'MEDIUM' }
            ]
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
            buildings: [
                { id: 'BUILDING 1', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BUILDING 2', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BUILDING 3', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BUILDING 10', rvs: 2.8, hazardLevel: 'MEDIUM' },
                { id: 'PRE-ELEM BLDG', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BLDG 4', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BLDG 5', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BLDG 6', rvs: 3.5, hazardLevel: 'LOW' },
                { id: 'BLDG 9', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BLDG 8', rvs: 1.5, hazardLevel: 'HIGH' },
                { id: 'BLDG 7', rvs: 3.4, hazardLevel: 'LOW' },
            ]
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
            buildings: [
                { id: 'BUILDING 1', rvs: 2, hazardLevel: 'HIGH' },
                { id: 'BUILDING 2', rvs: 3.1, hazardLevel: 'LOW' },
                { id: 'BUILDING 3', rvs: 0.2, hazardLevel: 'HIGH' },
                { id: 'BUILDING 4', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BUILDING 5', rvs: 2.3, hazardLevel: 'MEDIUM' },
                { id: 'BUILDING 6', rvs: 2, hazardLevel: 'HIGH' },
                { id: 'BUILDING 7', rvs: 1, hazardLevel: 'HIGH' },
                { id: 'BUILDING 8', rvs: 0.5, hazardLevel: 'HIGH' },
                { id: 'BUILDING 9', rvs: 3, hazardLevel: 'LOW' },
                { id: 'BUILDING 10', rvs: 1.1, hazardLevel: 'HIGH' },
                { id: 'BUILDING 11', rvs: 1.2, hazardLevel: 'HIGH' },
                { id: 'BUILDING 12', rvs: 1.3, hazardLevel: 'HIGH' },
                { id: 'BUILDING 13', rvs: 1.4, hazardLevel: 'HIGH' },
                { id: 'BUILDING 14', rvs: 1.5, hazardLevel: 'HIGH' },
                { id: 'BUILDING 15', rvs: 1.6, hazardLevel: 'HIGH' },
                { id: 'BUILDING 16', rvs: 1.7, hazardLevel: 'HIGH' },
                { id: 'BUILDING 17', rvs: 1.8, hazardLevel: 'HIGH' },
                { id: 'BUILDING 18', rvs: 1.9, hazardLevel: 'HIGH' },
                { id: 'BUILDING 19', rvs: 2, hazardLevel: 'HIGH' },
                { id: 'BUILDING 20', rvs: 2.1, hazardLevel: 'MEDIUM' }
            ]
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
            buildings: [
                { id: 'BUILDING 1', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BUILDING 2', rvs: 2.9, hazardLevel: 'MEDIUM' },
                { id: 'BUILDING 3', rvs: 2.9, hazardLevel: 'MEDIUM' },
            ]
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
            buildings: [
                { id: 'BUILDING 1', rvs: 2, hazardLevel: 'HIGH' },
                { id: 'BUILDING 2', rvs: 3.1, hazardLevel: 'LOW' },
                { id: 'BUILDING 3', rvs: 0.2, hazardLevel: 'HIGH' },
                { id: 'BUILDING 4', rvs: 3.4, hazardLevel: 'LOW' },
                { id: 'BUILDING 5', rvs: 2.3, hazardLevel: 'MEDIUM' },
                { id: 'BUILDING 6', rvs: 2, hazardLevel: 'HIGH' },
                { id: 'BUILDING 7', rvs: 1, hazardLevel: 'HIGH' },
                { id: 'BUILDING 8', rvs: 0.5, hazardLevel: 'HIGH' },
                { id: 'BUILDING 9', rvs: 3, hazardLevel: 'LOW' },
                { id: 'BUILDING 10', rvs: 1.1, hazardLevel: 'HIGH' },
                { id: 'BUILDING 11', rvs: 1.2, hazardLevel: 'HIGH' },
                { id: 'BUILDING 12', rvs: 1.3, hazardLevel: 'HIGH' },
                { id: 'BUILDING 13', rvs: 1.4, hazardLevel: 'HIGH' },
                { id: 'BUILDING 14', rvs: 1.5, hazardLevel: 'HIGH' },
                { id: 'BUILDING 15', rvs: 1.6, hazardLevel: 'HIGH' },
                { id: 'BUILDING 16', rvs: 1.7, hazardLevel: 'HIGH' },
                { id: 'BUILDING 17', rvs: 1.8, hazardLevel: 'HIGH' },
                { id: 'BUILDING 18', rvs: 1.9, hazardLevel: 'HIGH' },
                { id: 'BUILDING 19', rvs: 2, hazardLevel: 'HIGH' },
                { id: 'BUILDING 20', rvs: 2.1, hazardLevel: 'MEDIUM' }
            ]
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
            <button id="printBtn" class="print-btn" style="display: none;" onclick="printCard()">Print</button>
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
                <tr>
                    <th colspan="2">Buildings</th>
                </tr>
                ${details.buildings.map(building => `
                <tr>
                    <td>${building.id}</td>
                    <td>RVS: ${building.rvs} - ${building.hazardLevel}</td>
                </tr>`).join('')}
            </table>
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
    printWindow.document.write('</head><body>');
    printWindow.document.write(tableContent);
    printWindow.document.write('</body></html>');

    printWindow.document.close(); // Necessary for IE >= 10
    printWindow.print();
}


document.addEventListener('DOMContentLoaded', function () {
    initMap();
});
