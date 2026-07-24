import React from 'react';
import { Box, Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface GarageSelectorProps {
	garages: Array<{
		id: string;
		year: string;
		make: string;
		model: string;
	}>;
	selectedGarageId: string;
	onSelectGarage: (garageId: string) => void;
}

const useStyles = makeStyles()((theme) => ({
	button: {
		backgroundColor: theme.palette.background.elevated,
		color: theme.palette.text.primary,
		textTransform: 'none',
		padding: '10px 16px',
		borderRadius: '24px',
		fontSize: '0.95rem',
		border: `1px solid ${theme.palette.divider}`,
		'&:hover': {
			backgroundColor: theme.palette.divider,
		},
	},
	label: {
		display: 'flex',
		alignItems: 'center',
		gap: 8,
	},
	emoji: {
		fontSize: '1.2rem',
	},
}));

export const GarageSelector: React.FC<GarageSelectorProps> = ({
	garages,
	selectedGarageId,
	onSelectGarage,
}) => {
	const { classes } = useStyles();
	const selectedGarage = garages.find((g) => g.id === selectedGarageId);

	if (!selectedGarage) return null;

	return (
		<Button variant="contained" className={classes.button} endIcon={<ExpandMoreIcon />}>
			<Box className={classes.label}>
				<span className={classes.emoji}>🏍️</span>
				<span>{selectedGarage.year} {selectedGarage.make} {selectedGarage.model}</span>
			</Box>
		</Button>
	);
};
