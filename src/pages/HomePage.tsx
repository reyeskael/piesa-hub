import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
	root: {
		textAlign: 'center',
		marginTop: 32,
	},
	subtitle: {
		marginBottom: 24,
	},
});

export const HomePage: React.FC = () => {
	const { classes } = useStyles();

	return (
		<Box className={classes.root}>
			<Typography variant="h4" component="h1" gutterBottom>
				Welcome to PiesaHub
			</Typography>
			<Typography variant="body1" className={classes.subtitle}>
				Find the best motorcycle parts, manage your profile, and browse available options.
			</Typography>
			<Button variant="contained" color="primary">
				Get Started
			</Button>
		</Box>
	);
};
