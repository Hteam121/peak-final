import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function CustomLineChart({ data, headers, graphTitle, yAxisLabel}) {
  // Find the maximum value in the data
  const maxDataValue = Math.max(...data.map((entry) => entry.value));

  // Calculate the adjusted y-axis domain
  const yDomain = [0, maxDataValue + 50];

  return (
    <div>
      <h2>{graphTitle}</h2>
      <LineChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={yDomain} label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#007BFF" />
      </LineChart>
    </div>
  );
}

export default CustomLineChart;
