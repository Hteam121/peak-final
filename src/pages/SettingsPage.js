import React from 'react';
import { Box, Typography, TextField, Button, Switch, FormControlLabel } from '@mui/material';

function SettingsPage() {
    return (
        <Box p={3} width="100%" maxWidth={600} mx="auto">
            <Typography variant="h4" mb={3}>Settings</Typography>

            {/* User Information */}
            <Typography variant="h6" mb={2}>User Information</Typography>
            <TextField fullWidth label="Username" variant="outlined" margin="normal" />
            <TextField fullWidth label="Email" variant="outlined" margin="normal" />

            {/* Notifications */}
            <Typography variant="h6" mb={2}>Notifications</Typography>
            <FormControlLabel
                control={<Switch color="primary" />}
                label="Receive Email Notifications"
            />
            <FormControlLabel
                control={<Switch color="primary" />}
                label="Receive Push Notifications"
            />

            {/* Theme */}
            <Typography variant="h6" mb={2}>Theme</Typography>
            <FormControlLabel
                control={<Switch color="primary" />}
                label="Dark Mode"
            />

            {/* Actions */}
            <Box mt={3}>
                <Button variant="contained" color="primary">Save Changes</Button>
            </Box>
        </Box>
    );
}

export default SettingsPage;
