import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { BottomNavBar } from './components/BottomNavBar';
import { HomePage } from './pages/HomePage';
import { FindPartsPage } from './pages/FindPartsPage';
import { ProfilePage } from './pages/ProfilePage';

export const App: React.FC = () => {
	const [page, setPage] = useState(0);

	return (
		<Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
			<Container maxWidth="sm" sx={{ flex: 1, overflowY: 'auto' }}>
				{page === 0 && <HomePage />}
				{page === 1 && <FindPartsPage />}
				{page === 2 && <ProfilePage />}
			</Container>

			<BottomNavBar value={page} onChange={setPage} />
		</Box>
	);
};
