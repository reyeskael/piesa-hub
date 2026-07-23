import React from 'react';
import { Box, Button, IconButton, InputBase, Paper, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import type { Garage } from './types';

interface SearchHeaderProps {
	searchQuery: string;
	onSearchChange: (value: string) => void;
	selectedGarage: Garage | undefined;
	garages: Garage[];
	onGarageSelect: (garageId: string) => void;
	showFilters: boolean;
	onToggleFilters: () => void;
}

export const SearchHeader: React.FC<SearchHeaderProps> = ({
	searchQuery,
	onSearchChange,
	selectedGarage,
	garages,
	onGarageSelect,
	showFilters,
	onToggleFilters,
}) => {
	return (
		<Box sx={{ mb: 3 }}>
			{/* Search Bar */}
			<Paper
				sx={{
					display: 'flex',
					alignItems: 'center',
					backgroundColor: '#262626',
					border: '1px solid #2D2D2D',
					borderRadius: '24px',
					px: 2,
					py: 1,
					mb: 2,
				}}
			>
				<SearchIcon sx={{ color: '#6B7280', mr: 1 }} />
				<InputBase
					placeholder="Search parts, brands..."
					value={searchQuery}
					onChange={(e) => onSearchChange(e.target.value)}
					sx={{
						flex: 1,
						color: '#FFFFFF',
						'& .MuiInputBase-input::placeholder': {
							color: '#6B7280',
							opacity: 0.7,
						},
					}}
				/>
				{searchQuery && (
					<IconButton
						size="small"
						onClick={() => onSearchChange('')}
						sx={{ color: '#6B7280' }}
					>
						<ClearIcon fontSize="small" />
					</IconButton>
				)}
			</Paper>

			{/* Garage Selector and Filter Button Row */}
			<Stack direction="row" gap={2}>
				{/* Garage Selector */}
				{selectedGarage && (
					<Paper
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							backgroundColor: '#262626',
							border: '1px solid #2D2D2D',
							borderRadius: '20px',
							px: 2,
							py: 1.2,
							flex: 1,
						}}
					>
						<Stack direction="row" alignItems="center" gap={1}>
							<span style={{ fontSize: '1.2rem' }}>🏍️</span>
							<Box>
								<Typography variant="caption" sx={{ color: '#6B7280', display: 'block' }}>
									My Garage
								</Typography>
								<Typography
									variant="body2"
									sx={{
										color: '#FFFFFF',
										fontWeight: 600,
									}}
								>
									{selectedGarage.year} {selectedGarage.make} {selectedGarage.model}
								</Typography>
							</Box>
						</Stack>
						<ExpandMoreIcon sx={{ color: '#9CA3AF' }} />
					</Paper>
				)}

				{/* Filter Button */}
				<Button
					startIcon={<TuneIcon />}
					variant="outlined"
					sx={{
						color: showFilters ? '#FF6B00' : '#9CA3AF',
						borderColor: showFilters ? '#FF6B00' : '#2D2D2D',
						textTransform: 'none',
						padding: '10px 16px',
						'&:hover': {
							borderColor: '#FF6B00',
							color: '#FF6B00',
						},
					}}
					onClick={onToggleFilters}
				>
					Filter
				</Button>
			</Stack>
		</Box>
	);
};
