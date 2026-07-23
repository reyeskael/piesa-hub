import React from 'react';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
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

export const GarageSelector: React.FC<GarageSelectorProps> = ({
	garages,
	selectedGarageId,
	onSelectGarage,
}) => {
	const selectedGarage = garages.find((g) => g.id === selectedGarageId);

	if (!selectedGarage) return null;

	return (
		<Button
			variant="contained"
			sx={{
				backgroundColor: '#262626',
				color: '#FFFFFF',
				textTransform: 'none',
				padding: '10px 16px',
				borderRadius: '24px',
				fontSize: '0.95rem',
				border: '1px solid #2D2D2D',
				'&:hover': {
					backgroundColor: '#2D2D2D',
				},
			}}
			endIcon={<ExpandMoreIcon />}
		>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
				<span style={{ fontSize: '1.2rem' }}>🏍️</span>
				<span>{selectedGarage.year} {selectedGarage.make} {selectedGarage.model}</span>
			</Box>
		</Button>
	);
};
