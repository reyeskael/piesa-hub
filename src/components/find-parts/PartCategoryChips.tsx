import React from 'react';
import { Box, Chip } from '@mui/material';

interface PartCategoryChipsProps {
	categories: string[];
	selectedCategory: string;
	onSelectCategory: (category: string) => void;
}

export const PartCategoryChips: React.FC<PartCategoryChipsProps> = ({ categories, selectedCategory, onSelectCategory }) => (
	<Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
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
