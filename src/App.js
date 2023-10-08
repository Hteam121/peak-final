import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import theme from './theme';
import Sidebar from './components/Sidebar';
import SettingsPage from './pages/SettingsPage';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flexGrow: 1, padding: '20px' }}>
            <Routes> {/* Use Routes here */}
              {/* Other Route elements can go here */}
              <Route path="/settings" element={<SettingsPage />} /> 
              <Route path="/profile" element={<UserProfile />} />
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
