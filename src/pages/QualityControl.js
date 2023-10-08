import React from 'react';
//import './App.css';
import RoomTable from '../components/QualityControlTable';
import PieChartComponent from '../components/PieChart.js';

const styles = {
    dashboardContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh',
        overflowY: 'auto',
        marginBottom: '10px',
    },
    container: {
        display: 'flex',
        width: '100%',
    },
    headerStyle: {
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
    },
    tableContainerGroup: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tableContainer: {
        margin: '20px',
        border: '1px solid #ccc',
        padding: '10px',
        width: '400px',
        borderRadius: '25px',
        backgroundColor: '#8B91DB'
    },
    table: {
        borderCollapse: 'collapse',
        width: '100%',
        border: '1px solid #fff',
    },
    tableHeader: {
        backgroundColor: '#7579B1', // give a distinct color to headers
        fontWeight: 'bold',  // make header text bold
        border: '1px solid #fff',
        textAlign: 'center',        // Centered text horizontally
        verticalAlign: 'middle',    // Centered text vertically
    },
    tableRow: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#9A9EDD',  // lighter color for odd rows
        },
        '&:hover': {
            backgroundColor: '#6F74C2',  // hover effect color
            cursor: 'pointer',
        }
    },
    tableCell: {
        border: '1px solid #fff',
        padding: '12px 8px',  // increase padding
        textAlign: 'center',        // Centered text horizontally
        verticalAlign: 'middle',    // Centered text vertically
    }
};


function QualityControl() {
  const masterBedroomData = [
    { deviceNumber: "Smoke detector", status: 'Good' },
    { deviceNumber: "Water detector", status: 'Alert' },
    { deviceNumber: "Air quality", status: 'Maintenance Required' },
  ];

  const bedroom1Data = [
    { deviceNumber: 1, status: 'Good' },
    { deviceNumber: 2, status: 'Alert' },
    // Add custom data for Bedroom 1
  ];

  const bedroom2Data = [
    { deviceNumber: 1, status: 'Maintenance Required' },
    { deviceNumber: 2, status: 'Good' },
    // Add custom data for Bedroom 2
  ];

  const livingRoomData = [
    { deviceNumber: 1, status: 'Alert' },
    { deviceNumber: 2, status: 'Good' },
    // Add custom data for Living Room
  ];

  const kitchenData = [
    { deviceNumber: 1, status: 'Maintenance Required' },
    { deviceNumber: 2, status: 'Good' },
    // Add custom data for Kitchen
  ];

  const tableData = [
    ...masterBedroomData,
    ...bedroom1Data,
    ...bedroom2Data,
    ...livingRoomData,
    ...kitchenData,
];



  return (
    <div style={styles.dashboardContainer}>
        <header style={styles.headerStyle}>
            <h1>Quality Control Panel</h1>
            <p>Manage your sensor data</p>
        </header>

        <PieChartComponent data={tableData} />
        
        <h2>Room Breakdown</h2>

        <div style={styles.tableContainerGroup}>
            <div style={styles.tableContainer}>
                <RoomTable style={styles.table} title="Master Bedroom" data={masterBedroomData} />
            </div>
            <div style={styles.tableContainer}>
                <RoomTable style={styles.table} title="Bedroom 1" data={bedroom1Data} />
            </div>
            <div style={styles.tableContainer}>
                <RoomTable style={styles.table} title="Bedroom 2" data={bedroom2Data} />
            </div>
            <div style={styles.tableContainer}>
                <RoomTable style={styles.table} title="Living Room" data={livingRoomData} />
            </div>
            <div style={styles.tableContainer}>
                <RoomTable style={styles.table} title="Kitchen" data={kitchenData} />
            </div>
        </div>
    </div>
);
}

export default QualityControl;