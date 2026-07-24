import React from 'react';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
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

const useStyles = makeStyles()((theme) => ({
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
		fontWeight: 700,
	},
	countChip: {
		fontWeight: 600,
		height: '24px',
	},
	addButton: {
		color: theme.palette.primary.main,
		textTransform: 'none',
		fontSize: '0.9rem',
		'&:hover': {
			backgroundColor: alpha(theme.palette.primary.main, 0.1),
		},
	},
}));

export const BikeList: React.FC<BikeListProps> = ({ bikes, selectedBikeId, onSelectBike, onAddBike }) => {
	const { classes } = useStyles();

	return (
		<Box className={classes.root}>
			{/* Header */}
			<Stack direction="row" className={classes.header}>
				<Stack direction="row" className={classes.titleRow}>
					<Typography variant="h6" className={classes.title}>
						My Fleet
					</Typography>
					<Chip label={bikes.length} className={classes.countChip} />
				</Stack>
				<Button startIcon={<AddIcon />} className={classes.addButton} onClick={onAddBike}>
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
