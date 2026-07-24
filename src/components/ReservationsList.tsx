import React from 'react';
import { Badge, Box, Button, Stack, Typography } from '@mui/material';
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

interface ReservationsListProps {
	reservations: Reservation[];
	onViewMap: (reservationId: string) => void;
	onSeeAll: () => void;
}

const useStyles = makeStyles<{ isReadyForPickup: boolean }>()((_theme, { isReadyForPickup }) => ({
	root: {
		marginBottom: 32,
	},
	header: {
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
	},
	titleRow: {
		alignItems: 'center',
		gap: 8,
	},
	title: {
		color: '#FFFFFF',
		fontWeight: 700,
	},
	countBadge: {
		'& .MuiBadge-badge': {
			backgroundColor: '#FF6B00',
			color: '#FFFFFF',
			fontWeight: 600,
			fontSize: '0.75rem',
		},
	},
	seeAll: {
		color: '#FF6B00',
		cursor: 'pointer',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
	reservationCard: {
		backgroundColor: '#1E1E1E',
		border: '1px solid #2D2D2D',
		borderTop: isReadyForPickup ? '3px solid #22C55E' : '3px solid #2D2D2D',
		borderRadius: '8px',
		padding: 16,
	},
	infoStack: {
		marginBottom: 16,
	},
	partName: {
		color: '#FFFFFF',
		fontWeight: 600,
		marginBottom: 4,
	},
	bikeModel: {
		color: '#9CA3AF',
		display: 'block',
	},
	shopRow: {
		alignItems: 'center',
		gap: 8,
	},
	shopName: {
		color: '#FFFFFF',
		fontWeight: 600,
	},
	shopLocation: {
		color: '#9CA3AF',
	},
	statusBadge: {
		display: 'inline-block',
		backgroundColor: isReadyForPickup ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255, 107, 0, 0.1)',
		color: isReadyForPickup ? '#22C55E' : '#FF6B00',
		fontWeight: 600,
		padding: '4px 12px',
		borderRadius: '6px',
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

export const ReservationsList: React.FC<ReservationsListProps> = ({
	reservations,
	onViewMap,
	onSeeAll,
}) => {
	const firstReservation = reservations[0];
	const isReadyForPickup = firstReservation?.status === 'Ready for Pickup';
	const { classes } = useStyles({ isReadyForPickup });

	if (reservations.length === 0) {
		return null;
	}

	return (
		<Box className={classes.root}>
			{/* Header */}
			<Stack direction="row" className={classes.header}>
				<Stack direction="row" className={classes.titleRow}>
					<Typography variant="h6" className={classes.title}>
						Active Reservations
					</Typography>
					<Badge badgeContent={reservations.length} className={classes.countBadge}>
						<Box />
					</Badge>
				</Stack>
				<Typography variant="body2" className={classes.seeAll} onClick={onSeeAll}>
					See all
				</Typography>
			</Stack>

			{/* Reservation Item - Show only first one */}
			<Box className={classes.reservationCard}>
				{/* Part and Shop Info */}
				<Stack spacing={1.5} className={classes.infoStack}>
					<Box>
						<Typography variant="subtitle2" className={classes.partName}>
							{firstReservation.partName}
						</Typography>
						<Typography variant="caption" className={classes.bikeModel}>
							{firstReservation.make} {firstReservation.model}
						</Typography>
					</Box>

					<Stack direction="row" className={classes.shopRow}>
						<Typography variant="caption" className={classes.shopName}>
							{firstReservation.shop}
						</Typography>
						<Typography variant="caption" className={classes.shopLocation}>
							• {firstReservation.location}
						</Typography>
					</Stack>

					{/* Status Badge */}
					<Box>
						<Box component="span" className={classes.statusBadge}>
							● {firstReservation.status}
						</Box>
					</Box>

					{/* Location and Time */}
					<Stack direction="row" className={classes.metaRow}>
						<Stack direction="row" className={classes.metaItem}>
							<LocationOnOutlinedIcon className={classes.metaIcon} />
							<Typography variant="caption" className={classes.metaText}>
								{firstReservation.location}
							</Typography>
						</Stack>
						<Stack direction="row" className={classes.metaItem}>
							<AccessTimeIcon className={classes.metaIcon} />
							<Typography variant="caption" className={classes.metaText}>
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
					className={classes.viewMapButton}
					onClick={() => onViewMap(firstReservation.reservationId)}
				>
					View Pickup Map
				</Button>
			</Box>
		</Box>
	);
};
