import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { BottomNavBar } from './components/BottomNavBar';
import { HomePage } from './pages/HomePage';
import { FindPartsPage } from './pages/FindPartsPage';
import { ProfilePage } from './pages/ProfilePage';

const useStyles = makeStyles()({
	root: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden',
	},
	content: {
		flex: 1,
		overflowY: 'auto',
		padding: 16,
	},
});

export const App: React.FC = () => {
	const [page, setPage] = useState(0);
	const { classes } = useStyles();

	return (
		<Box className={classes.root}>
			<Container maxWidth="sm" className={classes.content}>
				{page === 0 && <HomePage />}
				{page === 1 && <FindPartsPage />}
				{page === 2 && <ProfilePage />}
			</Container>

			<BottomNavBar value={page} onChange={setPage} />
		</Box>
	);
};
