import React, { useMemo, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { SearchHeader } from '../components/SearchHeader';
import { PartSearchFilters } from '../components/PartSearchFilters';
import { PartCategoryChips } from '../components/PartCategoryChips';
import { PartResultsList } from '../components/PartResultsList';
import { ShopsList } from '../components/ShopsList';
import type { FilterValues, PartResult, Garage } from '../models/types';
import mockParts from '../data/mock-parts.json';
import mockShops from '../data/mock-shops.json';
import mockBikes from '../data/mock-bikes.json';

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

// Convert bikes from mock data to Garage format
const garages: Garage[] = mockBikes.map((bike) => ({
	id: bike.bikeId,
	year: bike.year.toString(),
	make: bike.make,
	model: bike.model,
}));

const sampleResults: PartResult[] = mockParts as PartResult[];

const useStyles = makeStyles()({
	root: {
		marginTop: 16,
	},
	shopsSection: {
		marginTop: 48,
	},
	shopsTitle: {
		marginBottom: 24,
		color: '#FFFFFF',
		fontWeight: 600,
	},
});

export const FindPartsPage: React.FC = () => {
	const { classes } = useStyles();
	const [selectedGarageId, setSelectedGarageId] = useState(garages[0]?.id || '1');
	const [showFilters, setShowFilters] = useState(false);
	const [filters, setFilters] = useState<FilterValues>({
		year: garages[0]?.year || '2025',
		make: garages[0]?.make || 'Honda',
		model: garages[0]?.model || 'CB500F',
		category: '',
		keyword: '',
	});

	const selectedGarage = garages.find((g) => g.id === selectedGarageId);
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

	const handleGarageChange = (garageId: string) => {
		const selectedGarage = garages.find((g) => g.id === garageId);
		if (selectedGarage) {
			setSelectedGarageId(garageId);
			setFilters((current) => ({
				...current,
				year: selectedGarage.year,
				make: selectedGarage.make,
				model: selectedGarage.model,
			}));
		}
	};

	// Calculate price range (mock data - could be dynamic based on parts)
	const priceRange = '$18 – $25';

	// Sort shops by distance (closest first)
	const sortedShops = useMemo(() => {
		return [...mockShops].sort((a, b) => a.distance - b.distance);
	}, []);

	const firstPartName = filteredResults.length > 0 ? filteredResults[0].name : 'Part';

	return (
		<Box className={classes.root}>
			{/* Search Header with Garage Selector */}
			<SearchHeader
				searchQuery={filters.keyword}
				onSearchChange={(value) => handleFilterChange('keyword', value)}
				selectedGarage={selectedGarage}
				garages={garages}
				onGarageSelect={handleGarageChange}
				showFilters={showFilters}
				onToggleFilters={() => setShowFilters(!showFilters)}
			/>

			{showFilters && (
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
					onSearch={() => {}}
				/>
			)}

			<PartCategoryChips
				categories={categories}
				selectedCategory={filters.category}
				onSelectCategory={(value) => handleFilterChange('category', value)}
			/>

			<PartResultsList results={filteredResults} />

			{/* Shops Section - only show if parts found */}
			{filteredResults.length > 0 && (
				<Box className={classes.shopsSection}>
					<Typography variant="h6" className={classes.shopsTitle}>
						Shops Near You
					</Typography>
					<ShopsList
						shops={sortedShops}
						selectedPartName={firstPartName}
						priceRange={priceRange}
					/>
				</Box>
			)}
		</Box>
	);
};
