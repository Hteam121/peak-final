import React from 'react';
import LineGraph from '../components/LineGraph';

function EnergyPage() {
    const acPowerData = [
        { name: 'Jan', value: 27 },
        { name: 'Feb', value: 29 },
        { name: 'Mar', value: 30 },
        { name: 'Apr', value: 29 },
        { name: 'May', value: 36 },
        { name: 'June', value: 107 },
        { name: 'July', value: 143 },
        { name: 'Aug', value: 160 },
        { name: 'Sep', value: 37 },
        { name: 'Oct', value: 27 },
        { name: 'Nov', value: 38 },
        { name: 'Dec', value: 33 },
    ];
    const energyOverTimeData = [
        { name: 'Jan', value: 304 },
        { name: 'Feb', value: 292 },
        { name: 'Mar', value: 299 },
        { name: 'Apr', value: 304 },
        { name: 'May', value: 290 },
        { name: 'June', value: 292 },
        { name: 'July', value: 319 },
        { name: 'Aug', value: 316 },
        { name: 'Sep', value: 310 },
        { name: 'Oct', value: 285 },
        { name: 'Nov', value: 311 },
        { name: 'Dec', value: 304 },
    ];
    const sensorsPowerData = [
        { name: 'Jan', value: 47 },
        { name: 'Feb', value: 49 },
        { name: 'Mar', value: 46 },
        { name: 'Apr', value: 48 },
        { name: 'May', value: 32 },
        { name: 'June', value: 31 },
        { name: 'July', value: 36 },
        { name: 'Aug', value: 48 },
        { name: 'Sep', value: 47 },
        { name: 'Oct', value: 35 },
        { name: 'Nov', value: 36 },
        { name: 'Dec', value: 32 },
    ];
    const lightsPowerData = [
        { name: 'Jan', value: 25 },
        { name: 'Feb', value: 12 },
        { name: 'Mar', value: 13 },
        { name: 'Apr', value: 14 },
        { name: 'May', value: 26 },
        { name: 'June', value: 13 },
        { name: 'July', value: 24 },
        { name: 'Aug', value: 19 },
        { name: 'Sep', value: 11 },
        { name: 'Oct', value: 22 },
        { name: 'Nov', value: 17 },
        { name: 'Dec', value: 29 },
    ];
    const utilitiesPowerData = [
        { name: 'Jan', value: 90 },
        { name: 'Feb', value: 73 },
        { name: 'Mar', value: 80 },
        { name: 'Apr', value: 75 },
        { name: 'May', value: 82 },
        { name: 'June', value: 97 },
        { name: 'July', value: 55 },
        { name: 'Aug', value: 74 },
        { name: 'Sep', value: 67 },
        { name: 'Oct', value: 84 },
        { name: 'Nov', value: 61 },
        { name: 'Dec', value: 93 },
    ];

    const pageContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh',
        overflowY: 'auto',
        padding: '20px 0',
        marginBottom: '10px',
    };

    const headerStyle = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 0',
        backgroundColor: '#6F74C2',
        color: '#FFFFFF',
        boxShadow: '0px 3px 10px rgba(0,0,0,0.1)',
        marginBottom: '20px',
    };

    return (
        <div style={pageContainerStyle}>
            <header style={headerStyle}>
                <h1>Energy Usage</h1>
                <p>Overview of power consumption</p>
            </header>

            <div className="graph">
                <LineGraph yAxisLabel="Power (kWh)" data={acPowerData} graphTitle="AC Power Usage Over Time" />
            </div>
            <div className="graph">
                <LineGraph yAxisLabel="Energy (kWh)" data={energyOverTimeData} graphTitle="Energy Over Time" />
            </div>
            <div className="graph">
                <LineGraph yAxisLabel="Power (kWh)" data={sensorsPowerData} graphTitle="Sensors Power Over Time" />
            </div>
            <div className="graph">
                <LineGraph yAxisLabel="Power (kWh)" data={lightsPowerData} graphTitle="Lights Power Usage Over Time" />
            </div>
            <div className="graph">
                <LineGraph yAxisLabel="Power (kWh)" data={utilitiesPowerData} graphTitle="Utilities Power Usage Over Time" />
            </div>
        </div>
    );
}

export default EnergyPage;
