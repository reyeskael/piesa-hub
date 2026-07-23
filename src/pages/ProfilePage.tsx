import React, { useState } from 'react';
import { Box } from '@mui/material';
import { UserProfileHeader } from '../components/garage/UserProfileHeader';
import { BikeList } from '../components/garage/BikeList';
import { ReservationsList } from '../components/garage/ReservationsList';
import mockUser from '../data/mock-user.json';
import mockBikes from '../data/mock-bikes.json';
import mockReservations from '../data/mock-reservations.json';

export const ProfilePage: React.FC = () => {
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
		<Box sx={{ mt: 2 }}>
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
