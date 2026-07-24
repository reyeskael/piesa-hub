import React from 'react';
import { Box, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
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

const useStyles = makeStyles<{ isReadyForPickup: boolean; image: string }>()((_theme, { isReadyForPickup, image }) => ({
	card: {
		backgroundColor: '#1E1E1E',
		borderColor: '#2D2D2D',
		border: '1px solid #2D2D2D',
		borderTop: isReadyForPickup ? '2px solid #22C55E' : '2px solid #2D2D2D',
		marginBottom: 16,
	},
	cardContent: {
		padding: 16,
	},
	partInfoRow: {
		marginBottom: 16,
	},
	partImage: {
		width: 70,
		height: 70,
		backgroundColor: '#262626',
		borderRadius: '8px',
		backgroundImage: `url(${image})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		flexShrink: 0,
	},
	partDetails: {
		flex: 1,
	},
	partName: {
		color: '#FFFFFF',
		fontWeight: 600,
		marginBottom: 4,
	},
	partMeta: {
		color: '#9CA3AF',
	},
	statusStack: {
		marginBottom: 16,
	},
	statusChip: {
		backgroundColor: isReadyForPickup ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255, 107, 0, 0.1)',
		color: isReadyForPickup ? '#22C55E' : '#FF6B00',
		fontWeight: 600,
		width: 'fit-content',
		height: '24px',
		fontSize: '0.8rem',
	},
	metaRow: {
		gap: 16,
	},
	metaItem: {
		alignItems: 'center',
		gap: 4,
	},
	metaIcon: {
		width: 16,
		height: 16,
		color: '#6B7280',
	},
	metaText: {
		color: '#6B7280',
	},
	viewMapButton: {
		backgroundColor: '#FF6B00',
		color: '#FFFFFF',
		textTransform: 'none',
		fontWeight: 600,
		'&:hover': {
			backgroundColor: '#E05E00',
		},
	},
}));

export const ReservationCard: React.FC<ReservationCardProps> = ({ reservation, onViewMap }) => {
	const isReadyForPickup = reservation.status === 'Ready for Pickup';
	const { classes } = useStyles({ isReadyForPickup, image: reservation.image });

	return (
		<Card className={classes.card}>
			<CardContent className={classes.cardContent}>
				{/* Part Info */}
				<Stack direction="row" spacing={2} className={classes.partInfoRow}>
					<Box className={classes.partImage} />
					<Stack className={classes.partDetails}>
						<Typography variant="subtitle2" className={classes.partName}>
							{reservation.partName}
						</Typography>
						<Typography variant="caption" className={classes.partMeta}>
							{reservation.make} {reservation.model}
						</Typography>
						<Typography variant="caption" className={classes.partMeta}>
							{reservation.shop}
						</Typography>
					</Stack>
				</Stack>

				{/* Status and Meta Info */}
				<Stack spacing={1} className={classes.statusStack}>
					<Chip label={reservation.status} className={classes.statusChip} />

					<Stack direction="row" className={classes.metaRow}>
						<Stack direction="row" className={classes.metaItem}>
							<LocationOnOutlinedIcon className={classes.metaIcon} />
							<Typography variant="caption" className={classes.metaText}>
								{reservation.location}
							</Typography>
						</Stack>
						<Stack direction="row" className={classes.metaItem}>
							<AccessTimeIcon className={classes.metaIcon} />
							<Typography variant="caption" className={classes.metaText}>
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
					className={classes.viewMapButton}
					onClick={() => onViewMap(reservation.reservationId)}
				>
					View Pickup Map
				</Button>
			</CardContent>
		</Card>
	);
};
