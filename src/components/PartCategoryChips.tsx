import React from 'react';
import { Box, Chip } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface PartCategoryChipsProps {
	categories: string[];
	selectedCategory: string;
	onSelectCategory: (category: string) => void;
}

const useStyles = makeStyles()({
	root: {
		marginBottom: 24,
		display: 'flex',
		flexWrap: 'wrap',
		gap: 8,
	},
});

export const PartCategoryChips: React.FC<PartCategoryChipsProps> = ({ categories, selectedCategory, onSelectCategory }) => {
	const { classes } = useStyles();

	return (
		<Box className={classes.root}>
			{categories.map((option) => (
				<Chip
					key={option}
					label={option}
					color={option === selectedCategory ? 'primary' : 'default'}
					clickable
					onClick={() => onSelectCategory(option)}
				/>
			))}
		</Box>
	);
};
