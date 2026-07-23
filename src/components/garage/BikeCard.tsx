import React from 'react';
import { Box, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material';

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

interface BikeCardProps {
	bike: Bike;
	onSelect: (bikeId: string) => void;
	isSelected: boolean;
}

export const BikeCard: React.FC<BikeCardProps> = ({ bike, onSelect, isSelected }) => {
	return (
		<Card
			sx={{
				backgroundColor: '#1E1E1E',
				borderColor: isSelected ? '#FF6B00' : '#2D2D2D',
				border: '1px solid',
				mb: 2,
				overflow: 'visible',
			}}
		>
			<CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
				{/* Primary Badge */}
				{bike.isPrimary && (
					<Box sx={{ mb: 2 }}>
						<Chip
							label="⭐ Primary Bike"
							sx={{
								backgroundColor: '#FF6B00',
								color: '#FFFFFF',
								fontWeight: 600,
								height: '28px',
								fontSize: '0.85rem',
							}}
						/>
					</Box>
				)}

				{/* Bike Image and Info */}
				<Stack direction="row" spacing={2} sx={{ mb: 2 }}>
					<Box
						sx={{
							width: 80,
							height: 80,
							backgroundColor: '#262626',
							borderRadius: '8px',
							backgroundImage: `url(${bike.image})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							flexShrink: 0,
						}}
					/>
					<Stack flex={1} justifyContent="space-between">
						<Box>
							<Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
								{bike.year} {bike.make} {bike.model}
							</Typography>
							<Typography variant="body2" sx={{ color: '#9CA3AF', mb: 0.5 }}>
								Plate: {bike.plate}
							</Typography>
							<Typography variant="caption" sx={{ color: '#6B7280' }}>
								{bike.mileage.toLocaleString()} km
							</Typography>
						</Box>
					</Stack>
				</Stack>

				{/* Action Button */}
				{isSelected ? (
					<Chip
						label="✓ Active"
						sx={{
							backgroundColor: 'rgba(34, 197, 94, 0.1)',
							color: '#22C55E',
							fontWeight: 600,
							width: '100%',
						}}
					/>
				) : (
					<Button
						variant="outlined"
						fullWidth
						sx={{
							color: '#FF6B00',
							borderColor: '#FF6B00',
							textTransform: 'none',
							'&:hover': {
								backgroundColor: 'rgba(255, 107, 0, 0.1)',
							},
						}}
						onClick={() => onSelect(bike.bikeId)}
					>
						Select
					</Button>
				)}
			</CardContent>
		</Card>
	);
};
