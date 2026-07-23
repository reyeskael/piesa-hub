import React, { useMemo, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { PartSearchFilters } from '../components/find-parts/PartSearchFilters';
import { PartCategoryChips } from '../components/find-parts/PartCategoryChips';
import { PartResultsList } from '../components/find-parts/PartResultsList';
import type { FilterValues, PartResult } from '../components/find-parts/types';
import mockParts from '../data/mock-parts.json';

const years = ['2026', '2025', '2024', '2023', '2022'];
const makes = ['Honda', 'Yamaha', 'Kawasaki', 'Suzuki'];
const modelOptions: Record<string, string[]> = {
	Honda: ['CB500F', 'CRF450R', 'Rebel 500'],
	Yamaha: ['MT-07', 'YZF-R3', 'Tenere 700'],
	Kawasaki: ['Ninja 650', 'Z650', 'KX450'],
	Suzuki: ['GSX-R600', 'V-Strom 650', 'SV650'],
};
const categories = [
	'Engine & Transmission',
	'Brakes',
	'Electrical',
	'Suspension',
	'Bodywork',
];

const sampleResults: PartResult[] = mockParts as PartResult[];

export const FindPartsPage: React.FC = () => {
	const [filters, setFilters] = useState<FilterValues>({
		year: '2025',
		make: 'Honda',
		model: 'CB500F',
		category: '',
		keyword: '',
	});

	const availableModels = useMemo(() => modelOptions[filters.make] ?? [], [filters.make]);

	const filteredResults = useMemo(() => {
		return sampleResults.filter((item) => {
			const matchesYear = filters.year ? item.year === filters.year : true;
			const matchesMake = filters.make ? item.make === filters.make : true;
			const matchesModel = filters.model ? item.model === filters.model : true;
			const matchesCategory = filters.category ? item.category === filters.category : true;
			const matchesKeyword = filters.keyword
				? item.name.toLowerCase().includes(filters.keyword.toLowerCase()) ||
					item.partNumber.toLowerCase().includes(filters.keyword.toLowerCase()) ||
					item.keywords.some((keyword) => keyword.toLowerCase().includes(filters.keyword.toLowerCase()))
				: true;

			return matchesYear && matchesMake && matchesModel && matchesCategory && matchesKeyword;
		});
	}, [filters.category, filters.keyword, filters.make, filters.model, filters.year]);

	const handleFilterChange = (key: keyof FilterValues, value: string) => {
		setFilters((current) => ({
			...current,
			[key]: value,
		}));
	};

	const handleMakeChange = (value: string) => {
		handleFilterChange('make', value);
		const firstModel = modelOptions[value]?.[0] ?? '';
		handleFilterChange('model', firstModel);
	};

	const resetResults = () => {
		// Placeholder for real search action if needed.
	};

	return (
		<Box sx={{ mt: 4 }}>
			<Typography variant="h4" component="h1" gutterBottom>
				Find Parts
			</Typography>

			<Typography variant="body1" sx={{ mb: 4, maxWidth: 680 }}>
				Use the precision search filters to find compatible motorcycle parts for the year, make, and model in your garage. Select a category and search by part name or OEM number.
			</Typography>

			<PartSearchFilters
				years={years}
				makes={makes}
				availableModels={availableModels}
				categories={categories}
				values={filters}
				onYearChange={(value) => handleFilterChange('year', value)}
				onMakeChange={handleMakeChange}
				onModelChange={(value) => handleFilterChange('model', value)}
				onCategoryChange={(value) => handleFilterChange('category', value)}
				onKeywordChange={(value) => handleFilterChange('keyword', value)}
				onSearch={resetResults}
			/>

			<PartCategoryChips
				categories={categories}
				selectedCategory={filters.category}
				onSelectCategory={(value) => handleFilterChange('category', value)}
			/>

			<PartResultsList results={filteredResults} />
		</Box>
	);
};
