import React from 'react';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { BikeCard } from './BikeCard';

interface Bike {
	bikeId: string;
	year: number;
	make: string;
	model: string;
	plate: string;
	mileage: number;
	isPrimary: boolean;
	image: string;
}

interface BikeListProps {
	bikes: Bike[];
	selectedBikeId: string;
	onSelectBike: (bikeId: string) => void;
	onAddBike: () => void;
}

export const BikeList: React.FC<BikeListProps> = ({ bikes, selectedBikeId, onSelectBike, onAddBike }) => {
	return (
		<Box sx={{ mb: 4 }}>
			{/* Header */}
			<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
				<Stack direction="row" alignItems="center" gap={1}>
					<Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
						My Fleet
					</Typography>
					<Chip
						label={bikes.length}
						sx={{
							backgroundColor: '#262626',
							color: '#9CA3AF',
							fontWeight: 600,
							height: '24px',
						}}
					/>
				</Stack>
				<Button
					startIcon={<AddIcon />}
					sx={{
						color: '#FF6B00',
						textTransform: 'none',
						fontSize: '0.9rem',
						'&:hover': {
							backgroundColor: 'rgba(255, 107, 0, 0.1)',
						},
					}}
					onClick={onAddBike}
				>
					Add Bike
				</Button>
			</Stack>

			{/* Bike Cards */}
			<Stack spacing={0}>
				{bikes.map((bike) => (
					<BikeCard
						key={bike.bikeId}
						bike={bike}
						onSelect={onSelectBike}
						isSelected={bike.bikeId === selectedBikeId}
					/>
				))}
			</Stack>
		</Box>
	);
};
