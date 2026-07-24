import React, { useState } from 'react';
import { Box, Button, IconButton, InputBase, Menu, MenuItem, Paper, Stack, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import type { Garage } from '../models/types';

interface SearchHeaderProps {
	searchQuery: string;
	onSearchChange: (value: string) => void;
	selectedGarage: Garage | undefined;
	garages: Garage[];
	onGarageSelect: (garageId: string) => void;
	showFilters: boolean;
	onToggleFilters: () => void;
}

const useStyles = makeStyles<{ showFilters: boolean }>()((theme, { showFilters }) => ({
	root: {
		marginBottom: 24,
	},
	searchBar: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: theme.palette.background.elevated,
		border: `1px solid ${theme.palette.divider}`,
		borderRadius: '24px',
		padding: '8px 16px',
		marginBottom: 16,
	},
	searchIcon: {
		color: theme.palette.text.disabled,
		marginRight: 8,
	},
	searchInput: {
		flex: 1,
		color: theme.palette.text.primary,
		'& .MuiInputBase-input::placeholder': {
			color: theme.palette.text.disabled,
			opacity: 0.7,
		},
	},
	clearButton: {
		color: theme.palette.text.disabled,
	},
	selectorRow: {
		gap: 16,
	},
	garageButton: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: theme.palette.background.elevated,
		border: `1px solid ${theme.palette.divider}`,
		borderRadius: '20px',
		padding: '9.6px 16px',
		flex: 1,
		cursor: 'pointer',
		transition: 'all 0.2s ease',
		'&:hover': {
			borderColor: theme.palette.primary.main,
			backgroundColor: theme.palette.divider,
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
		color: theme.palette.text.disabled,
		display: 'block',
	},
	garageName: {
		color: theme.palette.text.primary,
		fontWeight: 600,
	},
	garageExpandIcon: {
		color: theme.palette.text.secondary,
	},
	menuPaper: {
		border: `1px solid ${theme.palette.divider}`,
		borderRadius: '8px',
		marginTop: 8,
	},
	menuItem: {
		padding: '10px 16px',
		fontSize: '0.95rem',
		'&.Mui-selected': {
			fontWeight: 600,
		},
	},
	filterButton: {
		color: showFilters ? theme.palette.primary.main : theme.palette.text.secondary,
		borderColor: showFilters ? theme.palette.primary.main : theme.palette.divider,
		textTransform: 'none',
		padding: '10px 16px',
		'&:hover': {
			borderColor: theme.palette.primary.main,
			color: theme.palette.primary.main,
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
