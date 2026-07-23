import React, { useState } from 'react';
import { Box, Button, IconButton, InputBase, Menu, MenuItem, Paper, Stack, Typography } from '@mui/material';
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
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleGarageOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleGarageClose = () => {
		setAnchorEl(null);
	};

	const handleGarageChange = (garageId: string) => {
		onGarageSelect(garageId);
		handleGarageClose();
	};

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
				{/* Garage Selector Dropdown */}
				{selectedGarage && (
					<>
						<Paper
							component="button"
							onClick={handleGarageOpen}
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
								cursor: 'pointer',
								transition: 'all 0.2s ease',
								'&:hover': {
									borderColor: '#FF6B00',
									backgroundColor: '#2D2D2D',
								},
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

						{/* Dropdown Menu */}
						<Menu
							anchorEl={anchorEl}
							open={Boolean(anchorEl)}
							onClose={handleGarageClose}
							PaperProps={{
								sx: {
									backgroundColor: '#1E1E1E',
									border: '1px solid #2D2D2D',
									borderRadius: '8px',
									mt: 1,
								},
							}}
						>
							{garages.map((garage) => (
								<MenuItem
									key={garage.id}
									onClick={() => handleGarageChange(garage.id)}
									selected={garage.id === selectedGarage.id}
									sx={{
										backgroundColor: garage.id === selectedGarage.id ? 'rgba(255, 107, 0, 0.2)' : 'transparent',
										color: garage.id === selectedGarage.id ? '#FF6B00' : '#FFFFFF',
										'&:hover': {
											backgroundColor: garage.id === selectedGarage.id ? 'rgba(255, 107, 0, 0.3)' : '#262626',
										},
										padding: '10px 16px',
										fontSize: '0.95rem',
										fontWeight: garage.id === selectedGarage.id ? 600 : 400,
									}}
								>
									{garage.year} {garage.make} {garage.model}
								</MenuItem>
							))}
						</Menu>
					</>
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
