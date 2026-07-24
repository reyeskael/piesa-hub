import React from 'react';
import { Box, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
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

const useStyles = makeStyles<{ isSelected: boolean; image: string }>()((theme, { isSelected, image }) => ({
	card: {
		borderColor: isSelected ? theme.palette.primary.main : theme.palette.divider,
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
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
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
		backgroundColor: theme.palette.background.elevated,
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
		fontWeight: 600,
	},
	bikePlate: {
		marginBottom: 4,
	},
	bikeMileage: {
		color: theme.palette.text.disabled,
	},
	activeChip: {
		backgroundColor: alpha(theme.palette.success.main, 0.1),
		color: theme.palette.success.main,
		fontWeight: 600,
		width: '100%',
	},
	selectButton: {
		color: theme.palette.primary.main,
		borderColor: theme.palette.primary.main,
		textTransform: 'none',
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
