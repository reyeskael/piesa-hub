import React, { useMemo, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { SearchHeader } from '../components/find-parts/SearchHeader';
import { PartSearchFilters } from '../components/find-parts/PartSearchFilters';
import { PartCategoryChips } from '../components/find-parts/PartCategoryChips';
import { PartResultsList } from '../components/find-parts/PartResultsList';
import { ShopsList } from '../components/find-parts/ShopsList';
import type { FilterValues, PartResult, Garage } from '../components/find-parts/types';
import mockParts from '../data/mock-parts.json';
import mockShops from '../data/mock-shops.json';

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

const garages: Garage[] = [
	{ id: '1', year: '2025', make: 'Honda', model: 'CB500F' },
	{ id: '2', year: '2022', make: 'Yamaha', model: 'MT-07' },
	{ id: '3', year: '2023', make: 'Kawasaki', model: 'Z650' },
];

const sampleResults: PartResult[] = mockParts as PartResult[];

export const FindPartsPage: React.FC = () => {
	const [selectedGarageId, setSelectedGarageId] = useState('1');
	const [showFilters, setShowFilters] = useState(false);
	const [filters, setFilters] = useState<FilterValues>({
		year: '2025',
		make: 'Honda',
		model: 'CB500F',
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

	// Calculate price range (mock data - could be dynamic based on parts)
	const priceRange = '$18 – $25';

	// Sort shops by distance (closest first)
	const sortedShops = useMemo(() => {
		return [...mockShops].sort((a, b) => a.distance - b.distance);
	}, []);

	const firstPartName = filteredResults.length > 0 ? filteredResults[0].name : 'Part';

	return (
		<Box sx={{ mt: 2 }}>
			{/* Search Header with Garage Selector */}
			<SearchHeader
				searchQuery={filters.keyword}
				onSearchChange={(value) => handleFilterChange('keyword', value)}
				selectedGarage={selectedGarage}
				garages={garages}
				onGarageSelect={setSelectedGarageId}
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
				<Box sx={{ mt: 6 }}>
					<Typography variant="h6" sx={{ mb: 3, color: '#FFFFFF', fontWeight: 600 }}>
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
