import React from 'react';
import { Box, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

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

const useStyles = makeStyles<{ isSelected: boolean; image: string }>()((_theme, { isSelected, image }) => ({
	card: {
		backgroundColor: '#1E1E1E',
		borderColor: isSelected ? '#FF6B00' : '#2D2D2D',
		border: '1px solid',
		marginBottom: 16,
		overflow: 'visible',
	},
	cardContent: {
		padding: 16,
		'&:last-child': {
			paddingBottom: 16,
		},
	},
	primaryBadgeRow: {
		marginBottom: 16,
	},
	primaryChip: {
		backgroundColor: '#FF6B00',
		color: '#FFFFFF',
		fontWeight: 600,
		height: '28px',
		fontSize: '0.85rem',
	},
	bikeInfoRow: {
		marginBottom: 16,
	},
	bikeImage: {
		width: 80,
		height: 80,
		backgroundColor: '#262626',
		borderRadius: '8px',
		backgroundImage: `url(${image})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		flexShrink: 0,
	},
	bikeDetails: {
		flex: 1,
		justifyContent: 'space-between',
	},
	bikeName: {
		color: '#FFFFFF',
		fontWeight: 600,
	},
	bikePlate: {
		color: '#9CA3AF',
		marginBottom: 4,
	},
	bikeMileage: {
		color: '#6B7280',
	},
	activeChip: {
		backgroundColor: 'rgba(34, 197, 94, 0.1)',
		color: '#22C55E',
		fontWeight: 600,
		width: '100%',
	},
	selectButton: {
		color: '#FF6B00',
		borderColor: '#FF6B00',
		textTransform: 'none',
		'&:hover': {
			backgroundColor: 'rgba(255, 107, 0, 0.1)',
		},
	},
}));

export const BikeCard: React.FC<BikeCardProps> = ({ bike, onSelect, isSelected }) => {
	const { classes } = useStyles({ isSelected, image: bike.image });

	return (
		<Card className={classes.card}>
			<CardContent className={classes.cardContent}>
				{/* Primary Badge */}
				{bike.isPrimary && (
					<Box className={classes.primaryBadgeRow}>
						<Chip label="⭐ Primary Bike" className={classes.primaryChip} />
					</Box>
				)}

				{/* Bike Image and Info */}
				<Stack direction="row" spacing={2} className={classes.bikeInfoRow}>
					<Box className={classes.bikeImage} />
					<Stack className={classes.bikeDetails}>
						<Box>
							<Typography variant="h6" className={classes.bikeName}>
								{bike.year} {bike.make} {bike.model}
							</Typography>
							<Typography variant="body2" className={classes.bikePlate}>
								Plate: {bike.plate}
							</Typography>
							<Typography variant="caption" className={classes.bikeMileage}>
								{bike.mileage.toLocaleString()} km
							</Typography>
						</Box>
					</Stack>
				</Stack>

				{/* Action Button */}
				{isSelected ? (
					<Chip label="✓ Active" className={classes.activeChip} />
				) : (
					<Button
						variant="outlined"
						fullWidth
						className={classes.selectButton}
						onClick={() => onSelect(bike.bikeId)}
					>
						Select
					</Button>
				)}
			</CardContent>
		</Card>
	);
};
