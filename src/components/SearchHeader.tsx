import React, { useState } from 'react';
import { Box, Button, IconButton, InputBase, Menu, MenuItem, Paper, Stack, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import type { Garage } from './find-parts/types';

interface SearchHeaderProps {
	searchQuery: string;
	onSearchChange: (value: string) => void;
	selectedGarage: Garage | undefined;
	garages: Garage[];
	onGarageSelect: (garageId: string) => void;
	showFilters: boolean;
	onToggleFilters: () => void;
}

const useStyles = makeStyles<{ showFilters: boolean }>()((_theme, { showFilters }) => ({
	root: {
		marginBottom: 24,
	},
	searchBar: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: '#262626',
		border: '1px solid #2D2D2D',
		borderRadius: '24px',
		padding: '8px 16px',
		marginBottom: 16,
	},
	searchIcon: {
		color: '#6B7280',
		marginRight: 8,
	},
	searchInput: {
		flex: 1,
		color: '#FFFFFF',
		'& .MuiInputBase-input::placeholder': {
			color: '#6B7280',
			opacity: 0.7,
		},
	},
	clearButton: {
		color: '#6B7280',
	},
	selectorRow: {
		gap: 16,
	},
	garageButton: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#262626',
		border: '1px solid #2D2D2D',
		borderRadius: '20px',
		padding: '9.6px 16px',
		flex: 1,
		cursor: 'pointer',
		transition: 'all 0.2s ease',
		'&:hover': {
			borderColor: '#FF6B00',
			backgroundColor: '#2D2D2D',
		},
	},
	garageInfo: {
		alignItems: 'center',
		gap: 8,
	},
	garageEmoji: {
		fontSize: '1.2rem',
	},
	garageLabel: {
		color: '#6B7280',
		display: 'block',
	},
	garageName: {
		color: '#FFFFFF',
		fontWeight: 600,
	},
	garageExpandIcon: {
		color: '#9CA3AF',
	},
	menuPaper: {
		backgroundColor: '#1E1E1E',
		border: '1px solid #2D2D2D',
		borderRadius: '8px',
		marginTop: 8,
	},
	menuItem: {
		backgroundColor: 'transparent',
		color: '#FFFFFF',
		padding: '10px 16px',
		fontSize: '0.95rem',
		fontWeight: 400,
		'&:hover': {
			backgroundColor: '#262626',
		},
		'&.Mui-selected': {
			backgroundColor: 'rgba(255, 107, 0, 0.2)',
			color: '#FF6B00',
			fontWeight: 600,
			'&:hover': {
				backgroundColor: 'rgba(255, 107, 0, 0.3)',
			},
		},
	},
	filterButton: {
		color: showFilters ? '#FF6B00' : '#9CA3AF',
		borderColor: showFilters ? '#FF6B00' : '#2D2D2D',
		textTransform: 'none',
		padding: '10px 16px',
		'&:hover': {
			borderColor: '#FF6B00',
			color: '#FF6B00',
		},
	},
}));

export const SearchHeader: React.FC<SearchHeaderProps> = ({
	searchQuery,
	onSearchChange,
	selectedGarage,
	garages,
	onGarageSelect,
	showFilters,
	onToggleFilters,
}) => {
	const { classes } = useStyles({ showFilters });
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
		<Box className={classes.root}>
			{/* Search Bar */}
			<Paper className={classes.searchBar}>
				<SearchIcon className={classes.searchIcon} />
				<InputBase
					placeholder="Search parts, brands..."
					value={searchQuery}
					onChange={(e) => onSearchChange(e.target.value)}
					className={classes.searchInput}
				/>
				{searchQuery && (
					<IconButton
						size="small"
						onClick={() => onSearchChange('')}
						className={classes.clearButton}
					>
						<ClearIcon fontSize="small" />
					</IconButton>
				)}
			</Paper>

			{/* Garage Selector and Filter Button Row */}
			<Stack direction="row" className={classes.selectorRow}>
				{/* Garage Selector Dropdown */}
				{selectedGarage && (
					<>
						<Paper
							component="button"
							onClick={handleGarageOpen}
							className={classes.garageButton}
						>
							<Stack direction="row" className={classes.garageInfo}>
								<span className={classes.garageEmoji}>🏍️</span>
								<Box>
									<Typography variant="caption" className={classes.garageLabel}>
										My Garage
									</Typography>
									<Typography variant="body2" className={classes.garageName}>
										{selectedGarage.year} {selectedGarage.make} {selectedGarage.model}
									</Typography>
								</Box>
							</Stack>
							<ExpandMoreIcon className={classes.garageExpandIcon} />
						</Paper>

						{/* Dropdown Menu */}
						<Menu
							anchorEl={anchorEl}
							open={Boolean(anchorEl)}
							onClose={handleGarageClose}
							slotProps={{ paper: { className: classes.menuPaper } }}
						>
							{garages.map((garage) => (
								<MenuItem
									key={garage.id}
									onClick={() => handleGarageChange(garage.id)}
									selected={garage.id === selectedGarage.id}
									className={classes.menuItem}
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
					className={classes.filterButton}
					onClick={onToggleFilters}
				>
					Filter
				</Button>
			</Stack>
		</Box>
	);
};
