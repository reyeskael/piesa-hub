import React from 'react';
import { Badge, Box, Button, Stack, Typography } from '@mui/material';
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

interface ReservationsListProps {
	reservations: Reservation[];
	onViewMap: (reservationId: string) => void;
	onSeeAll: () => void;
}

export const ReservationsList: React.FC<ReservationsListProps> = ({
	reservations,
	onViewMap,
	onSeeAll,
}) => {
	if (reservations.length === 0) {
		return null;
	}

	const firstReservation = reservations[0];
	const isReadyForPickup = firstReservation.status === 'Ready for Pickup';

	return (
		<Box sx={{ mb: 4 }}>
			{/* Header */}
			<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
				<Stack direction="row" alignItems="center" gap={1}>
					<Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
						Active Reservations
					</Typography>
					<Badge
						badgeContent={reservations.length}
						sx={{
							'& .MuiBadge-badge': {
								backgroundColor: '#FF6B00',
								color: '#FFFFFF',
								fontWeight: 600,
								fontSize: '0.75rem',
							},
						}}
					>
						<Box />
					</Badge>
				</Stack>
				<Typography
					variant="body2"
					sx={{
						color: '#FF6B00',
						cursor: 'pointer',
						'&:hover': {
							textDecoration: 'underline',
						},
					}}
					onClick={onSeeAll}
				>
					See all
				</Typography>
			</Stack>

			{/* Reservation Item - Show only first one */}
			<Box
				sx={{
					backgroundColor: '#1E1E1E',
					border: '1px solid #2D2D2D',
					borderTop: isReadyForPickup ? '3px solid #22C55E' : '3px solid #2D2D2D',
					borderRadius: '8px',
					p: 2,
				}}
			>
				{/* Part and Shop Info */}
				<Stack spacing={1.5} sx={{ mb: 2 }}>
					<Box>
						<Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 0.5 }}>
							{firstReservation.partName}
						</Typography>
						<Typography variant="caption" sx={{ color: '#9CA3AF', display: 'block' }}>
							{firstReservation.make} {firstReservation.model}
						</Typography>
					</Box>

					<Stack direction="row" alignItems="center" gap={1}>
						<Typography variant="caption" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
							{firstReservation.shop}
						</Typography>
						<Typography variant="caption" sx={{ color: '#9CA3AF' }}>
							• {firstReservation.location}
						</Typography>
					</Stack>

					{/* Status Badge */}
					<Box>
						<Box
							component="span"
							sx={{
								display: 'inline-block',
								backgroundColor: isReadyForPickup ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255, 107, 0, 0.1)',
								color: isReadyForPickup ? '#22C55E' : '#FF6B00',
								fontWeight: 600,
								padding: '4px 12px',
								borderRadius: '6px',
								fontSize: '0.8rem',
							}}
						>
							● {firstReservation.status}
						</Box>
					</Box>

					{/* Location and Time */}
					<Stack direction="row" gap={2}>
						<Stack direction="row" alignItems="center" gap={0.5}>
							<LocationOnOutlinedIcon sx={{ width: 16, height: 16, color: '#6B7280' }} />
							<Typography variant="caption" sx={{ color: '#6B7280' }}>
								{firstReservation.location}
							</Typography>
						</Stack>
						<Stack direction="row" alignItems="center" gap={0.5}>
							<AccessTimeIcon sx={{ width: 16, height: 16, color: '#6B7280' }} />
							<Typography variant="caption" sx={{ color: '#6B7280' }}>
								{firstReservation.reservedDate}
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
					onClick={() => onViewMap(firstReservation.reservationId)}
				>
					View Pickup Map
				</Button>
			</Box>
		</Box>
	);
};
