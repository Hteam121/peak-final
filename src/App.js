import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import theme from './theme';
import Sidebar from './components/Sidebar';
import SettingsPage from './pages/SettingsPage';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
import EnergyPage from './pages/Energy';
import CostSavings from './pages/CostSavings';
import QualityControl from './pages/QualityControl';
import AddDeviceButton from './components/AddDeviceButton';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <AddDeviceButton />
          <div style={{ flexGrow: 1, padding: '20px' }}>
            <Routes> {/* Use Routes here */}
              {/* Other Route elements can go here */}
              <Route path="/settings" element={<SettingsPage />} /> 
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/energy" element={<EnergyPage />} />
              <Route path="/cost-savings" element={<CostSavings />} />
              <Route path="/quality-control" element={<QualityControl />} />
              {/* Default or 404 Route */}
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
