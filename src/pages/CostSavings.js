import React from 'react';
import LineGraph from '../components/LineGraph';

function CostSavings() {
    const graphData = [
        { name: 'Jan', value: 130 },
        { name: 'Feb', value: 180 },
        { name: 'Mar', value: 180 },
        { name: 'Apr', value: 110 },
        { name: 'May', value: 105 },
        { name: 'June', value: 240 },
        { name: 'July', value: 220 },
        { name: 'Aug', value: 290 },
        { name: 'Sep', value: 110 },
        { name: 'Oct', value: 130 },
        { name: 'Nov', value: 180 },
        { name: 'Dec', value: 180 },
    ];

    const averageCost = (graphData.reduce((acc, cur) => acc + cur.value, 0) / graphData.length).toFixed(2);

    const potentialSavings = [
        { advice: "Switch to LED bulbs", reduction: 10 },
        { advice: "Unplug devices when not in use", reduction: 5 },
        { advice: "Set thermostats to energy-saving temperatures", reduction: 8 }
    ];

    const totalReduction = potentialSavings.reduce((acc, cur) => acc + cur.reduction, 0);
    const totalSavings = averageCost * (totalReduction / 100).toFixed(2);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        height: '100vh',
        overflowY: 'auto'
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
        marginBottom: '20px'
    };

    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                <h1>Cost Savings</h1>
                <p>Advice and Stats on Saving Money</p>
            </header>

            <section className="graphs">
                <div className="graph">
                    <LineGraph yAxisLabel="Cost ($)" data={graphData} graphTitle="Cost Over Time" />
                </div>
            </section>

            <section className="average-cost">
                <h2>Average Cost Per Month: ${averageCost}</h2>
            </section>

            <section className="savings-advice">
                <h2>Key Advice to Reduce Costs:</h2>
                <ul>
                    {potentialSavings.map((item, index) => (
                        <li key={index}>
                            {item.advice} - Estimated reduction of <strong>{item.reduction}%</strong>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="average-cost">
                <h2>Estimated Savings After Reductions: $67</h2>
            </section>

        </div>
    );
}

export default CostSavings;
