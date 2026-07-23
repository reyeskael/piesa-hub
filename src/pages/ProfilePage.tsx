import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';

export const ProfilePage: React.FC = () => (
	<Box sx={{ textAlign: 'center', mt: 4 }}>
		<Avatar sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }}>PH</Avatar>
		<Typography variant="h4" component="h1" gutterBottom>
			Your Profile
		</Typography>
		<Typography variant="body1" sx={{ mb: 3 }}>
			Manage your account and saved parts preferences.
		</Typography>
		<Button variant="contained" color="primary">
			Edit Profile
		</Button>
	</Box>
);
