import React from 'react';
import { Line } from 'react-chartjs-2';

function TemperatureChart() {
  const data = {
    labels: ['January', 'February', /*...other months*/],
    datasets: [
      {
        label: 'Temperature',
        data: [/*monthly temperatures*/],
        borderColor: ['rgba(255, 206, 86, 0.2)'],
        backgroundColor: ['rgba(255, 206, 86, 0.2)'],
      },
    ],
  };

  return <Line data={data} />;
}

export default TemperatureChart;
