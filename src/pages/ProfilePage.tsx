import React, { useState } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { UserProfileHeader } from '../components/UserProfileHeader';
import { BikeList } from '../components/BikeList';
import { ReservationsList } from '../components/ReservationsList';
import mockUser from '../data/mock-user.json';
import mockBikes from '../data/mock-bikes.json';
import mockReservations from '../data/mock-reservations.json';

const useStyles = makeStyles()({
	root: {
		marginTop: 16,
	},
});

export const ProfilePage: React.FC = () => {
	const { classes } = useStyles();
	const [selectedBikeId, setSelectedBikeId] = useState('bike-001');

	const handleEditProfile = () => {
		console.log('Edit profile clicked');
	};

	const handleSelectBike = (bikeId: string) => {
		setSelectedBikeId(bikeId);
	};

	const handleAddBike = () => {
		console.log('Add bike clicked');
	};

	const handleViewMap = (reservationId: string) => {
		console.log('View map for reservation:', reservationId);
	};

	const handleSeeAllReservations = () => {
		console.log('See all reservations clicked');
	};

	return (
		<Box className={classes.root}>
			{/* User Profile Header */}
			<UserProfileHeader user={mockUser} onEditProfile={handleEditProfile} />

			{/* My Fleet Section */}
			<BikeList
				bikes={mockBikes}
				selectedBikeId={selectedBikeId}
				onSelectBike={handleSelectBike}
				onAddBike={handleAddBike}
			/>

			{/* Active Reservations Section */}
			<ReservationsList
				reservations={mockReservations}
				onViewMap={handleViewMap}
				onSeeAll={handleSeeAllReservations}
			/>
		</Box>
	);
};
