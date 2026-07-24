import React from 'react';
import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	SelectChangeEvent,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import type { FilterValues } from './types';

interface PartSearchFiltersProps {
	years: string[];
	makes: string[];
	availableModels: string[];
	categories: string[];
	values: FilterValues;
	onYearChange: (value: string) => void;
	onMakeChange: (value: string) => void;
	onModelChange: (value: string) => void;
	onCategoryChange: (value: string) => void;
	onKeywordChange: (value: string) => void;
	onSearch: () => void;
}

const useStyles = makeStyles()({
	root: {
		padding: 24,
		marginBottom: 32,
	},
	actionsRow: {
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	searchButton: {
		width: 160,
	},
});

export const PartSearchFilters: React.FC<PartSearchFiltersProps> = ({
	years,
	makes,
	availableModels,
	categories,
	values,
	onYearChange,
	onMakeChange,
	onModelChange,
	onCategoryChange,
	onKeywordChange,
	onSearch,
}) => {
	const { classes } = useStyles();

	return (
		<Paper className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<InputLabel id="year-label">Year</InputLabel>
						<Select
							labelId="year-label"
							value={values.year}
							label="Year"
							onChange={(event: SelectChangeEvent<string>) => onYearChange(event.target.value)}
						>
							{years.map((option) => (
								<MenuItem key={option} value={option}>
									{option}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<InputLabel id="make-label">Make</InputLabel>
						<Select
							labelId="make-label"
							value={values.make}
							label="Make"
							onChange={(event: SelectChangeEvent<string>) => onMakeChange(event.target.value)}
						>
							{makes.map((option) => (
								<MenuItem key={option} value={option}>
									{option}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<InputLabel id="model-label">Model</InputLabel>
						<Select
							labelId="model-label"
							value={values.model}
							label="Model"
							onChange={(event: SelectChangeEvent<string>) => onModelChange(event.target.value)}
						>
							{availableModels.map((option) => (
								<MenuItem key={option} value={option}>
									{option}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<InputLabel id="category-label">Category</InputLabel>
						<Select
							labelId="category-label"
							value={values.category}
							label="Category"
							onChange={(event: SelectChangeEvent<string>) => onCategoryChange(event.target.value)}
						>
							{categories.map((option) => (
								<MenuItem key={option} value={option}>
									{option}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={12}>
					<TextField
						label="Keyword or OEM part number"
						value={values.keyword}
						onChange={(event) => onKeywordChange(event.target.value)}
						fullWidth
						placeholder="e.g. brake pads, spark plug, BP-1234"
					/>
				</Grid>

				<Grid item xs={12}>
					<Stack direction="row" spacing={2} className={classes.actionsRow}>
						<Button variant="contained" color="primary" className={classes.searchButton} onClick={onSearch}>
							Search compatible parts
						</Button>
						<Typography variant="body2" color="text.secondary">
							Based on saved garage criteria.
						</Typography>
					</Stack>
				</Grid>
			</Grid>
		</Paper>
	);
};
