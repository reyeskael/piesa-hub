import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export const HomePage: React.FC = () => (
	<Box sx={{ textAlign: 'center', mt: 4 }}>
		<Typography variant="h4" component="h1" gutterBottom>
			Welcome to PiesaHub
		</Typography>
		<Typography variant="body1" sx={{ mb: 3 }}>
			Find the best motorcycle parts, manage your profile, and browse available options.
		</Typography>
		<Button variant="contained" color="primary">
			Get Started
		</Button>
	</Box>
);
