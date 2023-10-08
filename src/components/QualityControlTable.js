// import React from 'react';

// const getStatusColor = (status) => {
//   switch (status) {
//     case 'Good':
//       return 'green';
//     case 'Maintenance Required':
//       return 'darkorange'; // Dark yellow
//     case 'Alert':
//       return 'red';
//     default:
//       return 'black';
//   }
// };

// const QualityControlTable = ({ title, data }) => {
//   return (
//     <div className="table-container">
//       <h2>{title}</h2>
//       <div className="table-container-group">
//         <table style={{ width: '100%' }}>
//         <colgroup>
//             <col style={{ width: '50%' }} /> {/* Set explicit width for the Device Number column /}
//             <col style={{ width: '50%' }} /> {/ Set explicit width for the Status column */}
//           </colgroup>
//           <thead>
//             <tr>
//               <th>Device Number</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((device, index) => (
//               <tr key={index}>
//                 <td>{device.deviceNumber}</td>
//                 <td style={{ color: getStatusColor(device.status) }}>{device.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default QualityControlTable;

// src/components/RoomTable.js
import React from 'react';

const getStatusColor = (status) => {
  switch (status) {
    case 'Good':
      return 'green';
    case 'Maintenance Required':
      return 'darkorange'; // Dark yellow
    case 'Alert':
      return 'red';
    default:
      return 'black';
  }
};

const QualityControlTable = ({ title, data }) => {
  return (
    <div className="table-container">
      <h2>{title}</h2>
      <div className="table-container-group">
        <table style={{ width: '100%' }}>
        <colgroup>
            <col style={{ width: '50%' }} /> {/* Set explicit width for the Device Number column */}
            <col style={{ width: '50%' }} /> {/* Set explicit width for the Status column */}
          </colgroup>
          <thead>
            <tr>
              <th>Device Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((device, index) => (
              <tr key={index}>
                <td>{device.deviceNumber}</td>
                <td style={{ color: getStatusColor(device.status) }}>{device.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QualityControlTable;