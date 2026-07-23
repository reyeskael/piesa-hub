import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

export const FindPartsPage: React.FC = () => (
	<Box sx={{ textAlign: 'center', mt: 4 }}>
		<Typography variant="h4" component="h1" gutterBottom>
			Find Parts
		</Typography>
		<Typography variant="body1" sx={{ mb: 3 }}>
			Search for motorcycle parts by model, brand, or category.
		</Typography>
		<TextField label="Search parts" variant="outlined" fullWidth sx={{ maxWidth: 400, mx: 'auto', mb: 2 }} />
	</Box>
);
