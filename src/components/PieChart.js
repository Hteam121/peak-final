import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Label, Legend } from 'recharts';

const styles = {
  tableContainer: {
    margin: '20px',
    border: '1px solid #ccc',
    padding: '10px',
    width: '400px',
    borderRadius: '25px',
    backgroundColor: '#8B91DB',
  }
};

const PieChartComponent = ({ data }) => {
  let deviceScore = 0;
  let maxDeviceScore = 0;

  data.forEach((device) => {
    switch (device.status) {
      case 'Good':
        deviceScore += 3;
        break;
      case 'Maintenance Required':
        deviceScore += 2;
        break;
      case 'Alert':
        deviceScore += 1;
        break;
      default:
        break;
    }
    maxDeviceScore += 3;
  });

  const pieData = [
    { name: 'Device Health', value: deviceScore },
    { name: 'Remaining', value: maxDeviceScore - deviceScore },
  ];

  const COLORS = ['#8B91DB', '#DADBED'];

  return (
    <div style={styles.tableContainer}>
      <div style={{ textAlign: 'center' }}>
        <h2>Overall House Health</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              cx={200}
              cy={200}
              innerRadius={80}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              <Label
                value={`${((deviceScore / maxDeviceScore) * 100).toFixed(0)}%`}
                position="center"
                fill="black"
                fontSize={36}
              />
            </Pie>
            <Tooltip />
            <Legend align="center" verticalAlign="bottom" layout="horizontal" />
          </PieChart>
        </div>
    
      </div>
    </div>
  );
};

export default PieChartComponent;
