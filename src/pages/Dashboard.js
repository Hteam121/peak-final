import React from 'react';
import LineGraph from '../components/LineGraph';

function Dashboard() {
    const graphData1 = [
        { name: 'Jan', value: 549 },
        { name: 'Feb', value: 588 },
        { name: 'Mar', value: 569 },
        { name: 'Apr', value: 541 },
        { name: 'May', value: 641 },
        { name: 'June', value: 564 },
        { name: 'July', value: 575 },
        { name: 'Aug', value: 631 },
        { name: 'Sep', value: 621 },
        { name: 'Oct', value: 625 },
        { name: 'Nov', value: 507 },
        { name: 'Dec', value: 629 },
      ];
    
      const graphData2 = [
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

  const dashboardContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // padding: '20px 0',
    height: '100vh',
    overflowY: 'auto', // This will make it scrollable if content overflows vertically.
    marginBottom: '10px',
  };

  const headerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 0',
    backgroundColor: '#6F74C2', // Using the primary theme color
    color: '#FFFFFF', // Adjusting the text color to be more readable on a darker background
    boxShadow: '0px 3px 10px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  };

  const updatesStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  };
  
  const updateCardStyle = {
    textAlign: 'left',  // Ensures the text inside is left-aligned
    maxWidth: '800px',  // Adjust as per your design requirements
    width: '100%', 
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #DADBED', // Optional, if you'd like to style the update cards a bit
    borderRadius: '5px', // Optional as well, for rounded corners
  };  

  return (
    <div style={dashboardContainerStyle}>
      <header style={headerStyle}>
        <h1>PEAK</h1>
        <p>Power Efficiency and Awareness Kit</p>
      </header>

      <section className="graphs">
        <div className="graph">
          <LineGraph yAxisLabel="Energy (kWh)" data={graphData1} graphTitle="Energy Usage Over The Year (Predictive)" />
        </div>
        <div className="graph">
          <LineGraph yAxisLabel="Energy (kWh)" data={graphData2} graphTitle="Overall Room's Energy Usage" />
        </div>
      </section>

      <section className="updates" style={updatesStyle}>
      <h2>Main Updates</h2>
      <div className="update-card" style={updateCardStyle}>
        <p>Air Quality is in the 70th percentile, may be sensitive to some groups.</p>
      </div>
      <div className="update-card" style={updateCardStyle}>
        <p>Maintenance required in bedroom 1</p>
      </div>
      {/* Add more updates as needed */}
    </section>
    </div>
  );
}

export default Dashboard;
