import React from 'react';
import { Box, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsIcon from '@mui/icons-material/Directions';

interface Reservation {
	reservationId: string;
	partName: string;
	make: string;
	model: string;
	shop: string;
	location: string;
	status: string;
	reservedDate: string;
	image: string;
}

interface ReservationCardProps {
	reservation: Reservation;
	onViewMap: (reservationId: string) => void;
}

export const ReservationCard: React.FC<ReservationCardProps> = ({ reservation, onViewMap }) => {
	const isReadyForPickup = reservation.status === 'Ready for Pickup';

	return (
		<Card
			sx={{
				backgroundColor: '#1E1E1E',
				borderColor: '#2D2D2D',
				border: '1px solid #2D2D2D',
				borderTop: isReadyForPickup ? '2px solid #22C55E' : '2px solid #2D2D2D',
				mb: 2,
			}}
		>
			<CardContent sx={{ p: 2 }}>
				{/* Part Info */}
				<Stack direction="row" spacing={2} sx={{ mb: 2 }}>
					<Box
						sx={{
							width: 70,
							height: 70,
							backgroundColor: '#262626',
							borderRadius: '8px',
							backgroundImage: `url(${reservation.image})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							flexShrink: 0,
						}}
					/>
					<Stack flex={1}>
						<Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 0.5 }}>
							{reservation.partName}
						</Typography>
						<Typography variant="caption" sx={{ color: '#9CA3AF' }}>
							{reservation.make} {reservation.model}
						</Typography>
						<Typography variant="caption" sx={{ color: '#9CA3AF' }}>
							{reservation.shop}
						</Typography>
					</Stack>
				</Stack>

				{/* Status and Meta Info */}
				<Stack spacing={1} sx={{ mb: 2 }}>
					<Chip
						label={reservation.status}
						sx={{
							backgroundColor: isReadyForPickup ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255, 107, 0, 0.1)',
							color: isReadyForPickup ? '#22C55E' : '#FF6B00',
							fontWeight: 600,
							width: 'fit-content',
							height: '24px',
							fontSize: '0.8rem',
						}}
					/>

					<Stack direction="row" gap={2}>
						<Stack direction="row" alignItems="center" gap={0.5}>
							<LocationOnOutlinedIcon sx={{ width: 16, height: 16, color: '#6B7280' }} />
							<Typography variant="caption" sx={{ color: '#6B7280' }}>
								{reservation.location}
							</Typography>
						</Stack>
						<Stack direction="row" alignItems="center" gap={0.5}>
							<AccessTimeIcon sx={{ width: 16, height: 16, color: '#6B7280' }} />
							<Typography variant="caption" sx={{ color: '#6B7280' }}>
								{reservation.reservedDate}
							</Typography>
						</Stack>
					</Stack>
				</Stack>

				{/* View Map Button */}
				<Button
					variant="contained"
					fullWidth
					startIcon={<DirectionsIcon />}
					sx={{
						backgroundColor: '#FF6B00',
						color: '#FFFFFF',
						textTransform: 'none',
						fontWeight: 600,
						'&:hover': {
							backgroundColor: '#E05E00',
						},
					}}
					onClick={() => onViewMap(reservation.reservationId)}
				>
					View Pickup Map
				</Button>
			</CardContent>
		</Card>
	);
};
